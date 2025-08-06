
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
    description: "Robust network design, setup, and maintenance for seamless connectivity.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Consulting",
    description: "Protect your assets with our expert security assessments and threat mitigation.",
  },
  {
    icon: Wrench,
    title: "System Support",
    description: "Reliable remote and on-site support to keep your systems running smoothly.",
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
    description: "Advanced surveillance and access control systems for enhanced security.",
  },
  {
    icon: BrainCircuit,
    title: "AI Awareness & Training",
    description: "Navigate the world of AI with our expert-led awareness campaigns and hands-on training.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Comprehensive IT Services
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            From foundational infrastructure to cutting-edge AI, we've got you covered with a full suite of technology solutions.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-transparent hover:border-primary">
              <CardHeader>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <service.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <CardTitle className="mt-4 font-headline text-lg">{service.title}</CardTitle>
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
