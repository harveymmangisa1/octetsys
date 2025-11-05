
'use client';
import { serviceData } from '@/lib/service-data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export function ServiceList() {
  const services = Object.entries(serviceData).map(([id, data]) => ({ ...data, id }));

  const categories = {
    "Core Security Services": ["soc-services", "managed-detection-response", "identity-access-management"],
    "Advanced Security": ["cloud-security", "application-security", "threat-intelligence", "security-architecture"],
    "Compliance & Governance": ["compliance-management", "risk-management", "data-protection-privacy"],
    "Emerging & Specialized": ["ai-security", "ot-security", "cyber-warfare-defense", "security-awareness-training", "digital-forensics"],
    "Consulting & Managed Services": ["virtual-ciso", "pen-testing", "security-transformation", "managed-security-services", "security-testing-services"],
    "Niche Expertise": ["sector-specific-security", "supply-chain-security", "security-research", "blockchain-security"]
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
            <span className="text-sm font-medium text-slate-700">Our Cyber Offerings</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Comprehensive Cybersecurity Services
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            From infrastructure to innovation, we deliver technology services that
            drive growth and secure your digital future.
          </p>
        </div>

        {Object.entries(categories).map(([category, serviceIds]) => (
          <div key={category} className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceIds.map(id => services.find(s => s.id === id)).filter(Boolean).map((service) => {
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
                        <Link href={`/services/${service.id}`}>
                          View Details <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
