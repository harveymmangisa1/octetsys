import { AnonymousReportForm } from "@/components/cyber-violence/AnonymousReportForm";
import { CyberViolenceHero } from "@/components/cyber-violence/CyberViolenceHero";

export default function ReportCyberViolencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <CyberViolenceHero />
      <AnonymousReportForm />
    </div>
  );
}