
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO, Tech Innovators",
    avatar: "https://placehold.co/100x100",
    hint: "woman portrait",
    testimonial: "Octet Systems transformed our IT infrastructure from the ground up. Their expertise in cybersecurity and network management has been invaluable. We feel more secure and efficient than ever before.",
  },
  {
    name: "Michael Chen",
    title: "Founder, DroneLink Malawi",
    avatar: "https://placehold.co/100x100",
    hint: "man portrait",
    testimonial: "The website Octet Systems developed for us is simply outstanding. It's fast, beautiful, and perfectly captures our brand. The team was professional, responsive, and a pleasure to work with.",
  },
  {
    name: "David Lee",
    title: "IT Director, MedVet Ltd",
    avatar: "https://placehold.co/100x100",
    hint: "person portrait",
    testimonial: "Their system support is second to none. Whenever we have an issue, their team is on it immediately, providing clear communication and effective solutions. They are a reliable and essential partner for our business.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            We're proud to have built strong relationships with our clients. Here's what they think about our work.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="flex flex-col justify-between border-border/70 shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground text-base leading-7">{item.testimonial}</p>
              </CardContent>
              <div className="bg-secondary/50 p-6 mt-auto">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <Image src={item.avatar} alt={item.name} data-ai-hint={item.hint} width={40} height={40} className="rounded-full" />
                    <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
