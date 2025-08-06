
'use server';

import { techFaq, type TechFaqInput } from '@/ai/flows/tech-faq-genai';
import { z } from 'zod';

export interface FaqState {
  answer: string | null;
  error: string | null;
}

const QuestionSchema = z.string().min(10, { message: "Question must be at least 10 characters long." }).max(200, { message: "Question must be 200 characters or less." });


export async function askQuestion(
  prevState: FaqState,
  formData: FormData
): Promise<FaqState> {
  const question = formData.get('question') as string;

  const validatedQuestion = QuestionSchema.safeParse(question);

  if (!validatedQuestion.success) {
    return { 
        answer: null, 
        error: validatedQuestion.error.errors.map(e => e.message).join(', ') 
    };
  }

  try {
    const input: TechFaqInput = { question: validatedQuestion.data };
    const result = await techFaq(input);
    return { answer: result.answer, error: null };
  } catch (e) {
    console.error(e);
    return { answer: null, error: 'An AI error occurred. Please try again later.' };
  }
}
