'use client';
import { serviceData } from '@/lib/service-data';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import placeholderImages from '@/lib/placeholder-images.json';

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

  // Helper to get image for a service ID
  const getServiceImage = (id: string) => {
    const cyberImages = placeholderImages.cyber_security || [];
    const specificImage = cyberImages.find(img => img.id === id);
    if (specificImage) return specificImage.src;

    // Fallback to generic images based on keywords or random assignment
    return `https://picsum.photos/seed/${id}/800/600`;
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Our Cyber Offerings</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Comprehensive Cybersecurity Services
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            From infrastructure to innovation, we deliver technology services that
            drive growth and secure your digital future.
          </p>
        </div>

        {/* Service Categories */}
        {Object.entries(categories).map(([category, serviceIds]) => (
          <div key={category} className="mb-24 last:mb-0">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-8 w-1 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-bold text-foreground tracking-tight">{category}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceIds.map(id => services.find(s => s.id === id)).filter((service): service is NonNullable<typeof service> => Boolean(service)).map((service) => {
                return (
                  <div key={service.id} className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                    {/* Image Container */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={getServiceImage(service.id)}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6">
                      <h3 className="text-xl font-bold text-card-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Actions */}
                      <div className="flex flex-col gap-3 mt-auto">
                        <Button asChild className="w-full justify-between group/btn bg-primary hover:bg-primary/90 text-primary-foreground">
                          <Link href={`/services/${service.id}`}>
                            Explore Service
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </Button>
                        <Button asChild variant="ghost" className="w-full justify-between group/link text-primary hover:text-primary hover:bg-primary/5">
                          <Link href={`/services/${service.id}#overview`}>
                            View details
                            <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
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
