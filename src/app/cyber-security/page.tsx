
import { CyberSecurityHero } from "@/components/cyber-security/CyberSecurityHero";
import { Cta } from "@/components/cyber-security/Cta";
import { ServiceList } from "@/components/cyber-security/ServiceList";
import { ContactProcess } from "@/components/cyber-security/ContactProcess";
import { CyberViolenceReportCTA } from "@/components/cyber-violence/CyberViolenceReportCTA";
import { InteractiveCyberTools } from "@/components/cyber-security/InteractiveCyberTools";

export const runtime = 'edge';

export default function CyberSecurityPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <main className="flex-1">
        <CyberSecurityHero />
        <ServiceList />

        {/* Interactive Learning Tools */}
        <InteractiveCyberTools />

        <ContactProcess />
        <div className="container mx-auto px-4 py-12">
          <CyberViolenceReportCTA />
        </div>
        <Cta />
      </main>
    </div>
  );
}
