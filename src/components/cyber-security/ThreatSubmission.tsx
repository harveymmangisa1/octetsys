'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { assessLink, submitIncidentReport, submitAbuseReport } from '@/app/actions';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShieldAlert, Link2, Bot, Sparkles, AlertCircle, ShieldCheck, KeyRound, Dices, MailWarning, UploadCloud } from "lucide-react";
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
    <section id="threat-submission" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="report" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
              <TabsTrigger value="report"><ShieldAlert className="mr-2" /> Report</TabsTrigger>
              <TabsTrigger value="abuse"><IncognitoIcon className="mr-2" /> Anonymous</TabsTrigger>
              <TabsTrigger value="phishing"><Link2 className="mr-2" /> Phishing</TabsTrigger>
              <TabsTrigger value="email"><MailWarning className="mr-2" /> Email Scan</TabsTrigger>
              <TabsTrigger value="guide"><KeyRound className="mr-2" /> Guide</TabsTrigger>
              <TabsTrigger value="strength"><Dices className="mr-2" /> Strength</TabsTrigger>
              <TabsTrigger value="game"><Dices className="mr-2" /> Game</TabsTrigger>
            </TabsList>
            <div className="mt-8">
                <TabsContent value="report">
                    <Card className="security-section">
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl">Anonymous Security Reporting</CardTitle>
                            <p className="text-muted-foreground">Report security concerns with complete anonymity. Your privacy is our priority.</p>
                        </CardHeader>
                        <CardContent>
                             <div className="privacy-notice bg-green-100/50 border border-green-200 text-green-800 text-sm rounded-md p-4 mb-6 flex items-center">
                                <ShieldCheck className="mr-2 h-5 w-5" />
                                <p>No IP logging • No cookies • End-to-end encrypted • No personal data collected</p>
                            </div>
                            <form ref={incidentFormRef} action={incidentFormAction} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="report-type">Report Type</Label>
                                    <Input id="report-type" name="report-type" placeholder="e.g., Vulnerability, Incident, Phishing" required />
                                </div>
                                <div className="space-y-2">
                                <Label htmlFor="description">Detailed Description</Label>
                                <Textarea id="description" name="description" placeholder="Please provide as much detail as possible..." rows={5} required />
                                </div>
                                <div className="space-y-2">
                                    <Label>Attach Evidence (Optional)</Label>
                                    <div className="secure-upload border-2 border-dashed border-primary/50 p-10 text-center rounded-md cursor-pointer hover:bg-primary/5">
                                        <UploadCloud className="mx-auto h-10 w-10 text-primary/70" />
                                        <p className="mt-2 text-primary/70">Drag & drop files here or click to browse</p>
                                        <Input type="file" className="hidden" />
                                    </div>
                                </div>
                                <IncidentSubmitButton />
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="abuse">
                <Card className="security-section">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl">Anonymous Abuse Reporting</CardTitle>
                        <p className="text-muted-foreground">Submit abuse claims anonymously. We are committed to your safety.</p>
                    </CardHeader>
                    <CardContent>
                    <div className="privacy-notice bg-blue-100/50 border border-blue-200 text-blue-800 text-sm rounded-md p-4 mb-6 flex items-center">
                        <IncognitoIcon className="mr-2 h-5 w-5" />
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
                </TabsContent>
                <TabsContent value="phishing">
                    <Card className="security-section">
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl">Phishing Link Scanner</CardTitle>
                            <p className="text-muted-foreground">Check suspicious links before clicking. Our AI analyzes multiple threat intelligence feeds in real-time.</p>
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
                </TabsContent>
                <TabsContent value="email">
                    <EmailAnalyzer />
                </TabsContent>
                <TabsContent value="guide">
                    <PasswordGuide />
                </TabsContent>
                <TabsContent value="strength">
                    <PasswordStrength />
                </TabsContent>
                <TabsContent value="game">
                    <PasswordGame />
                </TabsContent>
            </div>
          </Tabs>
      </div>
    </section>
  );
}
