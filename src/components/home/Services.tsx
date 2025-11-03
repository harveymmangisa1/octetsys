
import Image from "next/image";
import Link from "next/link";
import {
  Network,
  ShieldCheck,
  Wrench,
  GraduationCap,
  Code,
  FileCode,
  Camera,
  BrainCircuit,
  ArrowRight,
  Check,
} from "lucide-react";
import placeholderImages from '@/lib/placeholder-images.json';


const services = [
  {
    id: "networking",
    icon: Network,
    title: "Networking & Infrastructure",
    description: "Complete network design, implementation, and management for businesses of all sizes.",
    features: ["Network Design & Planning", "Hardware Installation", "Security Configuration", "24/7 Monitoring"],
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "cybersecurity",
    icon: ShieldCheck,
    title: "Cybersecurity Consulting",
    description: "Protect your digital assets with our expert security assessments and threat mitigation.",
    features: ["Security Audits", "Threat Assessment", "Employee Training", "Incident Response"],
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    id: "support",
    icon: Wrench,
    title: "System Support",
    description: "Reliable remote and on-site support to keep your systems running smoothly.",
    features: ["Remote Troubleshooting", "On-site Support", "System Maintenance", "Emergency Response"],
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "IT Training",
    description: "Empower your team with practical training on the latest software and technologies.",
    features: ["Microsoft Office Suite", "AI for Productivity", "Cybersecurity Basics", "Custom Corporate Training"],
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: "development",
    icon: Code,
    title: "Web & Mobile Development",
    description: "Custom web and mobile applications designed to meet your unique business needs.",
    features: ["Web Applications", "Mobile Apps", "E-commerce Solutions", "API Development"],
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    id: "software",
    icon: FileCode,
    title: "Software Development",
    description: "Bespoke software solutions to streamline your operations and drive growth.",
    features: ["Custom Software", "System Integration", "Database Solutions", "Cloud Applications"],
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    id: "cctv",
    icon: Camera,
    title: "CCTV & Biometrics",
    description: "Advanced surveillance and access control systems for enhanced security.",
    features: ["CCTV Installation", "Biometric Access Control", "System Monitoring", "Maintenance & Support"],
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    id: "ai-awareness",
    icon: BrainCircuit,
    title: "AI Awareness & Training",
    description: "Navigate the world of AI with our expert-led awareness campaigns and hands-on training.",
    features: ["AI Fundamentals", "Business Applications", "Implementation Strategy", "Ethics & Safety"],
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
];

export function Services() {
  const serviceImages = placeholderImages.services;

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
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

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            const imageData = serviceImages.find(img => img.id === service.id);
            
            return (
              <div
                key={service.id}
                className="group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}>
                  
                  {/* Content Side */}
                  <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    {/* Icon Badge */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 ${service.iconBg} rounded-2xl`}>
                      <Icon className={`w-7 h-7 ${service.iconColor}`} />
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-4">
                      <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
                        {service.title}
                      </h2>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className="flex items-start gap-2"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                          </div>
                          <span className="text-slate-700 text-sm font-medium leading-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3 pt-4">
                      <Link
                        href={`/#consultation`}
                        className="inline-flex items-center justify-center bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-md group/btn"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                      
                      <Link
                        href="/#consultation"
                        className="inline-flex items-center justify-center border-2 border-slate-200 text-slate-900 px-6 py-3 rounded-xl text-sm font-medium hover:border-slate-900 hover:bg-slate-50 transition-all duration-300"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative overflow-hidden rounded-3xl">
                      {/* Image container */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                        {imageData && (
                           <Image
                            src={imageData.src}
                            alt={service.title}
                            data-ai-hint={imageData.hint}
                            width={800}
                            height={600}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        )}
                        {/* Subtle overlay */}
                        <div className="absolute inset-0 bg-slate-900 opacity-5"></div>
                      </div>
                      
                      {/* Floating badge */}
                      <div className="absolute top-6 left-6">
                        <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-slate-200">
                          <span className="text-sm font-semibold text-slate-900">
                            Professional Service
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Divider */}
                {index < services.length - 1 && (
                  <div className="mt-20 border-t border-slate-100"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
