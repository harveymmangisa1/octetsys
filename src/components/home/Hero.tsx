
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import placeholderImages from '@/lib/placeholder-images.json';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white text-slate-900 overflow-hidden">
      {/* Clean, minimal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="relative z-10 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          {/* Minimal badge */}
          <div className="inline-flex items-center px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium tracking-wide mb-12">
            ENTERPRISE TECHNOLOGY SOLUTIONS
          </div>

          {/* Left-aligned headings with proper hierarchy */}
          <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.1] mb-6 sm:mb-8">
            <span className="text-slate-900 block">
              Precision
            </span>
            <span className="text-blue-600 block mt-2">
              Technology
            </span>
          </h1>

          {/* Clean description */}
          <p className="text-lg sm:text-xl text-slate-600 leading-8 max-w-2xl font-light tracking-tight mb-12">
            Enterprise-grade technology solutions, from robust cybersecurity 
            to custom software development, empowering your business to thrive 
            in the digital age.
          </p>

          {/* Clean CTA buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-20">
            <Button 
              size="lg" 
              asChild 
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 rounded-lg font-medium transition-colors duration-200 border-0"
            >
              <Link href="#services" className="flex items-center gap-3">
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 px-8 py-6 rounded-lg font-medium transition-colors duration-200"
            >
              <Link href="#portfolio">View Case Studies</Link>
            </Button>
          </div>

          {/* Minimal trust indicators */}
          <div className="border-t border-slate-200 pt-12">
            <p className="text-sm text-slate-500 uppercase tracking-wider font-medium mb-8">
              Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap items-center gap-12 opacity-40">
              {/* Replace with actual client logos */}
              <div className="h-6 w-24 bg-slate-300 rounded"></div>
              <div className="h-6 w-24 bg-slate-300 rounded"></div>
              <div className="h-6 w-24 bg-slate-300 rounded"></div>
              <div className="h-6 w-24 bg-slate-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Add a subtle product screenshot or abstract shape on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-3/4 opacity-5">
        <div className="w-full h-full bg-blue-600 rounded-l-3xl"></div>
      </div>
    </section>
  );
}
