
'use server';
/**
 * @fileOverview A Genkit flow to handle incident reports.
 *
 * - reportIncident - A function that processes an incident report.
 * - ReportIncidentInput - The input type for the reportIncident function.
 * - ReportIncidentOutput - The return type for the reportIncident function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const ReportIncidentInputSchema = z.object({
  name: z.string().optional().describe('The name of the person reporting the incident.'),
  email: z.string().email().optional().describe('The email of the person reporting.'),
  incidentType: z.string().describe('The type of incident (e.g., Ransomware, Phishing).'),
  description: z.string().describe('A detailed description of the incident.'),
});
export type ReportIncidentInput = z.infer<typeof ReportIncidentInputSchema>;

const ReportIncidentOutputSchema = z.object({
  ticketId: z.string().describe('A unique ticket ID for the reported incident.'),
  message: z.string().describe('A confirmation message to be shown to the user.'),
});
export type ReportIncidentOutput = z.infer<typeof ReportIncidentOutputSchema>;


export async function reportIncident(input: ReportIncidentInput): Promise<ReportIncidentOutput> {
  return reportIncidentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'reportIncidentPrompt',
  input: {schema: ReportIncidentInputSchema},
  output: {schema: ReportIncidentOutputSchema},
  prompt: `A user is reporting a security incident. The details are below. Your task is to process this information, generate a unique ticket ID, and create a confirmation message.

Reporter Name: {{{name}}}
Reporter Email: {{{email}}}
Incident Type: {{{incidentType}}}
Description: {{{description}}}

Generate a ticket ID in the format 'OCTET-' followed by 6 random numbers.
For the confirmation message, thank the user (by name, if provided) and inform them that a ticket has been created and our team will be in touch shortly (at their email, if provided).`,
});

const reportIncidentFlow = ai.defineFlow(
  {
    name: 'reportIncidentFlow',
    inputSchema: ReportIncidentInputSchema,
    outputSchema: ReportIncidentOutputSchema,
  },
  async (input) => {
    // In a real application, this would integrate with a ticketing system.
    const {output} = await prompt(input);
    return output!;
  }
);
