
'use server';
/**
 * @fileOverview A Genkit flow to handle contact form submissions.
 *
 * - submitContactForm - A function that processes a user's contact request.
 * - ContactFormInput - The input type for the submitContactForm function.
 * - ContactFormOutput - The return type for the submitContactForm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const ContactFormInputSchema = z.object({
  name: z.string().describe("The user's full name."),
  email: z.string().email().describe("The user's email address."),
  company: z.string().optional().describe("The user's company name."),
  service: z.string().describe("The service the user is interested in."),
  message: z.string().describe("The user's message or inquiry."),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const ContactFormOutputSchema = z.object({
  confirmationMessage: z.string().describe('A confirmation message to be shown to the user.'),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;


export async function submitContactForm(input: ContactFormInput): Promise<ContactFormOutput> {
  return contactFormFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contactFormPrompt',
  input: {schema: ContactFormInputSchema},
  output: {schema: ContactFormOutputSchema},
  prompt: `A user has submitted the contact form with the following details. Generate a friendly confirmation message for them.

Name: {{{name}}}
Email: {{{email}}}
Company: {{{company}}}
Service of Interest: {{{service}}}
Message: {{{message}}}

Acknowledge their inquiry about the specified service and let them know that the team will review their message and respond to their email address within 1-2 business days. Thank them for contacting Octet Systems.`,
});

const contactFormFlow = ai.defineFlow(
  {
    name: 'contactFormFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async (input) => {
    // In a real application, you would send an email notification or log this to a CRM.
    const {output} = await prompt(input);
    return output!;
  }
);

    