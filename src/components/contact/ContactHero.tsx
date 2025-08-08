
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

const contactDetails = [
    {
        icon: Mail,
        title: "Email Us",
        content: "info@octetsystems.com",
        href: "mailto:info@octetsystems.com"
    },
    {
        icon: Phone,
        title: "Call Us",
        content: "+265 123 456 789",
        href: "tel:+265123456789"
    },
    {
        icon: MapPin,
        title: "Visit Us",
        content: "123 Tech Avenue, Blantyre, Malawi"
    }
];

export function ContactHero() {
  return (
    <section className="bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Get In Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind, a question about our services, or just want to say hello? We'd love to hear from you.
            </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactDetails.map((detail) => (
                <Card key={detail.title} className="text-center group hover:bg-background transition-colors">
                    <CardContent className="p-6">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <detail.icon className="h-7 w-7" />
                        </div>
                        <h3 className="font-headline text-xl font-semibold text-foreground">{detail.title}</h3>
                        {detail.href ? (
                            <Link href={detail.href} className="mt-2 text-muted-foreground group-hover:text-primary transition-colors">{detail.content}</Link>
                        ) : (
                            <p className="mt-2 text-muted-foreground">{detail.content}</p>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}

    