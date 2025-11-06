'use client';
import { serviceData } from '@/lib/service-data.tsx';
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
    "Consulting & Managed Services": ["virtual-ciso", "pen-testing", "security-transformation", "managed-security-services", "security-testing-services", "security-audits"],
    "Niche Expertise": ["sector-specific-security", "supply-chain-security", "security-research", "blockchain-security"]
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
            <span className="text-sm font-medium text-slate-700">Our Cyber Offerings</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 mb-6 tracking-tight">
            Comprehensive Cybersecurity Services
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            From infrastructure to innovation, we deliver technology services that
            drive growth and secure your digital future.
          </p>
        </div>

        {/* Service Categories */}
        {Object.entries(categories).map(([category, serviceIds]) => (
          <div key={category} className="mb-16">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px bg-slate-200 w-8"></div>
              <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">{category}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceIds.map(id => services.find(s => s.id === id)).filter(Boolean).map((service) => {
                const Icon = service.icon;
                return (
                  <Link 
                    key={service.id} 
                    href={`/services/${service.id}`}
                    className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-900 transition-all duration-300 flex flex-col"
                  >
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300"></div>
                    
                    <div className="p-8 flex-grow relative">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors duration-300" />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-slate-900 mb-3 leading-snug">
                        {service.title}
                      </h3>
                      
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="px-8 pb-8 relative">
                      <div className="flex items-center text-sm font-medium text-slate-900 group-hover:gap-2 gap-1 transition-all duration-300">
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
