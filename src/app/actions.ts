
'use server';

import { techFaq, type TechFaqInput } from '@/ai/flows/tech-faq-genai';
import { assessLink as assessLinkFlow, type LinkAssessmentInput } from '@/ai/flows/link-assessment-genai';
import { reportIncident as reportIncidentFlow, type ReportIncidentInput } from '@/ai/flows/report-incident-genai';
import { reportAbuse as reportAbuseFlow, type ReportAbuseInput } from '@/ai/flows/report-abuse-genai';
import { analyzeEmail as analyzeEmailFlow, type EmailAnalysisInput } from '@/ai/flows/email-analyzer-genai';
import { submitFeedback as submitFeedbackFlow, type SubmitFeedbackInput } from '@/ai/flows/submit-feedback-genai';
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

export interface IncidentReportState {
    ticketId: string | null;
    message: string | null;
    error: string | null;
}

const IncidentSchema = z.object({
    name: z.string().optional(),
    email: z.string().email({ message: "Please enter a valid email." }).optional().or(z.literal('')),
    incidentType: z.string().min(3, { message: "Incident type must be at least 3 characters." }),
    description: z.string().min(20, { message: "Description must be at least 20 characters." }),
});

export async function submitIncidentReport(
    prevState: IncidentReportState,
    formData: FormData
): Promise<IncidentReportState> {
    const validatedFields = IncidentSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        incidentType: formData.get('incident-type'),
        description: formData.get('description'),
    });
    
    if (!validatedFields.success) {
        return {
            ticketId: null,
            message: null,
            error: validatedFields.error.errors.map(e => e.message).join(', ')
        };
    }
    
    try {
        const result = await reportIncidentFlow(validatedFields.data);
        return { ...result, error: null };
    } catch (e) {
        console.error(e);
        return { ticketId: null, message: null, error: 'An AI error occurred while submitting the report.' };
    }
}

export interface AbuseReportState {
    confirmationId: string | null;
    nextSteps: string | null;
    error: string | null;
}

const AbuseSchema = z.object({
    abuseType: z.string().min(3, { message: "Abuse type must be at least 3 characters." }),
    description: z.string().min(20, { message: "Description must be at least 20 characters." }),
});

export async function submitAbuseReport(
    prevState: AbuseReportState,
    formData: FormData
): Promise<AbuseReportState> {
    const validatedFields = AbuseSchema.safeParse({
        abuseType: formData.get('abuse-type'),
        description: formData.get('abuse-description'),
    });

    if (!validatedFields.success) {
        return {
            confirmationId: null,
            nextSteps: null,
            error: validatedFields.error.errors.map(e => e.message).join(', ')
        };
    }
    
    try {
        const result = await reportAbuseFlow(validatedFields.data);
        return { ...result, error: null };
    } catch (e) {
        console.error(e);
        return { confirmationId: null, nextSteps: null, error: 'An AI error occurred while submitting the report.' };
    }
}

export interface EmailAnalysisState {
    isSuspicious: boolean | null;
    analysis: string | null;
    riskScore: number | null;
    error: string | null;
}

const EmailSchema = z.object({
    emailContent: z.string().min(50, { message: "Email content must be at least 50 characters." }),
});

export async function analyzeEmailContent(
    prevState: EmailAnalysisState,
    formData: FormData
): Promise<EmailAnalysisState> {
    const validatedFields = EmailSchema.safeParse({
        emailContent: formData.get('email-content'),
    });

    if (!validatedFields.success) {
        return {
            isSuspicious: null,
            analysis: null,
            riskScore: null,
            error: validatedFields.error.errors.map(e => e.message).join(', ')
        };
    }

    try {
        const result = await analyzeEmailFlow(validatedFields.data);
        return { ...result, error: null };
    } catch (e) {
        console.error(e);
        return { isSuspicious: null, analysis: null, riskScore: null, error: 'An AI error occurred during email analysis.' };
    }
}

export interface FeedbackState {
    confirmationMessage: string | null;
    error: string | null;
}

const FeedbackSchema = z.object({
    name: z.string().optional(),
    company: z.string().optional(),
    feedback: z.string().min(15, { message: "Feedback must be at least 15 characters long." }),
});

export async function submitFeedback(
    prevState: FeedbackState,
    formData: FormData
): Promise<FeedbackState> {
    const validatedFields = FeedbackSchema.safeParse({
        name: formData.get('name'),
        company: formData.get('company'),
        feedback: formData.get('feedback'),
    });

    if (!validatedFields.success) {
        return {
            confirmationMessage: null,
            error: validatedFields.error.errors.map(e => e.message).join(', ')
        };
    }

    try {
        const result = await submitFeedbackFlow(validatedFields.data);
        return { ...result, error: null };
    } catch (e) {
        console.error(e);
        return { confirmationMessage: null, error: 'An AI error occurred while submitting your feedback.' };
    }
}
