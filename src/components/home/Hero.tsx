
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative bg-card overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 sm:py-32">
          <div className="text-center lg:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Reliable IT Solutions for Modern Business
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Octet Systems delivers innovative technology services, from robust cybersecurity to custom software development, empowering your business to thrive in the digital age.
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <Button size="lg" asChild>
                <Link href="#services">Explore Services</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://placehold.co/600x400"
              alt="Team collaborating in a modern office"
              data-ai-hint="team collaboration"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
