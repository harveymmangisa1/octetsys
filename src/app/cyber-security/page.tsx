
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { CyberSecurityHero } from "@/components/cyber-security/CyberSecurityHero";
import { Cta } from "@/components/cyber-security/Cta";
import { ThreatSubmission } from "@/components/cyber-security/ThreatSubmission";

export default function CyberSecurityPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <CyberSecurityHero />
        <ThreatSubmission />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
