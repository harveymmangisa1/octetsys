import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import placeholderImages from '@/lib/placeholder-images.json';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Next-Gen IT Infrastructure
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Secure. Scalable. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500">
              Future-Ready.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            We engineer enterprise-grade cybersecurity and software solutions that power the world's most ambitious organizations.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-xl shadow-primary/20 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/30" asChild>
              <Link href="/book-consultation">
                Start Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-105" asChild>
              <Link href="#services">
                Our Solutions
              </Link>
            </Button>
          </div>

          {/* Social Proof / Trust Strip */}

        </div>
      </div>
    </section>
  );
}
