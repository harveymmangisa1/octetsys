
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


const checkPhishTank = ai.defineTool(
    {
        name: 'checkPhishTank',
        description: 'Checks a URL against the PhishTank database of known phishing sites.',
        inputSchema: z.object({ url: z.string().url() }),
        outputSchema: z.object({
            isKnownPhishing: z.boolean(),
            verified: z.boolean(),
            phish_detail_url: z.string().url().optional(),
        }),
    },
    async ({ url }) => {
        if (!process.env.PHISHTANK_API_KEY) {
            console.log("PhishTank API key not configured. Skipping check.");
            return { isKnownPhishing: false, verified: false };
        }

        const apiUrl = 'https://checkurl.phishtank.com/checkurl/';
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'genkit-phishtank-tool/1.0',
            },
            body: new URLSearchParams({
                url: url,
                format: 'json',
                app_key: process.env.PHISHTANK_API_KEY,
            }),
        });

        if (!response.ok) {
            console.error(`PhishTank API request failed with status: ${response.status}`);
            return { isKnownPhishing: false, verified: false };
        }

        const data: any = await response.json();

        const results = data.results;
        return {
            isKnownPhishing: results.in_database,
            verified: results.verified,
            phish_detail_url: results.phish_detail_url,
        };
    }
);


export async function assessLink(input: LinkAssessmentInput): Promise<LinkAssessmentOutput> {
  return linkAssessmentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'linkAssessmentPrompt',
  input: {schema: LinkAssessmentInputSchema},
  output: {schema: LinkAssessmentOutputSchema},
  tools: [checkPhishTank],
  prompt: `You are a cybersecurity expert specializing in identifying phishing attempts. Your primary task is to analyze the given URL.

URL: {{{url}}}

First, use the checkPhishTank tool to see if the URL is a known phishing link.
- If the tool confirms it is a verified phishing link, your response must be that it IS a phishing attempt. State that it was verified by PhishTank.
- If the tool indicates it's in the database but not verified, treat it as highly suspicious.

If the URL is not in the PhishTank database, then perform your own analysis. Consider the domain name, subdomains, URL path, and any query parameters. Look for signs of impersonation, suspicious TLDs, and common phishing patterns.

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
