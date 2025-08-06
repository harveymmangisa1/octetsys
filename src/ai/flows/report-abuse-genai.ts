
'use server';
/**
 * @fileOverview A Genkit flow to handle anonymous abuse reports.
 *
 * - reportAbuse - A function that processes an anonymous abuse report.
 * - ReportAbuseInput - The input type for the reportAbuse function.
 * - ReportAbuseOutput - The return type for the reportAbuse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const ReportAbuseInputSchema = z.object({
  abuseType: z.string().describe('The type of abuse being reported (e.g., Harassment, Hate Speech).'),
  description: z.string().describe('A detailed description of the abusive behavior.'),
});
export type ReportAbuseInput = z.infer<typeof ReportAbuseInputSchema>;

const ReportAbuseOutputSchema = z.object({
  confirmationId: z.string().describe('A unique confirmation ID for the report.'),
  nextSteps: z.string().describe('A brief summary of what happens next.'),
});
export type ReportAbuseOutput = z.infer<typeof ReportAbuseOutputSchema>;


export async function reportAbuse(input: ReportAbuseInput): Promise<ReportAbuseOutput> {
  return reportAbuseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'reportAbusePrompt',
  input: {schema: ReportAbuseInputSchema},
  output: {schema: ReportAbuseOutputSchema},
  prompt: `An anonymous user is reporting abuse. The details are below. Your task is to process this information, generate a unique confirmation ID, and provide a standardized response outlining the next steps.

Abuse Type: {{{abuseType}}}
Description: {{{description}}}

Generate a confirmation ID in the format 'AR-' followed by 8 random alphanumeric characters.
For the next steps, provide a generic message stating that the report has been received and will be reviewed by the security team. Do not promise any specific action or timeline.`,
});

const reportAbuseFlow = ai.defineFlow(
  {
    name: 'reportAbuseFlow',
    inputSchema: ReportAbuseInputSchema,
    outputSchema: ReportAbuseOutputSchema,
  },
  async (input) => {
    // In a real application, you would log this report to a secure database.
    const {output} = await prompt(input);
    return output!;
  }
);
