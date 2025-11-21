import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { serviceData } from '@/lib/service-data';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle2, Shield, Clock, Target, FileText, Layers, LineChart, BadgeCheck, Award, ShieldCheck, Globe } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = (serviceData as any)[slug];
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.title} | Octet Systems Cybersecurity`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Octet Systems`,
      description: service.description,
      type: 'article',
    },
  };
}

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

function Section({ id, title, children, className }: { id: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-12', className)}>
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px bg-slate-200 w-8"></div>
        <h2 className="text-lg font-semibold text-slate-900 tracking-wide">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = (serviceData as any)[slug];
  if (!service) return notFound();

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

  const Icon = service.icon as any;

  return (
    <div className="flex flex-col min-h-dvh bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            description: service.description,
            provider: { '@type': 'Organization', name: 'Octet Systems' },
            areaServed: 'Global',
            category: service.category || 'Cybersecurity',
          }),
        }}
      />
      {S.faqs?.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: S.faqs.map((f: any) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: f.a,
                },
              })),
            }),
          }}
        />
      ) : null}

      {/* Breadcrumb */}
      <div className="border-b bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-slate-600">
          <Link href="/cyber-security" className="hover:underline">Cyber Security</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-medium">{service.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <Shield className="w-5 h-5 text-blue-300" />
                <span className="text-sm font-medium text-white/90">{service.category || 'Cybersecurity Service'}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="mt-4 text-lg text-slate-200 max-w-2xl">{service.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {S.highlights.map((h: string) => (
                  <span key={h} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm">
                    <BadgeCheck className="w-4 h-4 text-emerald-300" />
                    {h}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <Link href="/book-consultation" className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-200 transition-colors rounded-lg px-5 py-3 font-semibold">
                  Get a proposal
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#toc" className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 transition-colors rounded-lg px-5 py-3 font-semibold">
                  Explore details
                </Link>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  {Icon ? <Icon className="w-7 h-7 text-white" /> : <Layers className="w-7 h-7 text-white" />}
                </div>
                {/* Trust badges */}
                <div className="grid grid-cols-3 gap-3 mb-4 text-center text-white/80 text-xs">
                  <div className="flex flex-col items-center gap-1"><ShieldCheck className="w-4 h-4" /><span>NIST/ISO</span></div>
                  <div className="flex flex-col items-center gap-1"><Award className="w-4 h-4" /><span>ATT&CK-led</span></div>
                  <div className="flex flex-col items-center gap-1"><Globe className="w-4 h-4" /><span>Global</span></div>
                </div>
                <ul className="space-y-3 text-slate-100/90">
                  <li className="flex items-center gap-2"><Clock className="w-4 h-4" /> SLA-backed delivery</li>
                  <li className="flex items-center gap-2"><Target className="w-4 h-4" /> Outcomes-driven KPIs</li>
                  <li className="flex items-center gap-2"><FileText className="w-4 h-4" /> Executive reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body with sticky ToC */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <aside id="toc" className="lg:col-span-3">
          <div className="sticky top-24 rounded-2xl border bg-white p-6">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">On this page</h3>
            <nav className="space-y-2 text-sm">
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
                <Link key={s.id} href={`#${s.id}`} className="block text-slate-600 hover:text-slate-900">{s.label}</Link>
              ))}
            </nav>
          </div>
        </aside>

        <div className="lg:col-span-9">
          <Section id="overview" title="Overview">
            <p className="text-slate-700 leading-7">{S.overview}</p>
          </Section>

          <Section id="benefits" title="Benefits">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {S.benefits.map((b: string) => (
                <li key={b} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <span className="text-slate-700">{b}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="methodology" title="Methodology">
            <ol className="list-decimal pl-6 space-y-3 text-slate-700">
              {S.methodology.map((m: string, i: number) => (
                <li key={i}>{m}</li>
              ))}
            </ol>
          </Section>

          <Section id="deliverables" title="Deliverables">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {S.deliverables.map((d: string) => (
                <li key={d} className="flex items-start gap-3 bg-white rounded-xl p-4 border">
                  <FileText className="w-5 h-5 text-slate-700 mt-0.5" />
                  <span className="text-slate-700">{d}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="outcomes" title="Outcomes & Metrics">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {S.outcomes.map((o: string) => (
                <li key={o} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border">
                  <LineChart className="w-5 h-5 text-blue-700 mt-0.5" />
                  <span className="text-slate-700">{o}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="alignment" title="Compliance Alignment">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {S.alignment.map((a: string) => (
                <div key={a} className="rounded-xl border p-4 bg-white">
                  <BadgeCheck className="w-5 h-5 text-emerald-600 inline-block mr-2" />
                  <span className="text-slate-700">{a}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section id="pricing" title="Pricing">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {S.pricing.map((p: any) => (
                <div key={p.tier} className="rounded-2xl border p-6 bg-white">
                  <h4 className="text-slate-900 font-semibold mb-1">{p.tier}</h4>
                  <p className="text-slate-600 text-sm">{p.summary}</p>
                  {p.startingAt && <p className="mt-3 text-slate-900 font-medium">{p.startingAt}</p>}
                </div>
              ))}
            </div>
          </Section>

          <Section id="faqs" title="FAQs">
            <div className="space-y-4">
              {S.faqs.map((f: any, i: number) => (
                <details key={i} className="rounded-xl border p-4 bg-white">
                  <summary className="cursor-pointer text-slate-900 font-medium">{f.q}</summary>
                  <p className="mt-2 text-slate-700">{f.a}</p>
                </details>
              ))}
            </div>
          </Section>

          {/* CTA */}
          <div className="mt-12">
            <div className="rounded-2xl border bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold">Ready to level up your security program?</h3>
                <p className="text-slate-300">Book a consultation and get a tailored proposal aligned to your goals.</p>
              </div>
              <Link href="/book-consultation" className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-200 rounded-lg px-5 py-3 font-semibold">
                Book consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
