
'use server';
/**
 * @fileOverview A Genkit flow to analyze email content for security risks.
 *
 * - analyzeEmail - A function that analyzes email text for signs of phishing, scams, or malicious intent.
 * - EmailAnalysisInput - The input type for the analyzeEmail function.
 * - EmailAnalysisOutput - The return type for the analyzeEmail function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const EmailAnalysisInputSchema = z.object({
  emailContent: z.string().min(50, {message: 'Email content must be at least 50 characters long.'}).describe('The full text content of the email to be analyzed.'),
});
export type EmailAnalysisInput = z.infer<typeof EmailAnalysisInputSchema>;

const EmailAnalysisOutputSchema = z.object({
  isSuspicious: z.boolean().describe('Whether the email is considered suspicious.'),
  analysis: z.string().describe('A brief analysis of the email, highlighting suspicious elements like urgency, suspicious links, or unusual requests.'),
  riskScore: z.number().min(0).max(100).describe('A score from 0 to 100 indicating the assessed risk level.'),
});
export type EmailAnalysisOutput = z.infer<typeof EmailAnalysisOutputSchema>;


export async function analyzeEmail(input: EmailAnalysisInput): Promise<EmailAnalysisOutput> {
  return emailAnalyzerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'emailAnalyzerPrompt',
  input: {schema: EmailAnalysisInputSchema},
  output: {schema: EmailAnalysisOutputSchema},
  prompt: `You are a cybersecurity expert specializing in email threat analysis. Analyze the following email content and determine if it shows signs of phishing, scam, or other malicious intent.

Email Content:
{{{emailContent}}}

Carefully evaluate the language, tone, requests, and any links or attachments mentioned. Look for red flags such as:
- Sense of urgency or threats.
- Requests for personal information, credentials, or financial details.
- Generic greetings.
- Poor grammar or spelling.
- Suspicious links or unexpected attachments.

Based on your analysis, provide a boolean 'isSuspicious' response, a concise 'analysis' explaining your reasoning, and a 'riskScore' from 0 (safe) to 100 (highly suspicious).`,
});

const emailAnalyzerFlow = ai.defineFlow(
  {
    name: 'emailAnalyzerFlow',
    inputSchema: EmailAnalysisInputSchema,
    outputSchema: EmailAnalysisOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
