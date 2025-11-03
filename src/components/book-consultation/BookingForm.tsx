'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, CheckCircle2, Clock, MessageCircle, ArrowRight, Lightbulb } from "lucide-react";
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
    <Button 
      type="submit" 
      disabled={pending} 
      className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-base font-medium rounded-xl transition-all duration-300 group"
    >
      {pending ? (
        <>
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
          Sending Message...
        </>
      ) : (
        <>
          <span>Schedule Consultation</span>
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </>
      )}
    </Button>
  );
}

export function BookingForm() {
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
      <section id="contact-form" className="py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
              Consultation Requested
            </h1>
            <p className="text-lg text-slate-600 leading-8 mb-8 font-light">
              {state.confirmationMessage}
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>Expert consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking-form" className="py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Header Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
                <Lightbulb className="w-4 h-4 text-slate-700" />
                <span className="text-sm font-medium text-slate-700">Get Started</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-light text-slate-900 tracking-tight">
                Schedule Your
                <span className="block font-semibold mt-2">Free Consultation</span>
              </h1>
              <p className="text-lg text-slate-600 leading-8 font-light">
                Let's discuss your technology needs and create a tailored solution 
                that drives your business forward.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 pt-4">
              {[
                {title: "Expert Assessment", description: "Comprehensive analysis of your current technology stack"},
                {title: "Tailored Proposal", description: "Custom solution designed for your specific requirements"},
                {title: "No Obligation", description: "Free initial consultation with transparent pricing"},
              ].map(benefit => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">{benefit.title}</h4>
                    <p className="text-slate-600 text-sm font-light mt-1">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Form Section */}
          <div className="lg:col-span-7">
            <Card className="border border-slate-200 shadow-sm rounded-2xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-semibold text-slate-900 tracking-tight">
                  Consultation Request
                </CardTitle>
                <CardDescription className="text-slate-600 font-light">
                  Complete the form below and we'll contact you to schedule your consultation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} action={formAction} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-slate-700">
                        Full Name *
                      </Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="John Doe" 
                        required 
                        className="border-slate-300 rounded-xl py-6 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 transition-colors duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                        Email Address *
                      </Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="you@company.com" 
                        required
                        className="border-slate-300 rounded-xl py-6 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 transition-colors duration-200"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium text-slate-700">
                        Company
                      </Label>
                      <Input 
                        id="company" 
                        name="company" 
                        placeholder="Your Company Inc." 
                        className="border-slate-300 rounded-xl py-6 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 transition-colors duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-medium text-slate-700">
                        Service of Interest *
                      </Label>
                      <Select name="service" required>
                        <SelectTrigger 
                          id="service" 
                          className="border-slate-300 rounded-xl py-6 text-slate-900 focus:border-slate-900 transition-colors duration-200"
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-slate-200">
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
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-slate-700">
                      Project Details *
                    </Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your project, timeline, and specific requirements..." 
                      rows={5}
                      required 
                      minLength={15}
                      className="border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:border-slate-900 transition-colors duration-200 resize-none"
                    />
                  </div>
                  
                  <SubmitButton />
                  
                  <p className="text-xs text-slate-500 text-center font-light">
                    By submitting this form, you agree to our privacy policy and consent to being contacted by our team.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
