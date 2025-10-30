import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background with subtle gradients */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
          `
        }}
      />
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
          Enterprise Technology Solutions
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight max-w-6xl mx-auto">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Precision Technology
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            For Modern Enterprise
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-lg sm:text-xl md:text-2xl leading-8 text-gray-300 max-w-4xl mx-auto font-light">
          Octet Systems delivers enterprise-grade technology solutions, from robust cybersecurity 
          to custom software development, empowering your business to thrive in the digital age.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            asChild 
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-6 text-lg font-medium rounded-xl transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 border-0"
          >
            <Link href="#services" className="flex items-center gap-2">
              Explore Services 
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            asChild 
            className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg font-medium rounded-xl transition-all duration-200 backdrop-blur-sm"
          >
            <Link href="#portfolio">View Case Studies</Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-400 uppercase tracking-wider font-medium mb-6">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
            {/* Placeholder for client logos - you would replace these with actual client logos */}
            <div className="h-8 w-32 bg-white/10 rounded-lg backdrop-blur-sm"></div>
            <div className="h-8 w-32 bg-white/10 rounded-lg backdrop-blur-sm"></div>
            <div className="h-8 w-32 bg-white/10 rounded-lg backdrop-blur-sm"></div>
            <div className="h-8 w-32 bg-white/10 rounded-lg backdrop-blur-sm"></div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
}