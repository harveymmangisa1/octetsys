'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitFeedback, type FeedbackState } from '@/app/actions';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, MessageSquarePlus } from "lucide-react";
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState: FeedbackState = {
  confirmationMessage: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Bot className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        <>
          <MessageSquarePlus className="mr-2 h-4 w-4" />
          Leave Feedback
        </>
      )}
    </Button>
  );
}

export function Feedback() {
  const [state, formAction] = useActionState(submitFeedback, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.error) {
      toast({
        title: "Submission Error",
        description: state.error,
        variant: "destructive",
      });
    }
    if (state.confirmationMessage) {
        toast({
          title: "Feedback Received!",
          description: state.confirmationMessage,
          variant: "default",
        });
        formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <section id="feedback" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Share Your Experience
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            We value your feedback. Let us know what you think about our services. Your insights help us improve and grow.
          </p>
        </div>
        <Card className="max-w-2xl mx-auto mt-12 shadow-lg border-border/70">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Leave a Comment</CardTitle>
                <CardDescription>Your feedback is important to us.</CardDescription>
            </CardHeader>
            <CardContent>
                <form ref={formRef} action={formAction} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Name (Optional)</label>
                            <Input id="name" name="name" placeholder="John Doe" />
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-muted-foreground mb-1">Company (Optional)</label>
                            <Input id="company" name="company" placeholder="Tech Innovators Inc." />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="feedback" className="block text-sm font-medium text-muted-foreground mb-1">Your Feedback</label>
                        <Textarea 
                            id="feedback" 
                            name="feedback" 
                            placeholder="Tell us about your experience..." 
                            rows={5}
                            required 
                            minLength={15}
                        />
                    </div>
                    <SubmitButton />
                </form>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
