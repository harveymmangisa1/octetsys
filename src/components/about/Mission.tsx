
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Handshake } from "lucide-react";

const values = [
    {
        icon: Target,
        title: "Our Mission",
        description: "To provide innovative and reliable IT solutions that drive business growth, while prioritizing customer education and building long-term, trusted relationships."
    },
    {
        icon: Eye,
        title: "Our Vision",
        description: "To be the leading IT partner in the region, recognized for our technical excellence, unwavering commitment to our clients, and our role in fostering a digitally empowered community."
    },
    {
        icon: Handshake,
        title: "Our Values",
        description: "Innovation, integrity, reliability, and an education-first approach are the pillars of our company. We believe in transparent communication and collaborative success."
    },
];

export function Mission() {
    return (
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value) => (
                        <Card key={value.title} className="text-center border-transparent shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all">
                            <CardHeader>
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <value.icon className="h-7 w-7" />
                                </div>
                                <CardTitle className="mt-4 font-headline text-xl">{value.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{value.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

    