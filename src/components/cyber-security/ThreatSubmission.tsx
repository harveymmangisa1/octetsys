
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { assessLink, submitIncidentReport, submitAbuseReport } from '@/app/actions';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShieldAlert, Link2, Bot, Sparkles, AlertCircle, ShieldCheck, KeyRound, Dices, MailWarning, UploadCloud, FileScan, UserX, UserCheck } from "lucide-react";
import { IncognitoIcon } from './IncognitoIcon';
import { type LinkAssessmentState, type IncidentReportState, type AbuseReportState } from '@/app/actions';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { PasswordGuide } from './PasswordGuide';
import { PasswordStrength } from './PasswordStrength';
import { EmailAnalyzer } from './EmailAnalyzer';
import { PasswordGame } from './PasswordGame';

const initialLinkState: LinkAssessmentState = {
  isPhishing: null,
  explanation: null,
  error: null,
};

const initialIncidentState: IncidentReportState = {
  ticketId: null,
  message: null,
  error: null,
};

const initialAbuseState: AbuseReportState = {
  confirmationId: null,
  nextSteps: null,
  error: null,
}

function IncidentSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg">
      {pending ? (
        <>
          <Bot className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        "Submit Report"
      )}
    </Button>
  );
}

function AbuseSubmitButton() {
    const { pending } = useFormStatus();
    return (
      <Button type="submit" disabled={pending} size="lg">
        {pending ? (
          <>
            <Bot className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Anonymously"
        )}
      </Button>
    );
  }

function AssessLinkSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Bot className="mr-2 h-4 w-4 animate-spin" />
          Assessing...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Assess Link
        </>
      )}
    </Button>
  );
}


