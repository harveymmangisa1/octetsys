import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { serviceData, IService, IServiceData } from '@/lib/service-data';
import { cn } from '@/lib/utils';
import { ArrowRight, Shield, Layers, BadgeCheck, ShieldCheck, Award, Globe, Clock, Target, FileText } from 'lucide-react';
import { ServiceDetails } from '@/components/services/ServiceDetails';
import React from 'react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = (serviceData as IServiceData)[slug];
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

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service: IService = (serviceData as IServiceData)[slug];
  if (!service) return notFound();

  const Icon: React.ElementType = service.icon;

  return (
    <div className="flex flex-col min-h-dvh bg-background">
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
      {service.faqs?.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: service.faqs.map((f: { q: string; a: string }) => ({
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
      <div className="border-b border-border bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-muted-foreground">
          <Link href="/cyber-security" className="hover:text-primary transition-colors">Cyber Security</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">{service.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-background relative overflow-hidden border-b border-border">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">{service.category || 'Cybersecurity Service'}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">{service.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {(service.highlights || []).map((h: string) => (
                  <span key={h} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium text-foreground">
                    <BadgeCheck className="w-4 h-4 text-primary" />
                    {h}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/book-consultation" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full px-8 py-4 font-semibold shadow-lg hover:shadow-primary/25">
                  Get a proposal
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="#overview" className="inline-flex items-center justify-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors rounded-full px-8 py-4 font-semibold">
                  Explore details
                </Link>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-8 shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  {Icon ? <Icon className="w-8 h-8 text-primary" /> : <Layers className="w-8 h-8 text-primary" />}
                </div>
                {/* Trust badges */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-center text-muted-foreground text-xs font-medium">
                  <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-secondary/50"><ShieldCheck className="w-5 h-5 text-foreground" /><span>NIST/ISO</span></div>
                  <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-secondary/50"><Award className="w-5 h-5 text-foreground" /><span>ATT&CK</span></div>
                  <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-secondary/50"><Globe className="w-5 h-5 text-foreground" /><span>Global</span></div>
                </div>
                <ul className="space-y-4 text-sm font-medium text-foreground">
                  <li className="flex items-center gap-3"><div className="p-1 rounded-full bg-green-500/10"><Clock className="w-4 h-4 text-green-500" /></div> SLA-backed delivery</li>
                  <li className="flex items-center gap-3"><div className="p-1 rounded-full bg-blue-500/10"><Target className="w-4 h-4 text-blue-500" /></div> Outcomes-driven KPIs</li>
                  <li className="flex items-center gap-3"><div className="p-1 rounded-full bg-purple-500/10"><FileText className="w-4 h-4 text-purple-500" /></div> Executive reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body with sticky ToC */}
      <ServiceDetails service={service} />
    </div>
  );
}
