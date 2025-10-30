
'use server';

import { techFaq, type TechFaqInput } from '@/ai/flows/tech-faq-genai';
import { assessLink as assessLinkFlow, type LinkAssessmentInput } from '@/ai/flows/link-assessment-genai';
import { reportIncident as reportIncidentFlow, type ReportIncidentInput } from '@/ai/flows/report-incident-genai';
import { reportAbuse as reportAbuseFlow, type ReportAbuseInput } from '@/ai/flows/report-abuse-genai';
import { analyzeEmail as analyzeEmailFlow, type EmailAnalysisInput, type EmailAnalysisOutput } from '@/ai/flows/email-analyzer-genai';
import { submitFeedback as submitFeedbackFlow, type SubmitFeedbackInput } from '@/ai/flows/submit-feedback-genai';
import { submitContactForm as submitContactFormFlow, type ContactFormInput } from '@/ai/flows/contact-form-genai';
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
};

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

export async function submitFeedback(
    prevState: FeedbackState,
    formData: FormData
): Promise<FeedbackState> {
    const validatedFields = z.object({
        name: z.string().optional(),
        company: z.string().optional(),
        feedback: z.string().min(15, {message: "Feedback must be at least 15 characters long."}),
    }).safeParse({
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
        return { confirmationMessage: null, error: 'An AI error occurred while submitting feedback.' };
    }
}


function formatEmailAnalysisResult(result: EmailAnalysisOutput): string {
  if (result.isSuspicious !== null && result.analysis !== null && result.riskScore !== null) {
      const riskLevel = result.riskScore >= 90 ? 'Very High' : result.riskScore >= 75 ? 'High' : result.riskScore >= 50 ? 'Medium' : result.riskScore >= 25 ? 'Low' : 'Very Low';
      return `Email Analysis:\nStatus: ${result.isSuspicious ? 'Suspicious' : 'Appears Safe'}\nRisk Score: ${result.riskScore}% (${riskLevel})\nAnalysis: ${result.analysis}`;
  }
  return "Could not analyze email.";
}

function formatLinkAssessmentResult(result: LinkAssessmentState): string {
    if (result.error) {
        return `Error assessing link: ${result.error}`;
    }
    if (result.isPhishing !== null && result.explanation !== null) {
        return `Link Assessment:\nStatus: ${result.isPhishing ? 'Potentially Malicious' : 'Appears Safe'}\nExplanation: ${result.explanation}`;
    }
 return "Could not assess link.";
}

export async function chatWithBwenzi(
 userMessage: string,
 // Optional: add conversation history here later
): Promise<{ response: string | null; error: string | null }> {
  try {
    let bwenziResponse: string | null = null;

    const lowerCaseMessage = userMessage.toLowerCase();

    // Very basic intent matching. In a real app, this would be more sophisticated.
    if (lowerCaseMessage.includes('how do i') || lowerCaseMessage.includes('what is') || lowerCaseMessage.includes('can you explain')) {
        const input: TechFaqInput = { question: userMessage };
        const result = await techFaq(input);
        bwenziResponse = result.answer;
    } else if (lowerCaseMessage.includes('http') || lowerCaseMessage.includes('www.')) {
        // Basic URL detection
        const urlMatch = userMessage.match(/https?:\/\/[^\s]+/);
        if(urlMatch) {
            const input: LinkAssessmentInput = { url: urlMatch[0] };
            const result = await assessLinkFlow(input);
            bwenziResponse = formatLinkAssessmentResult(result);
        } else {
            bwenziResponse = "That doesn't look like a valid URL. Please provide a full URL starting with http or https.";
        }
    } else if (lowerCaseMessage.length > 50 && (lowerCaseMessage.includes('subject:') || lowerCaseMessage.includes('from:'))) {
        // Basic email content detection
        const input: EmailAnalysisInput = { emailContent: userMessage };
        const result = await analyzeEmailFlow(input);
        bwenziResponse = formatEmailAnalysisResult(result);
    } else {
      // Default to general tech FAQ
      const input: TechFaqInput = { question: userMessage };
      const result = await techFaq(input);
      bwenziResponse = result.answer;
    }

    return { response: bwenziResponse, error: null };
  } catch (e) {
    console.error(e);
    return { response: null, error: 'An AI error occurred. Please try again later.' };
  }
}

export interface ContactFormState {
    confirmationMessage: string | null;
    error: string | null;
}

const ContactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    company: z.string().optional(),
    service: z.string().min(3, { message: "Please select a service." }),
    message: z.string().min(15, { message: "Message must be at least 15 characters." }),
});

export async function submitContactForm(
    prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const validatedFields = ContactFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        service: formData.get('service'),
        message: formData.get('message'),
    });
    
    if (!validatedFields.success) {
        return {
            confirmationMessage: null,
            error: validatedFields.error.errors.map(e => e.message).join(', ')
        };
    }
    
    try {
        const result = await submitContactFormFlow(validatedFields.data);
        return { ...result, error: null };
    } catch (e) {
        console.error(e);
        return { confirmationMessage: null, error: 'An AI error occurred while submitting your message.' };
    }
}
    

    
