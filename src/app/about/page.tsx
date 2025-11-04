
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { Mission } from "@/components/about/Mission";
import { Team } from "@/components/about/Team";
import { Cta } from "@/components/home/Cta";


export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <Mission />
        <Team />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
