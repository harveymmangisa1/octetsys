
import {
  Network,
  ShieldCheck,
  Wrench,
  GraduationCap,
  Code,
  FileCode,
  Camera,
  BrainCircuit,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const services = [
  {
    id: "networking",
    icon: Network,
    title: "Networking & Infrastructure",
    description: "Complete network design, implementation, and management for businesses of all sizes.",
    features: ["Network Design & Planning", "Hardware Installation", "Security Configuration", "24/7 Monitoring"],
    image: "https://placehold.co/600x400",
    hint: "network switch",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: "cybersecurity",
    icon: ShieldCheck,
    title: "Cybersecurity Consulting",
    description: "Protect your digital assets with our expert security assessments and threat mitigation.",
    features: ["Security Audits", "Threat Assessment", "Employee Training", "Incident Response"],
    image: "https://placehold.co/600x400",
    hint: "security shield",
    color: "from-red-500 to-red-700",
  },
  {
    id: "support",
    icon: Wrench,
    title: "System Support",
    description: "Reliable remote and on-site support to keep your systems running smoothly.",
    features: ["Remote Troubleshooting", "On-site Support", "System Maintenance", "Emergency Response"],
    image: "https://placehold.co/600x400",
    hint: "tech support",
    color: "from-green-500 to-green-700",
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "IT Training",
    description: "Empower your team with practical training on the latest software and technologies.",
    features: ["Microsoft Office Suite", "AI for Productivity", "Cybersecurity Basics", "Custom Corporate Training"],
    image: "https://placehold.co/600x400",
    hint: "team training",
    color: "from-purple-500 to-purple-700",
  },
  {
    id: "development",
    icon: Code,
    title: "Web & Mobile Development",
    description: "Custom web and mobile applications designed to meet your unique business needs.",
    features: ["Web Applications", "Mobile Apps", "E-commerce Solutions", "API Development"],
    image: "https://placehold.co/600x400",
    hint: "mobile app",
    color: "from-indigo-500 to-indigo-700",
  },
  {
    id: "software",
    icon: FileCode,
    title: "Software Development",
    description: "Bespoke software solutions to streamline your operations and drive growth.",
    features: ["Custom Software", "System Integration", "Database Solutions", "Cloud Applications"],
    image: "https://placehold.co/600x400",
    hint: "code on screen",
    color: "from-teal-500 to-teal-700",
  },
  {
    id: "cctv",
    icon: Camera,
    title: "CCTV & Biometrics",
    description: "Advanced surveillance and access control systems for enhanced security.",
    features: ["CCTV Installation", "Biometric Access Control", "System Monitoring", "Maintenance & Support"],
    image: "https://placehold.co/600x400",
    hint: "security camera installation",
    color: "from-orange-500 to-orange-700",
  },
  {
    id: "ai-awareness",
    icon: BrainCircuit,
    title: "AI Awareness & Training",
    description: "Navigate the world of AI with our expert-led awareness campaigns and hands-on training.",
    features: ["AI Fundamentals", "Business Applications", "Implementation Strategy", "Ethics & Safety"],
    image: "https://placehold.co/600x400",
    hint: "artificial intelligence brain",
    color: "from-pink-500 to-pink-700",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6 font-headline">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT solutions designed to drive innovation, ensure reliability, 
            and empower your organization through education-first approaches.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white text-sm font-semibold`}>
                  Professional Service
                </div>
                <h2 className="text-3xl font-bold text-foreground font-headline">{service.title}</h2>
                <p className="text-lg text-muted-foreground">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild>
                    <Link href={`/#consultation`}>
                      Learn More
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/#consultation">
                      Get Quote
                    </Link>
                  </Button>
                </div>
              </div>

              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    data-ai-hint={service.hint}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
