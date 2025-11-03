'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Bot, Send, CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Label } from '../ui/label';

const initialState: ContactFormState = {
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
          Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Send Message
        </>
      )}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
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
        formRef.current?.reset();
    }
  }, [state, toast]);
  
  if(state.confirmationMessage) {
    return (
        <Card className="max-w-2xl mx-auto shadow-lg border-border/70">
            <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                <p className="text-muted-foreground">{state.confirmationMessage}</p>
            </CardContent>
        </Card>
    )
  }

  return (
    <section id="contact-form" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto shadow-lg border-border/70">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Send Us a Message</CardTitle>
                <CardDescription>We'll get back to you within 1-2 business days.</CardDescription>
            </CardHeader>
            <CardContent>
                <form ref={formRef} action={formAction} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" name="name" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" name="email" type="email" placeholder="you@example.com" required/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label htmlFor="company">Company (Optional)</Label>
                            <Input id="company" name="company" placeholder="Your Company Inc." />
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="service">Service of Interest</Label>
                            <Select name="service" required>
                                <SelectTrigger id="service">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Networking & Infrastructure">Networking & Infrastructure</SelectItem>
                                    <SelectItem value="Cybersecurity Consulting">Cybersecurity Consulting</SelectItem>
                                    <SelectItem value="System Support">System Support</SelectItem>
                                    <SelectItem value="IT Training">IT Training</SelectItem>
                                    <SelectItem value="Web & Mobile Development">Web & Mobile Development</SelectItem>
                                    <SelectItem value="Software Development">Software Development</SelectItem>
                                    <SelectItem value="CCTV & Biometrics">CCTV & Biometrics</SelectItem>
                                    <SelectItem value="AI Awareness & Training">AI Awareness & Training</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea 
                            id="message" 
                            name="message" 
                            placeholder="Tell us how we can help..." 
                            rows={6}
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
