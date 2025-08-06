
'use server';

import { techFaq, type TechFaqInput } from '@/ai/flows/tech-faq-genai';
import { assessLink as assessLinkFlow, type LinkAssessmentInput } from '@/ai/flows/link-assessment-genai';
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

export interface LinkAssessmentState {
    isPhishing: boolean | null;
    explanation: string | null;
    error: string | null;
}

const LinkSchema = z.string().url({ message: "Please enter a valid URL." });

export async function assessLink(
    prevState: LinkAssessmentState,
    formData: FormData
): Promise<LinkAssessmentState> {
    const link = formData.get('link') as string;

    const validatedLink = LinkSchema.safeParse(link);

    if (!validatedLink.success) {
        return {
            isPhishing: null,
            explanation: null,
            error: validatedLink.error.errors.map(e => e.message).join(', ')
        };
    }

    try {
        const input: LinkAssessmentInput = { url: validatedLink.data };
        const result = await assessLinkFlow(input);
        return { ...result, error: null };
    } catch (e) {
        console.error(e);
        return { isPhishing: null, explanation: null, error: 'An AI error occurred while assessing the link.' };
    }
}