export function ThreatSubmission() {
  const { toast } = useToast();

  const [linkState, linkFormAction] = useActionState(assessLink, initialLinkState);
  const [incidentState, incidentFormAction] = useActionState(submitIncidentReport, initialIncidentState);
  const [abuseState, abuseFormAction] = useActionState(submitAbuseReport, initialAbuseState);
  
  const incidentFormRef = useRef<HTMLFormElement>(null);
  const abuseFormRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (linkState.error) {
      toast({ title: "Error", description: linkState.error, variant: "destructive" });
    }
  }, [linkState.error, toast]);

  useEffect(() => {
    if (incidentState.error) {
      toast({ title: "Submission Failed", description: incidentState.error, variant: "destructive" });
    }
    if (incidentState.ticketId) {
        toast({ title: "Report Submitted", description: incidentState.message || "Your report has been received." });
        incidentFormRef.current?.reset();
    }
  }, [incidentState, toast]);

  useEffect(() => {
    if (abuseState.error) {
        toast({ title: "Submission Failed", description: abuseState.error, variant: "destructive" });
    }
    if (abuseState.confirmationId) {
        toast({ title: "Report Submitted Anonymously", description: abuseState.nextSteps || "Your report has been received." });
        abuseFormRef.current?.reset();
    }
  }, [abuseState, toast]);


  return (
    <section id="threat-submission" className="py-16 sm:py-24 bg-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="scan" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto h-auto">
              <TabsTrigger value="scan" className="py-3 text-base"><FileScan className="mr-2" /> Analyze & Scan</TabsTrigger>
              <TabsTrigger value="report" className="py-3 text-base"><ShieldAlert className="mr-2" /> Report a Threat</TabsTrigger>
              <TabsTrigger value="password" className="py-3 text-base"><KeyRound className="mr-2" /> Password Hub</TabsTrigger>
            </TabsList>
            <div className="mt-8 max-w-6xl mx-auto">
                <TabsContent value="scan">
                  <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Analyze & Scan</h2>
                    <p className="mt-3 text-lg text-slate-600">
                      Proactively check for threats before they become a problem. Use our AI-powered tools to assess the safety of suspicious links and emails.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-semibold text-lg mb-4 text-slate-800">Phishing Link Scanner</h3>
                        <Card className="security-section">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Link2 />Phishing Link Scanner</CardTitle>
                                <CardDescription>Check suspicious links before clicking. Our AI analyzes multiple threat intelligence feeds in real-time.</CardDescription>
                            </CardHeader>
                            <CardContent>
                            <form action={linkFormAction} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="link">Suspicious Link</Label>
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <Input id="link" name="link" placeholder="https://example.com" required className="flex-grow"/>
                                        <AssessLinkSubmitButton />
                                    </div>
                                </div>
                            </form>
                            {linkState.isPhishing !== null && (
                                <div className="mt-6">
                                    <Card className={linkState.isPhishing ? "bg-destructive/10 border-destructive/50" : "bg-green-100/50 border-green-500/50"}>
                                        <CardContent className="p-4">
                                            <div className="flex items-center">
                                                {linkState.isPhishing ? 
                                                    <AlertCircle className="h-8 w-8 text-destructive mr-3" /> : 
                                                    <ShieldCheck className="h-8 w-8 text-green-600 mr-3" />
                                                }
                                                <div>
                                                    <h3 className={`font-bold ${linkState.isPhishing ? "text-destructive" : "text-green-700"}`}>
                                                        {linkState.isPhishing ? "Potential Phishing Link" : "Link Appears Safe"}
                                                    </h3>
                                                    <p className={`text-sm ${linkState.isPhishing ? "text-destructive/90" : "text-green-700/90"}`}>
                                                        {linkState.explanation}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            )}
                            </CardContent>
                        </Card>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-4 text-slate-800">Email Security Scan</h3>
                        <EmailAnalyzer />
                      </div>
                  </div>
                </TabsContent>
                <TabsContent value="report">
                  <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Report a Threat</h2>
                    <p className="mt-3 text-lg text-slate-600">
                      Help keep the community safe. Report security vulnerabilities, active incidents, or online abuse. Choose the option that best fits your situation.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <Card className="security-section">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><UserCheck />Incident Report</CardTitle>
                            <CardDescription>Report security vulnerabilities or active incidents. Provide your contact details so our team can follow up.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form ref={incidentFormRef} action={incidentFormAction} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                      <Label htmlFor="name">Full Name</Label>
                                      <Input id="name" name="name" placeholder="John Doe" />
                                  </div>
                                  <div className="space-y-2">
                                      <Label htmlFor="email">Email Address</Label>
                                      <Input id="email" name="email" type="email" placeholder="you@company.com" />
                                  </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="incident-type">Type of Incident</Label>
                                    <Input id="incident-type" name="incident-type" placeholder="e.g., Ransomware, Data Breach, Phishing Campaign" required />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="description">Detailed Description</Label>
                                  <Textarea id="description" name="description" placeholder="Please provide as much detail as possible..." rows={5} required />
                                </div>
                                <IncidentSubmitButton />
                            </form>
                        </CardContent>
                    </Card>
                    <Card className="security-section border-blue-500/50 bg-blue-50/20">
                      <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-blue-900"><UserX />Anonymous Abuse Report</CardTitle>
                          <CardDescription className="text-blue-800/80">Submit abuse claims anonymously. We are committed to your safety and privacy.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="privacy-notice bg-blue-100/50 border border-blue-200 text-blue-800 text-sm rounded-md p-4 mb-6 flex items-start gap-3">
                            <IncognitoIcon className="mr-2 h-6 w-6 flex-shrink-0 mt-0.5" />
                            <p>This submission is anonymous. We do not collect any personal information, IP addresses, or browser data.</p>
                        </div>
                        <form ref={abuseFormRef} action={abuseFormAction} className="space-y-6">
                            <div className="space-y-2">
                            <Label htmlFor="abuse-type">Type of Abuse</Label>
                            <Input id="abuse-type" name="abuse-type" placeholder="e.g., Harassment, Hate Speech, Impersonation" required />
                            </div>
                            <div className="space-y-2">
                            <Label htmlFor="abuse-description">Description of Abuse</Label>
                            <Textarea id="abuse-description" name="abuse-description" placeholder="Please provide a detailed account of the abuse..." rows={5} required/>
                            </div>
                            <AbuseSubmitButton />
                        </form>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="password">
                  <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Password Health Hub</h2>
                    <p className="mt-3 text-lg text-slate-600">
                      Your password is the first line of defense. Use these tools to learn about password security, test the strength of your passwords, and have a little fun.
                    </p>
                  </div>
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-8">
                        <PasswordStrength />
                        <PasswordGame />
                      </div>
                      <div>
                        <PasswordGuide />
                      </div>
                   </div>
                </TabsContent>
            </div>
          </Tabs>
      </div>
    </section>
  );
}
