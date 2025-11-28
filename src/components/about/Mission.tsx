
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
        <section className="py-24 bg-secondary/30 border-y border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value) => (
                        <div key={value.title} className="text-center group p-6 rounded-2xl hover:bg-background hover:shadow-lg transition-all duration-300">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                                <value.icon className="h-7 w-7" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-foreground">{value.title}</h3>
                            <p className="mt-2 text-muted-foreground font-light leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
