
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Shield, BookOpen } from "lucide-react";

export function CyberSecurityHero() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8">
            <Shield className="w-5 h-5 text-blue-300" />
            <span className="text-sm font-medium text-white/90">Your Digital Defense Hub</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
            Cybersecurity Tools &
            <span className="block font-semibold mt-2">Knowledge Center</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl">
            Empowering you to navigate the digital world safely. Use our free tools to analyze threats, strengthen your passwords, and report security incidents.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-200 transition-all shadow-md hover:shadow-lg">
              <Link href="#threat-submission" className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Explore Security Tools</span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white/20 text-white hover:bg-white/10 transition-colors backdrop-blur-sm">
              <Link href="/about" className="flex items-center gap-2">
                <span>Learn About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
