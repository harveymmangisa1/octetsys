
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Fingerprint, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const features = [
  {
    icon: ShieldCheck,
    title: "Threat Assessment",
    description: "We identify vulnerabilities in your systems before they can be exploited by attackers."
  },
  {
    icon: Fingerprint,
    title: "Identity & Access Management",
    description: "Secure your digital assets with robust authentication and access control solutions."
  },
  {
    icon: Lock,
    title: "Data Encryption",
    description: "Protect sensitive data at rest and in transit with state-of-the-art encryption."
  }
];

export function CyberSecurityHero() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Advanced Cyber Security Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Protect your business from evolving digital threats with Octet Systems' comprehensive cybersecurity solutions. We are your trusted partner in safeguarding your digital infrastructure.
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-4">
              <Button size="lg" asChild className="transition-transform hover:scale-105">
                <Link href="/#consultation">Get a Security Audit <ArrowRight className="ml-2" /></Link>
              </Button>
            </div>
          </div>
          <div className="relative group">
             <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src="https://placehold.co/600x400"
              alt="Cyber security concept with lock"
              data-ai-hint="cyber security"
              width={600}
              height={400}
              className="relative rounded-xl shadow-2xl"
            />
          </div>
        </div>
        <div className="mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature) => (
                    <Card key={feature.title} className="text-center border-transparent shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all">
                        <CardHeader>
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <feature.icon className="h-7 w-7" />
                            </div>
                            <CardTitle className="mt-4 font-headline text-xl">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
