'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

export function Services() {
  // A curated list of general services for the homepage
  const generalServices = [
    {
      id: "cybersecurity",
      image: "/placeholder-images/cybersec.png",
      title: "Cybersecurity Services",
      description: "Comprehensive protection from modern threats with our advanced cybersecurity solutions and expert consulting.",
      href: "/cyber-security",
      cta: "Explore Security"
    },
    {
      id: "networking",
      image: "/placeholder-images/networks.jpeg",
      title: "Networking & Infrastructure",
      description: "Robust, scalable network architecture design and implementation to keep your business connected and secure.",
      href: "/services/networking",
      cta: "Explore Networking"
    },
    {
      id: "development",
      image: "/placeholder-images/webdev.png",
      title: "Web & Mobile Development",
      description: "Custom web and mobile applications designed to deliver seamless user experiences and drive engagement.",
      href: "/services/development",
      cta: "Explore Development"
    },
    {
      id: "training",
      image: "/placeholder-images/trainings.png",
      title: "Interactive Training",
      description: "Master essential digital skills with interactive modules. Learn Python, AI tools, and more at your own pace with hands-on exercises.",
      href: "/services/training",
      cta: "Start Learning"
    },
    {
      id: "cctv",
      image: "/placeholder-images/security-audits.jpg",
      title: "CCTV & Biometrics",
      description: "Advanced physical security solutions, including high-definition surveillance and biometric access control systems.",
      href: "/services/security-systems",
      cta: "Explore Systems"
    },
    {
      id: "support",
      image: "/placeholder-images/systemsupport.png",
      title: "System Support",
      description: "Reliable, round-the-clock system support to ensure operational continuity and resolve issues fast.",
      href: "/services/support",
      cta: "Explore Support"
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-950/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Our Expertise</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Comprehensive IT solutions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mt-2">for modern businesses</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            From infrastructure to innovation, we deliver technology services that
            drive growth and secure your digital future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {generalServices.map((service) => (
            <div key={service.id} className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                {/* Actions */}
                <div className="flex flex-col gap-3 mt-auto">
                  <Button asChild className="w-full justify-between group/btn bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href={service.href}>
                      {service.cta}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="w-full justify-between group/link text-primary hover:text-primary hover:bg-primary/5">
                    <Link href={`${service.href}`}>
                      View details
                      <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
