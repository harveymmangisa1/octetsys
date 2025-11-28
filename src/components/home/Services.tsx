
'use client';
import { serviceData } from '@/lib/service-data';
import Link from 'next/link';
import { ArrowRight, Code, Server, GraduationCap, Camera, BrainCircuit, Headset, Shield, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';

export function Services() {
  // A curated list of general services for the homepage
  const generalServices = [
    {
      id: "cybersecurity",
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Comprehensive protection from modern threats with our advanced cybersecurity solutions and expert consulting.",
      href: "/cyber-security#services",
      linkText: "Learn More",
    },
    {
      id: "networking",
      icon: Server,
      title: "Networking & Infrastructure",
      description: "Robust, scalable network architecture design and implementation to keep your business connected and secure."
    },
    {
      id: "support",
      icon: Headset,
      title: "System Support",
      description: "Reliable, round-the-clock system support to ensure operational continuity and resolve issues fast."
    },
    {
      id: "training",
      icon: GraduationCap,
      title: "IT Training",
      description: "Empower your team with professional IT training, from basic cybersecurity awareness to advanced technical skills."
    },
    {
      id: "development",
      icon: Code,
      title: "Web & Mobile Development",
      description: "Custom web and mobile applications designed to deliver seamless user experiences and drive engagement."
    },
    {
      id: "cctv",
      icon: Camera,
      title: "CCTV & Biometrics",
      description: "Advanced physical security solutions, including high-definition surveillance and biometric access control systems."
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-800">Our Expertise</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Comprehensive IT solutions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mt-2">for modern businesses</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            From infrastructure to innovation, we deliver technology services that
            drive growth and secure your digital future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {generalServices.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="group relative bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight className="w-6 h-6 text-blue-500" />
                </div>

                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-700 transition-colors">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">{service.description}</p>

                <div className="pt-2">
                  <Link href={service.href || '/book-consultation'} className="inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.linkText || 'Request a Quote'} <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
