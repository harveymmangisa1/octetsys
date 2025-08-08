import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CyberSecurityCta() {
  return (
    <section id="cyber-security-cta" className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-background shadow-lg border-border/60">
          <CardContent className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 text-primary p-4 rounded-full">
                  <ShieldCheck className="h-10 w-10" />
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h2 className="font-headline text-2xl font-bold text-foreground sm:text-3xl">
                  Strengthen Your Digital Defenses
                </h2>
                <p className="mt-2 text-muted-foreground max-w-2xl">
                  Your digital assets are valuable. Protect them with our expert cybersecurity services, from threat assessments to 24/7 monitoring.
                </p>
              </div>
              <div className="flex-shrink-0 mt-4 md:mt-0">
                <Button asChild size="lg" className="transition-transform hover:scale-105">
                  <Link href="/cyber-security">Explore Security Solutions <ArrowRight className="ml-2"/></Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
