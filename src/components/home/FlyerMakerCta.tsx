
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeartHandshake, ArrowRight } from "lucide-react";
import Link from "next/link";

export function FlyerMakerCta() {
  return (
    <section id="flyer-maker-cta" className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-secondary/50 shadow-sm border-border/60">
          <CardContent className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 text-primary p-4 rounded-2xl">
                  <HeartHandshake className="h-10 w-10" />
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h2 className="font-headline text-2xl font-bold text-foreground sm:text-3xl">
                  Join the 16 Days of Activism
                </h2>
                <p className="mt-2 text-muted-foreground max-w-2xl">
                  Create a personalized flyer to stand against gender-based violence. Share your message and show your support for the campaign.
                </p>
              </div>
              <div className="flex-shrink-0 mt-4 md:mt-0">
                <Button asChild size="lg" className="transition-transform hover:scale-105">
                  <Link href="/flyer-maker">Create Your Flyer <ArrowRight className="ml-2"/></Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
