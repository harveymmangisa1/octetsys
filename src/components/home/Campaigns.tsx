
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";

const campaigns = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity for Teens",
    description: "An ongoing initiative to educate young adults about online safety, privacy, and responsible digital citizenship.",
  },
  {
    icon: HeartHandshake,
    title: "16 Days of Activism",
    description: "Our annual campaign against online harassment and cyberbullying, providing resources and support for victims.",
  },
];

export function Campaigns() {
  return (
    <section id="campaigns" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Awareness Campaigns
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            We are committed to making the digital world a safer place for everyone through education and activism.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {campaigns.map((campaign) => (
            <Card key={campaign.title} className="flex flex-col group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <campaign.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardTitle className="font-headline text-xl">{campaign.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <CardDescription className="text-base">{campaign.description}</CardDescription>
                <Button variant="link" className="p-0 h-auto mt-4 self-start text-primary group-hover:underline">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
