
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center bg-background text-foreground">
      <Image
        src="https://placehold.co/1920x1080"
        alt="A modern office with people collaborating"
        data-ai-hint="modern office team"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 p-4">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Reliable IT Solutions for Modern Business
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
          Octet Systems delivers innovative technology services, from robust cybersecurity to custom software development, empowering your business to thrive in the digital age.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-4">
          <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
            <Link href="#services">Explore Services <ArrowRight className="ml-2" /></Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
            <Link href="#portfolio">Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
