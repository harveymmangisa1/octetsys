
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { analyzeEmailContent, type EmailAnalysisState } from '@/app/actions';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Sparkles, AlertTriangle, ShieldCheck } from "lucide-react";
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Progress } from '../ui/progress';

const initialState: EmailAnalysisState = {
  isSuspicious: null,
  analysis: null,
  riskScore: null,
  error: null,
};

function AnalyzeButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Bot className="mr-2 h-4 w-4 animate-spin" />
          Analyzing...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Analyze Email
        </>
      )}
    </Button>
  );
}

const riskLevels = {
    0: { label: 'Very Low', color: 'bg-green-500' },
    25: { label: 'Low', color: 'bg-lime-500' },
    50: { label: 'Medium', color: 'bg-yellow-500' },
    75: { label: 'High', color: 'bg-orange-500' },
    90: { label: 'Very High', color: 'bg-red-500' },
};

const getRiskInfo = (score: number) => {
    if (score >= 90) return riskLevels[90];
    if (score >= 75) return riskLevels[75];
    if (score >= 50) return riskLevels[50];
    if (score >= 25) return riskLevels[25];
    return riskLevels[0];
}

export function EmailAnalyzer() {
  const [state, formAction] = useFormState(analyzeEmailContent, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        title: "Analysis Error",
        description: state.error,
        variant: "destructive",
      });
    }
  }, [state.error, toast]);

  const riskInfo = state.riskScore !== null ? getRiskInfo(state.riskScore) : null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">AI Email Analyzer</CardTitle>
        <CardDescription>Paste the full content of a suspicious email below to get an instant security analysis.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <Textarea 
            id="email-content"
            name="email-content"
            placeholder="Paste email body here..."
            rows={10}
            required
            minLength={50}
          />
          <AnalyzeButton />
        </form>
        {state.analysis && riskInfo && (
            <div className="mt-6">
                 <Card className={state.isSuspicious ? "bg-destructive/10 border-destructive/50" : "bg-green-100/50 border-green-500/50"}>
                    <CardContent className="p-4 space-y-4">
                        <div className="flex items-center">
                            {state.isSuspicious ? 
                                <AlertTriangle className="h-8 w-8 text-destructive mr-3 flex-shrink-0" /> : 
                                <ShieldCheck className="h-8 w-8 text-green-600 mr-3 flex-shrink-0" />
                            }
                            <div>
                                <h3 className={`font-bold ${state.isSuspicious ? "text-destructive" : "text-green-700"}`}>
                                    {state.isSuspicious ? "Suspicious Email Detected" : "Email Appears Safe"}
                                </h3>
                                <p className={`text-sm ${state.isSuspicious ? "text-destructive/90" : "text-green-700/90"}`}>
                                    {state.analysis}
                                </p>
                            </div>
                        </div>
                        <div>
                            <Label className="text-sm font-medium">Risk Score: {state.riskScore}% ({riskInfo.label})</Label>
                            <Progress value={state.riskScore} className={`h-2 mt-1 ${riskInfo.color}`} />
                        </div>
                    </CardContent>
                </Card>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
