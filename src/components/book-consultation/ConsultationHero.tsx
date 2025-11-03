
import { Calendar, Clock, Video } from "lucide-react";

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
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Calendar className="h-7 w-7" />
                </div>
                <h3 className="font-headline text-xl font-semibold text-foreground">Flexible Scheduling</h3>
                <p className="mt-2 text-muted-foreground">Choose a time that works best for you and your team.</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Clock className="h-7 w-7" />
                </div>
                <h3 className="font-headline text-xl font-semibold text-foreground">30-Minute Sessions</h3>
                <p className="mt-2 text-muted-foreground">A quick and efficient way to get expert advice.</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Video className="h-7 w-7" />
                </div>
                <h3 className="font-headline text-xl font-semibold text-foreground">Virtual Meeting</h3>
                <p className="mt-2 text-muted-foreground">All consultations are held online for your convenience.</p>
            </div>
        </div>
      </div>
    </section>
  );
}
