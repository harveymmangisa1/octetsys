
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Hero } from "@/components/home/Hero";
import RecentReports from "@/components/cyber-violence/RecentReports";
import { SixteenDaysCampaignCTA } from "@/components/campaign/SixteenDaysCampaignCTA";
import { FlyerMakerCta } from "@/components/home/FlyerMakerCta";
import { LatestReport } from "@/components/home/LatestReport";
import { CyberSecurityCta } from "@/components/home/CyberSecurityCta";
import { Services } from "@/components/home/Services";
import { Portfolio } from "@/components/home/Portfolio";
import { Campaigns } from "@/components/home/Campaigns";
// import { Feedback } from "@/components/home/Feedback";
import { Consultation } from "@/components/home/Consultation";
import { Cta } from "@/components/home/Cta";
// import { BwenziFAB } from "@/components/common/NzeruFAB";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <RecentReports />
        <div className="container mx-auto px-4 py-12">
          <SixteenDaysCampaignCTA />
        </div>
        <FlyerMakerCta />
        <LatestReport />
        <CyberSecurityCta />
        <Services />
        <Portfolio />
        <Campaigns />
        {/* <Feedback /> */}
        <Consultation />
        <Cta />
      </main>
      <Footer />
      {/* <BwenziFAB /> */}
    </div>
  );
}
