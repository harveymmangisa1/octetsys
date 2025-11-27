'use server';

import { z } from 'zod';

export type ContactFormState = {
    message: string | null;
    error: string | null;
};

const contactFormSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    company: z.string().optional(),
    service: z.string().min(1, 'Service is required'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function submitContactForm(
    formData: FormData
) {
    const rawFormData = Object.fromEntries(formData.entries());
    const validatedFields = contactFormSchema.safeParse(rawFormData);
    
    if (!validatedFields.success) {
        console.error('Form validation failed:', validatedFields.error.flatten().fieldErrors);
        // In a real app, you would return an error state here
        return;
    }

    console.log('New consultation request:', validatedFields.data);

    // Here you would typically send an email or save to a database.
    // For now, we'll just log it.
}

export type FeedbackState = {
    confirmationMessage: string | null;
    error: string | null;
};

const feedbackSchema = z.object({
    name: z.string().optional(),
    company: z.string().optional(),
    feedback: z.string().min(15, 'Feedback must be at least 15 characters long.'),
});

export async function submitFeedback(prevState: FeedbackState, formData: FormData): Promise<FeedbackState> {
    try {
        const validatedFields = feedbackSchema.safeParse({
            name: formData.get('name'),
            company: formData.get('company'),
            feedback: formData.get('feedback'),
        });

        if (!validatedFields.success) {
            return {
                confirmationMessage: null,
                error: "Invalid data provided. Please check your feedback.",
            };
        }

        console.log("New feedback received:", validatedFields.data);

        // In a real application, you would save this to a database.
        
        return {
            confirmationMessage: "Thank you for your feedback! We appreciate your insights.",
            error: null,
        };
    } catch (e) {
        return {
            confirmationMessage: null,
            error: "An unexpected error occurred. Please try again later.",
        };
    }
}

export type LinkAssessmentState = {
    isPhishing: boolean | null;
    explanation: string | null;
    error: string | null;
};

export async function assessLink(prevState: LinkAssessmentState, formData: FormData): Promise<LinkAssessmentState> {
    const url = formData.get('link') as string;
    
    if (!url || !url.trim()) {
        return { isPhishing: null, explanation: null, error: "Please enter a URL." };
    }

    // Simulate an AI assessment
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
        // Basic check for common phishing patterns
        if (url.includes('login') && (url.includes('.xyz') || url.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/))) {
            return {
                isPhishing: true,
                explanation: "This link uses suspicious patterns commonly found in phishing sites, such as a misleading domain and IP-like structure.",
                error: null,
            };
        }
        if (url.length > 75) {
             return {
                isPhishing: true,
                explanation: "The URL is unusually long, which can be a tactic to obscure the true domain.",
                error: null,
            };
        }
        return {
            isPhishing: false,
            explanation: "The link structure does not immediately raise any common phishing red flags. However, always remain cautious.",
            error: null,
        };
    } catch (e) {
        return { isPhishing: null, explanation: null, error: "Could not assess the link. Please try again." };
    }
}

export type IncidentReportState = {
    ticketId: string | null;
    message: string | null;
    error: string | null;
};

export async function submitIncidentReport(prevState: IncidentReportState, formData: FormData): Promise<IncidentReportState> {
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        incidentType: formData.get('incident-type'),
        description: formData.get('description'),
    };

    if (!data.incidentType || !data.description) {
        return { ticketId: null, message: null, error: 'Incident type and description are required.' };
    }

    console.log("New incident report:", data);
    
    // Simulate creating a ticket
    const ticketId = `OCTET-${Date.now()}`;
    
    return {
        ticketId,
        message: `Your report has been submitted. Your ticket ID is ${ticketId}.`,
        error: null
    };
}

export type AbuseReportState = {
    confirmationId: string | null;
    nextSteps: string | null;
    error: string | null;
};

export async function submitAbuseReport(prevState: AbuseReportState, formData: FormData): Promise<AbuseReportState> {
    const data = {
        abuseType: formData.get('abuse-type'),
        description: formData.get('abuse-description'),
    };

    if (!data.abuseType || !data.description) {
        return { confirmationId: null, nextSteps: null, error: 'Abuse type and description are required.' };
    }

    console.log("New anonymous abuse report:", data);

    const confirmationId = `ABUSE-${Date.now()}`;

    return {
        confirmationId,
        nextSteps: 'Your anonymous report has been received. Our team will review it. Thank you for helping keep the community safe.',
        error: null
    };
}

export type EmailAnalysisState = {
  isSuspicious: boolean | null;
  analysis: string | null;
  riskScore: number | null;
  error: string | null;
};

export async function analyzeEmailContent(prevState: EmailAnalysisState, formData: FormData): Promise<EmailAnalysisState> {
    const content = formData.get('email-content') as string;

    if (!content || content.length < 50) {
        return { ...prevState, error: 'Please paste the full email content (at least 50 characters).' };
    }
    
    // Simulate AI analysis delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    let score = 0;
    let analysisText = "";
    
    const lowerContent = content.toLowerCase();

    if (lowerContent.includes("urgent") || lowerContent.includes("immediate action required")) {
        score += 25;
        analysisText += "Uses urgent language to create pressure. ";
    }
    if (lowerContent.includes("verify your account") || lowerContent.includes("confirm your details")) {
        score += 30;
        analysisText += "Asks for account verification, a common phishing tactic. ";
    }
    if (lowerContent.includes("winner") || lowerContent.includes("prize") || lowerContent.includes("lottery")) {
        score += 20;
        analysisText += "Mentions winning a prize, which is often a scam. ";
    }
    if (lowerContent.match(/http:\/\//)) {
        score += 15;
        analysisText += "Contains non-secure HTTP links. ";
    }
     if (lowerContent.match(/(\d{1,3}\.){3}\d{1,3}/)) {
        score += 30;
        analysisText += "Contains a direct IP address link, which is highly suspicious. "
    }

    const isSuspicious = score > 40;

    if (isSuspicious) {
        analysisText = "This email shows several signs of a phishing attempt. " + analysisText;
    } else {
        analysisText = "This email does not contain common phishing keywords, but always be cautious with unexpected messages.";
        score = Math.max(10, score);
    }

    return {
        isSuspicious,
        analysis: analysisText.trim(),
        riskScore: Math.min(95, score),
        error: null
    };
}