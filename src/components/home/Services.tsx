
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  Network,
  ShieldCheck,
  Wrench,
  GraduationCap,
  Code,
  FileCode,
  Camera,
  BrainCircuit,
} from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Networking & Infrastructure",
    description: "Robust network design, setup, and maintenance for seamless connectivity and performance.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Consulting",
    description: "Protect your assets with our expert security assessments, threat mitigation, and awareness campaigns.",
  },
  {
    icon: Wrench,
    title: "System Support",
    description: "Reliable remote and on-site support to keep your systems running smoothly and efficiently.",
  },
  {
    icon: GraduationCap,
    title: "IT Training",
    description: "Empower your team with practical training on the latest software and technologies.",
  },
  {
    icon: Code,
    title: "Web & Mobile Development",
    description: "Custom web and mobile applications designed to meet your unique business needs.",
  },
  {
    icon: FileCode,
    title: "Software Development",
    description: "Bespoke software solutions to streamline your operations and drive growth.",
  },
  {
    icon: Camera,
    title: "CCTV & Biometrics",
    description: "Advanced surveillance and access control systems for enhanced security and peace of mind.",
  },
  {
    icon: BrainCircuit,
    title: "AI Awareness & Training",
    description: "Navigate the world of AI with our expert-led awareness campaigns and hands-on training.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Comprehensive IT Services
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            From foundational infrastructure to cutting-edge AI, we've got you covered.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <CardTitle className="mt-4 font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
