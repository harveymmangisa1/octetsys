"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  Server,
  Cpu,
  Code2,
  Zap,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";

// Enhanced Service Card Component with responsive improvements
const ServiceCard = ({
  icon: Icon,
  title,
  subtitle,
  features,
  className,
  delay = 0
}: {
  icon: any,
  title: string,
  subtitle: string,
  features: string[],
  className?: string,
  delay?: number
}) => (
  <div
    className={cn(
      "absolute hidden lg:flex flex-col",
      "w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px]",
      "p-4 sm:p-5 md:p-6",
      "rounded-2xl",
      "bg-gradient-to-b from-white/[0.07] to-white/[0.03] backdrop-blur-xl",
      "border border-white/[0.08]",
      "shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]",
      "hover:border-white/[0.15] hover:bg-gradient-to-b hover:from-white/[0.1] hover:to-white/[0.05]",
      "transition-all duration-700 ease-out group cursor-default",
      "z-10", // Ensure cards stay above lines
      className
    )}
    style={{ animationDelay: `${delay}s` }}
  >
    {/* Glowing border effect on hover */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 blur-sm" />
    </div>

    {/* Header with Icon */}
    <div className="relative z-10 flex items-start gap-4 mb-4">
      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white/[0.08] text-white/80 group-hover:bg-white/[0.12] transition-all duration-500 group-hover:scale-110">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="text-base font-semibold text-white/95 mb-1">{title}</h3>
        <p className="text-sm text-white/50 group-hover:text-white/60 transition-colors duration-500">{subtitle}</p>
      </div>
    </div>

    {/* Feature List - Revealed on Hover */}
    <div className="relative z-10 overflow-hidden">
      <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-700 ease-out">
        <div className="space-y-2 pt-2 border-t border-white/[0.06]">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-xs text-white/60"
              style={{
                transitionDelay: `${idx * 50}ms`,
                opacity: 0,
                transform: 'translateX(-8px)'
              }}
            >
              <div className="w-1 h-1 rounded-full bg-white/40 group-hover:animate-pulse"
                style={{ animationDelay: `${idx * 100}ms` }} />
              <span className="group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                style={{ transitionDelay: `${100 + idx * 50}ms` }}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Custom SVG Line Component with animated light effect
const AnimatedConnectionLine = ({
  id,
  color,
  delay = 0,
  reverse = false,
  className = ""
}: {
  id: string,
  color: string,
  delay?: number,
  reverse?: boolean,
  className?: string
}) => (
  <svg
    className={`absolute pointer-events-none opacity-40 ${className}`}
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    style={{ animationDelay: `${delay}s` }}
  >
    <defs>
      {/* Base gradient for the line */}
      <linearGradient id={`base-gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity="0.4" />
        <stop offset="50%" stopColor={color} stopOpacity="0.8" />
        <stop offset="100%" stopColor={color} stopOpacity="0.4" />
      </linearGradient>

      {/* Moving light gradient */}
      <linearGradient id={`light-gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity="0">
          <animate
            attributeName="offset"
            values="0;1;0"
            dur="3s"
            repeatCount="indefinite"
            begin={`${delay}s`}
          />
        </stop>
        <stop offset="50%" stopColor="white" stopOpacity="0.9">
          <animate
            attributeName="offset"
            values="0;1;0"
            dur="3s"
            repeatCount="indefinite"
            begin={`${delay}s`}
          />
        </stop>
        <stop offset="100%" stopColor={color} stopOpacity="0">
          <animate
            attributeName="offset"
            values="0;1;0"
            dur="3s"
            repeatCount="indefinite"
            begin={`${delay}s`}
          />
        </stop>
      </linearGradient>

      {/* Glow filter */}
      <filter id={`glow-${id}`} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Base line */}
    <path
      d="M0 0 C 50 0, 50 100, 100 100"
      stroke={`url(#base-gradient-${id})`}
      strokeWidth="1.5"
      fill="none"
      vectorEffect="non-scaling-stroke"
      className="transition-all duration-1000"
    />

    {/* Animated light line */}
    <path
      d="M0 0 C 50 0, 50 100, 100 100"
      stroke={`url(#light-gradient-${id})`}
      strokeWidth="3"
      fill="none"
      vectorEffect="non-scaling-stroke"
      filter={`url(#glow-${id})`}
      className="animate-pulse"
      style={{ animationDelay: `${delay}s` }}
    />
  </svg>
);

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">

      {/* Enhanced Background with animated grid */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Hero Background"
          fill
          className="object-cover opacity-50"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0a0a0a]" />

        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      <div className="container relative z-10 px-4 mx-auto w-full max-w-7xl">
        <div className="relative mx-auto h-full flex flex-col items-center justify-center min-h-[600px] lg:min-h-[800px]">

          {/* --- RESPONSIVE SERVICE CARDS WITH CONNECTIONS --- */}

          {/* Top Left: Cybersecurity */}
          <div className="absolute top-[10%] left-0 lg:left-[2%] xl:left-[5%] 2xl:left-[10%] hidden lg:block">
            <AnimatedConnectionLine
              id="1"
              color="rgb(96, 165, 250)"
              delay={0}
              className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] top-8 left-full"
            />
            <ServiceCard
              icon={ShieldCheck}
              title="Enterprise Security"
              subtitle="Zero-trust architecture"
              features={["Threat Detection", "Network Security", "Compliance"]}
              delay={0}
              className="left-0 lg:left-4"
            />
          </div>

          {/* Top Right: Cloud */}
          <div className="absolute top-[12%] right-0 lg:right-[2%] xl:right-[5%] 2xl:right-[10%] hidden lg:block">
            <AnimatedConnectionLine
              id="2"
              color="rgb(34, 211, 238)"
              delay={0.5}
              reverse
              className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] top-8 right-full scale-x-[-1]"
            />
            <ServiceCard
              icon={Server}
              title="Cloud Infrastructure"
              subtitle="99.99% Uptime SLA"
              features={["Scalable Architecture", "Hybrid Cloud", "Disaster Recovery"]}
              delay={1.5}
              className="right-0 lg:right-4"
            />
          </div>

          {/* Bottom Left: Development */}
          <div className="absolute bottom-[15%] left-0 lg:left-[4%] xl:left-[8%] 2xl:left-[12%] hidden lg:block">
            <AnimatedConnectionLine
              id="3"
              color="rgb(52, 211, 153)"
              delay={1}
              className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] bottom-[calc(100%-2.5rem)] left-full rotate-180"
            />
            <ServiceCard
              icon={Code2}
              title="Custom Software"
              subtitle="Full-cycle development"
              features={["Web & Mobile Apps", "API Integration", "Legacy Modernization"]}
              delay={0.5}
              className="left-0 lg:left-4"
            />
          </div>

          {/* Bottom Right: Analytics */}
          <div className="absolute bottom-[18%] right-0 lg:right-[4%] xl:right-[8%] 2xl:right-[12%] hidden lg:block">
            <AnimatedConnectionLine
              id="4"
              color="rgb(167, 139, 250)"
              delay={1.5}
              reverse
              className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] bottom-[calc(100%-2.5rem)] right-full scale-x-[-1] rotate-180"
            />
            <ServiceCard
              icon={Cpu}
              title="AI & Analytics"
              subtitle="Data-driven insights"
              features={["Predictive Modeling", "Big Data Processing", "Business Intelligence"]}
              delay={2}
              className="right-0 lg:right-4"
            />
          </div>

          {/* Center Pulse Effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-0 h-0">
              {/* Pulsing rings */}
              <div className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <div className="absolute inset-0 rounded-full border border-white/5 animate-ping"
                  style={{ animationDuration: '4s' }} />
                <div className="absolute inset-8 rounded-full border border-white/5 animate-ping"
                  style={{ animationDuration: '5s', animationDelay: '1s' }} />
                <div className="absolute inset-16 rounded-full border border-blue-500/10 animate-ping"
                  style={{ animationDuration: '6s', animationDelay: '2s' }} />
              </div>
            </div>
          </div>

          {/* --- CENTRAL HERO CONTENT --- */}
          <div className="relative z-20 text-center max-w-4xl mx-auto space-y-8 px-4">

            {/* Enhanced Badge with gradient and glow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-semibold backdrop-blur-md shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] animate-in fade-in slide-in-from-bottom-4 duration-1000 hover:border-blue-400/40 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.7)] transition-all">
              <Zap className="w-4 h-4 fill-blue-300 animate-pulse" />
              <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Next-Gen IT Infrastructure</span>
            </div>

            {/* Main Heading with enhanced gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-white leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              Secure. Scalable. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 animate-gradient-x drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                Future-Ready.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 px-2">
              We engineer enterprise-grade cybersecurity and software solutions that power the world's most ambitious organizations.
            </p>

            {/* Enhanced CTAs with better effects */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <Button
                size="lg"
                className="group h-12 sm:h-14 px-6 sm:px-10 text-sm sm:text-base font-semibold rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-400 hover:to-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_-5px_rgba(59,130,246,0.8)] hover:shadow-[0_0_40px_0px_rgba(59,130,246,1)] border border-blue-400/50"
                asChild
              >
                <Link href="/book-consultation">
                  <span className="flex items-center gap-2">
                    Start Transformation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 sm:h-14 px-6 sm:px-10 text-sm sm:text-base font-semibold rounded-full border-zinc-700/50 bg-white/5 text-white hover:bg-white/10 hover:border-zinc-600 backdrop-blur-md transition-all hover:scale-105"
                asChild
              >
                <Link href="#services">
                  <span className="flex items-center gap-2">
                    Our Solutions <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </Button>
            </div>

            {/* Mobile-only Features Grid with enhanced styling */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-12 lg:hidden px-2">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-400/30 transition-all group hover:scale-105">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                  <ShieldCheck className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-semibold text-zinc-200">Security</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400/30 transition-all group hover:scale-105">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors">
                  <Server className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-semibold text-zinc-200">Cloud</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:border-emerald-400/30 transition-all group hover:scale-105">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-emerald-500/20 group-hover:bg-emerald-500/30 transition-colors">
                  <Code2 className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-semibold text-zinc-200">Software</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-400/30 transition-all group hover:scale-105">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                  <Globe className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-semibold text-zinc-200">Global</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}