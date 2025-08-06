
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

const LinkAssessmentInputSchema = z.object({
  url: z.string().url().describe('The URL to be assessed for phishing risk.'),
});
export type LinkAssessmentInput = z.infer<typeof LinkAssessmentInputSchema>;

const LinkAssessmentOutputSchema = z.object({
  isPhishing: z.boolean().describe('Whether the link is likely to be a phishing attempt.'),
  explanation: z.string().describe('A brief explanation of why the link is considered safe or a phishing risk.'),
});
export type LinkAssessmentOutput = z.infer<typeof LinkAssessmentOutputSchema>;


export async function assessLink(input: LinkAssessmentInput): Promise<LinkAssessmentOutput> {
  return linkAssessmentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'linkAssessmentPrompt',
  input: {schema: LinkAssessmentInputSchema},
  output: {schema: LinkAssessmentOutputSchema},
  prompt: `You are a cybersecurity expert specializing in identifying phishing attempts. Analyze the following URL and determine if it is likely a phishing link.

URL: {{{url}}}

Consider the domain name, subdomains, URL path, and any query parameters. Look for signs of impersonation, suspicious TLDs, and common phishing patterns.

Provide a boolean response for 'isPhishing' and a concise, user-friendly explanation for your assessment. If it is phishing, briefly state the most suspicious element. If it seems safe, briefly state why.`,
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
