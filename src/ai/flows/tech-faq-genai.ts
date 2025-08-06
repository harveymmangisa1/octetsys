// A Genkit flow to provide AI-generated answers to common IT questions.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

/**
 * @fileOverview A Genkit flow to provide AI-generated answers to common IT questions.
 *
 * - techFaq - A function that provides AI-generated answers to common IT questions.
 * - TechFaqInput - The input type for the techFaq function.
 * - TechFaqOutput - The return type for the techFaq function.
 */

const TechFaqInputSchema = z.object({
  question: z.string().describe('The IT question to be answered.'),
});

export type TechFaqInput = z.infer<typeof TechFaqInputSchema>;

const TechFaqOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the IT question.'),
});

export type TechFaqOutput = z.infer<typeof TechFaqOutputSchema>;

export async function techFaq(input: TechFaqInput): Promise<TechFaqOutput> {
  return techFaqFlow(input);
}

const techFaqPrompt = ai.definePrompt({
  name: 'techFaqPrompt',
  input: {schema: TechFaqInputSchema},
  output: {schema: TechFaqOutputSchema},
  prompt: `You are an AI assistant specialized in answering common IT questions.  Provide a concise and helpful answer to the following question:

Question: {{{question}}}`,
});

const techFaqFlow = ai.defineFlow(
  {
    name: 'techFaqFlow',
    inputSchema: TechFaqInputSchema,
    outputSchema: TechFaqOutputSchema,
  },
  async input => {
    const {output} = await techFaqPrompt(input);
    return output!;
  }
);
