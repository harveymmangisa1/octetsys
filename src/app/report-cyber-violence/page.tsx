import { AnonymousReportForm } from "@/components/cyber-violence/AnonymousReportForm";
import { CyberViolenceHero } from "@/components/cyber-violence/CyberViolenceHero";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function ReportCyberViolencePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Header />
      <main>
        <CyberViolenceHero />
        <AnonymousReportForm />
      </main>
      <Footer />
    </div>
  );
}
