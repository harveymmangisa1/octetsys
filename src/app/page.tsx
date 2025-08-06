
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Portfolio } from "@/components/home/Portfolio";
import { TechFaq } from "@/components/home/TechFaq";
import { Campaigns } from "@/components/home/Campaigns";
import { Consultation } from "@/components/home/Consultation";
import { Cta } from "@/components/home/Cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <TechFaq />
        <Campaigns />
        <Consultation />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
