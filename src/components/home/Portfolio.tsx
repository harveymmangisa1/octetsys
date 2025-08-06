
'use client';

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import React from "react";

const projects = [
  {
    title: "MedVet Ltd",
    description: "A corporate website for a veterinary medicine supplier, featuring a clean product catalog and contact information.",
    image: "https://placehold.co/600x400",
    hint: "veterinary medicine",
    tags: ["Web Development", "Corporate"],
    url: "https://medvetltd.com",
  },
  {
    title: "DroneLink Malawi",
    description: "A dynamic website for a drone services company, showcasing their aerial imaging and data solutions.",
    image: "https://placehold.co/600x400",
    hint: "drone landscape",
    tags: ["Web Development", "Tech Startup"],
    url: "https://dronelinkmw.com",
  },
  {
    title: "Joyful Kids",
    description: "A warm and inviting website for a children's organization, designed to be friendly and accessible.",
    image: "https://placehold.co/600x400",
    hint: "children playing",
    tags: ["Web Development", "Non-Profit"],
    url: "https://joyfulkidsmw.org",
  },
  {
    title: "DJ Bubblegum",
    description: "A vibrant and energetic personal website for a DJ, featuring event dates and music samples.",
    image: "https://placehold.co/600x400",
    hint: "dj setup",
    tags: ["Web Development", "Personal Brand"],
    url: "https://djbubblegum.com",
  },
];

export function Portfolio() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; 
  }

  return (
    <section id="portfolio" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Proven Track Record
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            We deliver results. Explore some of our recent projects that showcase our commitment to excellence.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300">
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
                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="bg-secondary/30 p-2 flex justify-between items-center gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="flex-1 text-primary group-hover:underline">
                      <Eye className="mr-2 h-4 w-4"/> Live Preview
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[90vw] h-[90vh] flex flex-col p-0">
                    <DialogHeader className="p-4 border-b">
                      <DialogTitle>{project.title} - Live Preview</DialogTitle>
                    </DialogHeader>
                    <iframe src={project.url} className="w-full h-full border-0" title={project.title} />
                  </DialogContent>
                </Dialog>

                <Button variant="link" asChild className="flex-1 text-primary group-hover:underline">
                   <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Visit Site <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                   </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
