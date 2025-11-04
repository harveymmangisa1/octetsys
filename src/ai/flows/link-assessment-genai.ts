
'use server';
/**
 * @fileOverview A Genkit flow to assess a URL for phishing risks.
 *
 * - assessLink - A function that analyzes a URL and determines if it's likely a phishing attempt.
 * - LinkAssessmentInput - The input type for the assessLink function.
 * - LinkAssessmentOutput - The return type for the assessLink function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import fetch from 'node-fetch';

const LinkAssessmentInputSchema = z.object({
  url: z.string().url().describe('The URL to be assessed for phishing risk.'),
});
export type LinkAssessmentInput = z.infer<typeof LinkAssessmentInputSchema>;

const LinkAssessmentOutputSchema = z.object({
  isPhishing: z.boolean().describe('Whether the link is likely to be a phishing attempt.'),
  explanation: z.string().describe('A brief explanation of why the link is considered safe or a phishing risk.'),
});
export type LinkAssessmentOutput = z.infer<typeof LinkAssessmentOutputSchema>;


const checkVirusTotal = ai.defineTool(
    {
        name: 'checkVirusTotal',
        description: 'Checks a URL against the VirusTotal database of known malicious sites.',
        inputSchema: z.object({ url: z.string().url() }),
        outputSchema: z.object({
            isKnownMalicious: z.boolean(),
            positives: z.number(),
            total: z.number(),
            scan_date: z.string().optional(),
        }),
    },
    async ({ url }) => {
        const apiKey = process.env.VIRUSTOTAL_API_KEY;
        if (!apiKey) {
            console.log("VirusTotal API key not configured. Skipping check.");
            return { isKnownMalicious: false, positives: 0, total: 0 };
        }

        const apiUrl = `https://www.virustotal.com/api/v3/urls/${Buffer.from(url).toString('base64')}`;
        
        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'x-apikey': apiKey,
                    'User-Agent': 'genkit-virustotal-tool/1.0',
                },
            });

            if (!response.ok) {
                 if (response.status === 404) {
                    // URL not found in VirusTotal DB, which is not an error for our use case.
                    return { isKnownMalicious: false, positives: 0, total: 0 };
                 }
                console.error(`VirusTotal API request failed with status: ${response.status}`);
                return { isKnownMalicious: false, positives: 0, total: 0 };
            }

            const data: any = await response.json();
            const stats = data.data.attributes.last_analysis_stats;
            const positives = stats.malicious + stats.suspicious;
            const total = stats.harmless + stats.malicious + stats.suspicious + stats.undetected;

            return {
                isKnownMalicious: positives > 0,
                positives: positives,
                total: total,
                scan_date: data.data.attributes.last_analysis_date ? new Date(data.data.attributes.last_analysis_date * 1000).toDateString() : undefined,
            };

        } catch (error) {
            console.error('Error calling VirusTotal API:', error);
            return { isKnownMalicious: false, positives: 0, total: 0 };
        }
    }
);


export async function assessLink(input: LinkAssessmentInput): Promise<LinkAssessmentOutput> {
  return linkAssessmentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'linkAssessmentPrompt',
  input: {schema: LinkAssessmentInputSchema},
  output: {schema: LinkAssessmentOutputSchema},
  tools: [checkVirusTotal],
  prompt: `You are a cybersecurity expert specializing in identifying phishing attempts. Your primary task is to analyze the given URL.

URL: {{{url}}}

First, use the checkVirusTotal tool to see if the URL is a known malicious link.
- If the tool reports that the link is known malicious (positives > 0), your response must be that it IS a phishing attempt. State that it was identified by VirusTotal as malicious.
- If the tool reports 0 positive detections, proceed with your own analysis.

If the URL is not flagged by VirusTotal, then perform your own analysis. Consider the domain name, subdomains, URL path, and any query parameters. Look for signs of impersonation, suspicious TLDs, and common phishing patterns.

Based on all available information (tool output and your own analysis), provide a final boolean response for 'isPhishing' and a concise, user-friendly explanation for your assessment. If it is phishing, briefly state the most suspicious element. If it seems safe, briefly state why.`,
});

const linkAssessmentFlow = ai.defineFlow(
  {
    name: 'linkAssessmentFlow',
    inputSchema: LinkAssessmentInputSchema,
    outputSchema: LinkAssessmentOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
