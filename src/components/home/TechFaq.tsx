'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { askQuestion, type FaqState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Bot, ThumbsUp } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState: FaqState = {
  answer: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Bot className="mr-2 h-4 w-4 animate-spin" />
          Thinking...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Ask AI
        </>
      )}
    </Button>
  );
}

export function TechFaq() {
  const [state, formAction] = useFormState(askQuestion, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        title: "Error",
        description: state.error,
        variant: "destructive",
      });
    }
  }, [state.error, toast]);

  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-3xl mx-auto shadow-lg border-border/80">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl text-foreground">Ask Nzeru: Your Tech Wisdom Guide</CardTitle>
            <CardDescription className="mt-2 text-lg">
              Have a quick IT question? Nzeru, your AI assistant, is here to help 24/7.
            </CardDescription>
          </CardHeader>
          <form action={formAction}>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  name="question"
                  placeholder="e.g., How do I reset my router?"
                  required
                  className="flex-grow text-base"
                />
                <SubmitButton />
              </div>
            </CardContent>
          </form>
          {(state.answer) && (
            <CardFooter>
              <div className="mt-4 p-5 bg-secondary/50 rounded-lg w-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <ThumbsUp className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-foreground">AI Answer:</p>
                    <p className="text-muted-foreground mt-1">{state.answer}</p>
                  </div>
                </div>
              </div>
            </CardFooter>
          )}
        </Card>
      </div>
    </section>
  );
}
