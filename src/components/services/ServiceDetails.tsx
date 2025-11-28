// src/components/services/ServiceDetails.tsx
import React from 'react';
import Link from 'next/link';
import { CheckCircle2, FileText, LineChart, BadgeCheck, ChevronRight, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const defaultSections = {
  highlights: [
    'Framework-aligned: NIST CSF, ISO 27001, CIS',
    'ATT&CK-informed detection & response',
    'Measurable outcomes: MTTD/MTTR, coverage, risk reduction',
  ],
  overview: `Our service is designed to mature your security program with measurable outcomes, clear SLAs, and alignment to globally recognized frameworks. We combine proactive strategy, hands-on engineering, and operations with executive-ready reporting.`,
  benefits: [
    'Reduce risk and attack surface with continuous improvement',
    'Achieve audit readiness and demonstrate control effectiveness',
    'Accelerate decision-making with board-ready reporting',
    'Harden identity, cloud, and workloads by default',
  ],
  methodology: [
    'Assess: Baseline controls and risks, map to frameworks',
    'Design: Target-state architecture and operating model',
    'Implement: Tooling integration, policy-as-code, automation',
    'Operate: Monitor, detect, respond, optimize',
  ],
  deliverables: [
    'Current/Target State and Gap Assessment',
    'Runbooks and Standard Operating Procedures',
    'Control Matrix mapped to NIST/ISO/CIS',
    'Executive and Technical Reporting Pack',
  ],
  outcomes: [
    'Improved MTTD/MTTR and reduced incident volume',
    'Higher control coverage and audit pass rates',
    'Secure-by-default landing zones and identity posture',
  ],
  alignment: [
    'NIST CSF 2.0, ISO/IEC 27001:2022',
    'CIS Controls v8, MITRE ATT&CK',
    'OWASP ASVS/SAMM (for AppSec), SOC2 (where applicable)'
  ],
pricing: [
    { tier: 'Foundation', summary: 'Baseline assessment + quick wins', startingAt: 'From $X,XXX' },
    { tier: 'Managed', summary: 'Operate and optimize with SLAs', startingAt: 'From $X,XXX/mo' },
    { tier: 'Enterprise', summary: 'Tailored program with co-managed ops', startingAt: 'Custom' },
  ],
  faqs: [
    { q: 'Which frameworks do you align to?', a: 'We align to NIST CSF, ISO 27001, CIS Controls, and MITRE ATT&CK. For AppSec we reference OWASP, and for audits we support SOC2 readiness.' },
    { q: 'Do you provide 24/7 coverage?', a: 'For MDR/SOC services, yes. We define SLAs (e.g., triage within 15 minutes) and provide on-call response tiers.' },
    { q: 'Can you work with our existing tools?', a: 'Yes, we integrate with your EDR/XDR, SIEM, CSPM/IAM platforms, and CI/CD pipelines.' },
  ],
};

const Section = ({ id, title, children, className }: { id: string; title: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={cn('scroll-mt-32', className)}>
    <div className="flex items-center gap-4 mb-8">
      <div className="h-8 w-1 bg-primary rounded-full"></div>
      <h2 className="text-2xl font-bold text-foreground tracking-tight">{title}</h2>
    </div>
    {children}
  </section>
);

export const ServiceDetails = ({ service }: { service: any }) => {
  const S = {
    highlights: service.highlights || defaultSections.highlights,
    overview: service.overview || defaultSections.overview,
    benefits: service.benefits || defaultSections.benefits,
    methodology: service.methodology || defaultSections.methodology,
    deliverables: service.deliverables || defaultSections.deliverables,
    outcomes: service.outcomes || defaultSections.outcomes,
    alignment: service.complianceAlignment || defaultSections.alignment,
    pricing: service.pricing || defaultSections.pricing,
    faqs: service.faqs || defaultSections.faqs,
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
      <aside id="toc" className="lg:col-span-3">
        <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">On this page</h3>
          <nav className="space-y-1">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'benefits', label: 'Benefits' },
              { id: 'methodology', label: 'Methodology' },
              { id: 'deliverables', label: 'Deliverables' },
              { id: 'outcomes', label: 'Outcomes' },
              { id: 'alignment', label: 'Compliance Alignment' },
              { id: 'pricing', label: 'Pricing' },
              { id: 'faqs', label: 'FAQs' },
            ].map(s => (
              <Link key={s.id} href={`#${s.id}`} className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                {s.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      <div className="lg:col-span-9 space-y-16">
        <Section id="overview" title="Overview">
          <p className="text-lg text-muted-foreground leading-relaxed">{S.overview}</p>
        </Section>

        <Section id="benefits" title="Benefits">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {S.benefits.map((b: string) => (
              <li key={b} className="flex items-start gap-4 bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="mt-1 bg-green-500/10 p-1.5 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-foreground font-medium leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="methodology" title="Methodology">
          <div className="relative pl-8 border-l-2 border-primary/20 space-y-8">
            {S.methodology.map((m: string, i: number) => (
              <div key={i} className="relative">
                <div className="absolute -left-[41px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-background border-2 border-primary text-xs font-bold text-primary">
                  {i + 1}
                </div>
                <p className="text-lg text-foreground font-medium">{m}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="deliverables" title="Deliverables">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {S.deliverables.map((d: string) => (
              <li key={d} className="flex items-start gap-4 bg-secondary/20 rounded-2xl p-6 border border-border/50">
                <FileText className="w-6 h-6 text-primary mt-0.5" />
                <span className="text-foreground font-medium">{d}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="outcomes" title="Outcomes & Metrics">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {S.outcomes.map((o: string) => (
              <li key={o} className="flex items-start gap-4 bg-gradient-to-br from-card to-secondary/30 rounded-2xl p-6 border border-border">
                <LineChart className="w-6 h-6 text-blue-600 mt-0.5" />
                <span className="text-foreground font-medium">{o}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="alignment" title="Compliance Alignment">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {S.alignment.map((a: string) => (
              <div key={a} className="rounded-xl border border-border p-4 bg-card flex items-center gap-3">
                <BadgeCheck className="w-5 h-5 text-emerald-600" />
                <span className="text-foreground font-medium">{a}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="pricing" title="Pricing">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {S.pricing.map((p: any) => (
              <div key={p.tier} className="rounded-3xl border border-border p-8 bg-card hover:border-primary/50 transition-colors">
                <h4 className="text-xl font-bold text-foreground mb-2">{p.tier}</h4>
                <p className="text-muted-foreground text-sm mb-6 h-10">{p.summary}</p>
                {p.startingAt && <p className="text-2xl font-bold text-primary">{p.startingAt}</p>}
              </div>
            ))}
          </div>
        </Section>

        <Section id="faqs" title="FAQs">
          <div className="space-y-4">
            {S.faqs.map((f: any, i: number) => (
              <details key={i} className="group rounded-2xl border border-border p-6 bg-card open:bg-secondary/20 transition-colors">
                <summary className="cursor-pointer text-lg font-semibold text-foreground list-none flex items-center justify-between">
                  {f.q}
                  <span className="ml-4 transition-transform group-open:rotate-180">
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <div className="mt-12">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-slate-900 to-slate-800 p-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-8 shadow-2xl">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to level up your security program?</h3>
              <p className="text-slate-300 text-lg">Book a consultation and get a tailored proposal aligned to your goals.</p>
            </div>
            <Link href="/book-consultation" className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-200 rounded-full px-8 py-4 font-bold transition-colors whitespace-nowrap">
              Book consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
