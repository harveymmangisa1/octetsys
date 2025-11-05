
'use client';
import { serviceData } from '@/lib/service-data';
import Link from 'next/link';
import { ArrowRight, Code, Server, GraduationCap, Camera, BrainCircuit, Headset, Shield } from 'lucide-react';
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
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
            <span className="text-sm font-medium text-slate-700">What We Offer</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Comprehensive IT solutions
            <span className="block font-semibold mt-2">for modern businesses</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            From infrastructure to innovation, we deliver technology services that
            drive growth and secure your digital future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {generalServices.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="p-8">
                  <div className={`w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 text-slate-700`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm flex-grow">{service.description}</p>
                </div>
                <div className="p-8 pt-0 mt-auto">
                   <Button asChild variant="link" className="p-0 h-auto text-slate-800 font-semibold group-hover:text-slate-900">
                        <Link href={service.href || '/book-consultation'}>
                          {service.linkText || 'Request a Quote'} <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
