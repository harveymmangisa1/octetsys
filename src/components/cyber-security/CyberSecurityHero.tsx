
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";

export function CyberSecurityHero() {
  return (
    <section className="hero bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Advanced Cybersecurity Solutions</h1>
            <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                Protecting your digital future with cutting-edge security intelligence and innovative technology solutions developed from Africa for the world.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 transition-colors">
                    <Link href="#threat-submission">
                        <Shield className="mr-2 h-5 w-5" />
                        Explore Security Tools
                    </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 transition-colors">
                    <Link href="#">
                        <ArrowRight className="mr-2 h-5 w-5" />
                        Watch Demo
                    </Link>
                </Button>
            </div>
        </div>
    </section>
  );
}