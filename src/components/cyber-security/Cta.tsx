
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section id="consultation-cta" className="bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Don't Wait for a Breach to Happen
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Proactive security is the best defense. Let our experts assess your vulnerabilities and build a robust security posture for your business.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="transition-transform hover:scale-105"
              asChild
            >
              <Link href="/contact">Schedule a Free Consultation <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

    