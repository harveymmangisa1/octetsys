import { CheckCircle2, Clock, MessageCircle } from "lucide-react";

export function ConsultationHero() {
  return (
    <section className="bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Book a Consultation
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Schedule a free, no-obligation consultation with our IT experts to discuss your challenges and discover how Octet Systems can drive your success.
            </p>
        </div>
         <div className="mt-16 border-t border-border pt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium">Expert Assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium">Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">No-obligation Consultation</span>
                </div>
              </div>
            </div>
      </div>
    </section>
  );
}
