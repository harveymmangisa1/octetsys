'use client'
import { useActionState, useEffect, useRef } from 'react';
import { askQuestion, type FaqState } from '@/app/actions';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Send, Sparkles, AlertCircle, CheckCircle2 } from "lucide-react";
import { useToast } from '@/hooks/use-toast';


const initialState: FaqState = {
  answer: null,
  error: null,
};

function SubmitButton() {
    const [state, formAction, isPending] = useActionState(askQuestion, initialState);
  return (
    <Button type="submit" disabled={isPending} className="w-full">
      {isPending ? (
        <>
          <Bot className="mr-2 h-4 w-4 animate-spin" />
          Thinking...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Ask Bwenzi
        </>
      )}
    </Button>
  );
}

export function TechFaq() {
  const [state, formAction] = useActionState(askQuestion, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  useEffect(() => {
    if (state.error) {
      toast({
        title: "Error",
        description: state.error,
        variant: "destructive",
      });
    }
    if (state.answer) {
        formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Tech Questions
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Have a question? Get instant, AI-powered answers from Bwenzi, your friendly cyber assistant.
          </p>
        </div>
        <Card className="max-w-3xl mx-auto mt-12 shadow-lg border-border/70">
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2">
                <Sparkles className="text-primary"/> Ask Bwenzi
            </CardTitle>
            <CardDescription>
                Enter your IT or security question below for an instant answer.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  name="question"
                  placeholder="e.g., How can I spot a phishing email?"
                  required
                  className="flex-grow"
                />
                <SubmitButton />
              </div>
            </form>
            {state.answer && (
                <div className="mt-6">
                    <Card className="bg-green-100/50 border-green-500/50">
                        <CardContent className="p-4 space-y-2">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-600"/>
                                <h3 className="font-bold text-green-800">Bwenzi's Answer</h3>
                            </div>
                            <p className="text-green-900/90">{state.answer}</p>
                        </CardContent>
                    </Card>
                </div>
            )}
             {state.error && (
                <div className="mt-6">
                    <Card className="bg-destructive/10 border-destructive/50">
                        <CardContent className="p-4 space-y-2">
                            <div className="flex items-center gap-2">
                                <AlertCircle className="h-5 w-5 text-destructive"/>
                                <h3 className="font-bold text-destructive/90">Error</h3>
                            </div>
                            <p className="text-destructive/90">{state.error}</p>
                        </CardContent>
                    </Card>
                </div>
             )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}