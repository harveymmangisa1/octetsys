
import { Cta } from "@/components/home/Cta";
import { AboutHero } from "@/components/about/AboutHero";
import { Mission } from "@/components/about/Mission";
import { Team } from "@/components/about/Team";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <main className="flex-1">
        <AboutHero />
        <Mission />
        <Team />
        <Cta />
      </main>
    </div>
  );
}
