
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Corporate Mobile App",
    description: "A cross-platform mobile application for internal communications and productivity, boosting employee engagement.",
    image: "https://placehold.co/600x400",
    hint: "app interface",
    tags: ["Mobile App", "Software Dev"],
  },
  {
    title: "Enterprise Network Overhaul",
    description: "Complete redesign and implementation of a secure, high-speed network infrastructure for a financial institution.",
    image: "https://placehold.co/600x400",
    hint: "network diagram",
    tags: ["Networking", "Cybersecurity"],
  },
  {
    title: "Retail CCTV & Biometrics",
    description: "Installation of a comprehensive CCTV and biometric access control system for a multi-location retail chain.",
    image: "https://placehold.co/600x400",
    hint: "security camera",
    tags: ["CCTV", "Biometrics"],
  },
];

export function Portfolio() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Our Proven Track Record
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            We deliver results. Explore some of our recent projects.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden group">
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  data-ai-hint={project.hint}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Request a Quote
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
