
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Consultation() {
  return (
    <section id="consultation" className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center relative z-10">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to Elevate Your Business?
        </h2>
        <p className="mt-4 text-lg leading-8 text-primary-foreground/80 max-w-2xl mx-auto">
          Schedule a free, no-obligation consultation with our IT experts to discuss your challenges and discover how Octet Systems can drive your success.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <Link href="#">Book a Free Consultation</Link>
          </Button>
        </div>
      </div>
      <Image
        src="https://placehold.co/1920x1080"
        alt="Abstract background"
        data-ai-hint="abstract geometric"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
    </section>
  );
}
