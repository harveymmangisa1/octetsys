
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Globe, Server, Database } from "lucide-react";
import placeholderImages from '@/lib/placeholder-images.json';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 z-0">
        <Image
          src={placeholderImages.home.hero}
          alt="Enterprise Technology"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
        {/* Abstract grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Leading IT Solutions Provider
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Empowering Business <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              Through Innovation
            </span>
          </h1>

          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            We deliver enterprise-grade cybersecurity, software development, and infrastructure solutions designed to scale with your ambition.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Button size="lg" className="h-14 px-8 text-lg bg-blue-600 hover:bg-blue-500 text-white rounded-full w-full sm:w-auto shadow-lg shadow-blue-900/20 transition-all hover:scale-105" asChild>
              <Link href="/book-consultation">
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-slate-700 text-white hover:bg-slate-800 hover:text-white rounded-full w-full sm:w-auto transition-all hover:scale-105" asChild>
              <Link href="#services">
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-10 border-t border-slate-800/50 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <p className="text-sm text-slate-500 font-medium mb-8 uppercase tracking-wider">Trusted by Industry Leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
              <div className="flex items-center gap-2 text-slate-300 font-semibold text-lg hover:text-white transition-colors"><ShieldCheck className="h-6 w-6 text-blue-500" /> SecureTech</div>
              <div className="flex items-center gap-2 text-slate-300 font-semibold text-lg hover:text-white transition-colors"><Globe className="h-6 w-6 text-blue-500" /> GlobalNet</div>
              <div className="flex items-center gap-2 text-slate-300 font-semibold text-lg hover:text-white transition-colors"><Server className="h-6 w-6 text-blue-500" /> DataCorp</div>
              <div className="flex items-center gap-2 text-slate-300 font-semibold text-lg hover:text-white transition-colors"><Database className="h-6 w-6 text-blue-500" /> CloudSystems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
