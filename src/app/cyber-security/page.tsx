
import { CyberSecurityHero } from "@/components/cyber-security/CyberSecurityHero";
import { Cta } from "@/components/cyber-security/Cta";
// import { ThreatSubmission } from "@/components/cyber-security/ThreatSubmission";
import { ServiceList } from "@/components/cyber-security/ServiceList";
import { ContactProcess } from "@/components/cyber-security/ContactProcess";
import { CyberViolenceReportCTA } from "@/components/cyber-violence/CyberViolenceReportCTA";

export const runtime = 'edge';

export default function CyberSecurityPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <main className="flex-1">
        <CyberSecurityHero />
        <ServiceList />
        <ContactProcess />
        <div className="container mx-auto px-4 py-12">
          <CyberViolenceReportCTA />
        </div>
        {/* <ThreatSubmission /> */}
        <Cta />
      </main>
    </div>
  );
}
