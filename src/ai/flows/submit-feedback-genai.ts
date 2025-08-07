
'use server';
/**
 * @fileOverview A Genkit flow to handle user feedback submissions.
 *
 * - submitFeedback - A function that processes user-submitted feedback.
 * - SubmitFeedbackInput - The input type for the submitFeedback function.
 * - SubmitFeedbackOutput - The return type for the submitFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const SubmitFeedbackInputSchema = z.object({
  name: z.string().optional().describe('The name of the person providing feedback.'),
  company: z.string().optional().describe('The company of the person providing feedback.'),
  feedback: z.string().min(15, {message: "Feedback must be at least 15 characters long."}).describe('The feedback content.'),
});
export type SubmitFeedbackInput = z.infer<typeof SubmitFeedbackInputSchema>;

const SubmitFeedbackOutputSchema = z.object({
  confirmationMessage: z.string().describe('A thank you message for the user.'),
});
export type SubmitFeedbackOutput = z.infer<typeof SubmitFeedbackOutputSchema>;


export async function submitFeedback(input: SubmitFeedbackInput): Promise<SubmitFeedbackOutput> {
  return submitFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'submitFeedbackPrompt',
  input: {schema: SubmitFeedbackInputSchema},
  output: {schema: SubmitFeedbackOutputSchema},
  prompt: `A user has submitted feedback. The details are below. Your task is to process this information and generate a friendly confirmation message.

Name: {{{name}}}
Company: {{{company}}}
Feedback: {{{feedback}}}

Generate a warm and appreciative confirmation message thanking the user (by name, if provided) for their valuable feedback.`,
});

const submitFeedbackFlow = ai.defineFlow(
  {
    name: 'submitFeedbackFlow',
    inputSchema: SubmitFeedbackInputSchema,
    outputSchema: SubmitFeedbackOutputSchema,
  },
  async (input) => {
    // In a real application, you would store this feedback in a database.
    const {output} = await prompt(input);
    return output!;
  }
);
