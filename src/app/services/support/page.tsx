import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Headset, Server, HardDrive, Wrench, LifeBuoy, Zap, CheckCircle2, Clock, Award, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'IT System Support & Maintenance | Octet Systems',
    description: 'Reliable, round-the-clock system support to ensure operational continuity and resolve issues fast.',
    openGraph: {
        title: 'IT System Support & Maintenance | Octet Systems',
        description: 'Reliable, round-the-clock system support to ensure operational continuity and resolve issues fast.',
        type: 'website',
    },
};

export default function SupportPage() {
    const packages = [
        {
            name: 'Basic Support',
            price: 1500,
            period: 'per month',
            description: 'Essential IT support for small businesses during business hours.',
            features: [
                { text: 'Business Hours Support (9-5)', included: true },
                { text: 'Email & Phone Support', included: true },
                { text: 'Remote Troubleshooting', included: true },
                { text: 'Monthly System Health Check', included: true },
                { text: '24/7 Emergency Support', included: false },
                { text: 'On-Site Support', included: false },
            ],
            popular: false,
        },
        {
            name: 'Professional Support',
            price: 3500,
            period: 'per month',
            description: 'Comprehensive IT support with extended hours and on-site assistance.',
            features: [
                { text: 'Extended Hours Support (7am-9pm)', included: true },
                { text: 'Priority Response (2-hour SLA)', included: true },
                { text: 'On-Site Support (4 visits/month)', included: true },
                { text: 'Proactive Monitoring', included: true },
                { text: 'Patch Management', included: true },
                { text: 'Quarterly IT Reviews', included: true },
            ],
            popular: true,
        },
        {
            name: 'Enterprise Support',
            price: 7500,
            period: 'per month',
            description: 'Full-scale managed IT services with 24/7 support and dedicated team.',
            features: [
                { text: '24/7/365 Support', included: true },
                { text: 'Dedicated Account Manager', included: true },
                { text: 'Unlimited On-Site Visits', included: true },
                { text: 'Advanced Monitoring & Automation', included: true },
                { text: 'Strategic IT Planning', included: true },
                { text: 'Vendor Management', included: true },
            ],
            popular: false,
        },
    ];

    const services = [
        {
            icon: Headset,
            title: 'Help Desk Support',
            description: 'Multi-channel support via phone, email, and chat to resolve user issues quickly and efficiently.',
        },
        {
            icon: Server,
            title: 'Server Management',
            description: 'Proactive server monitoring, maintenance, and optimization to ensure peak performance.',
        },
        {
            icon: HardDrive,
            title: 'Backup & Recovery',
            description: 'Automated backup solutions with tested disaster recovery procedures to protect your data.',
        },
        {
            icon: Wrench,
            title: 'System Maintenance',
            description: 'Regular updates, patches, and preventive maintenance to keep systems running smoothly.',
        },
        {
            icon: LifeBuoy,
            title: 'Emergency Response',
            description: 'Rapid response to critical incidents with escalation procedures and 24/7 availability.',
        },
        {
            icon: Zap,
            title: 'Performance Optimization',
            description: 'Continuous monitoring and tuning to maximize system performance and user productivity.',
        },
    ];

    const benefits = [
        'Reduced Downtime',
        'Predictable Costs',
        'Expert Support Team',
        'Proactive Monitoring',
        'Regular Updates',
        'Security Patches',
        'Performance Reports',
        'Strategic Planning',
        'Vendor Management',
        'Asset Tracking',
        'Documentation',
        'Knowledge Base',
    ];

    return (
        <div className="flex flex-col min-h-dvh bg-background">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'IT System Support & Maintenance',
                        description: 'Reliable, round-the-clock system support to ensure operational continuity and resolve issues fast.',
                        provider: { '@type': 'Organization', name: 'Octet Systems' },
                        areaServed: 'Global',
                        category: 'IT Support',
                    }),
                }}
            />

            {/* Breadcrumb */}
            <div className="border-b border-border bg-secondary/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/#services" className="hover:text-primary transition-colors">Services</Link>
                    <span className="mx-2">/</span>
                    <span className="text-foreground font-medium">System Support</span>
                </div>
            </div>

            {/* Hero */}
            <section className="bg-background relative overflow-hidden border-b border-border">
                <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        <div className="lg:col-span-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
                                <Headset className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium text-primary">IT Support Services</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground mb-6">
                                System Support & Maintenance
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                                Reliable, round-the-clock system support to ensure operational continuity and resolve issues fast.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium text-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    24/7 Availability
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium text-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    Fast Response Times
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium text-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    Expert Technicians
                                </span>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link href="/book-consultation" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full px-8 py-4 font-semibold shadow-lg hover:shadow-primary/25">
                                    Get Started
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link href="#pricing" className="inline-flex items-center justify-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors rounded-full px-8 py-4 font-semibold">
                                    View pricing
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-8 shadow-xl">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                    <Headset className="w-8 h-8 text-primary" />
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-6 text-center text-muted-foreground text-xs font-medium">
                                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-secondary/50">
                                        <Clock className="w-5 h-5 text-foreground" />
                                        <span>24/7</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-secondary/50">
                                        <Award className="w-5 h-5 text-foreground" />
                                        <span>Certified</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-secondary/50">
                                        <Users className="w-5 h-5 text-foreground" />
                                        <span>Dedicated</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 text-sm font-medium text-foreground">
                                    <li className="flex items-center gap-3">
                                        <div className="p-1 rounded-full bg-green-500/10">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        </div>
                                        Rapid response times
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="p-1 rounded-full bg-blue-500/10">
                                            <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                        </div>
                                        Proactive monitoring
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="p-1 rounded-full bg-purple-500/10">
                                            <CheckCircle2 className="w-4 h-4 text-purple-500" />
                                        </div>
                                        Predictable pricing
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 lg:py-24 bg-secondary/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Support Services</h2>
                        <p className="text-lg text-muted-foreground">
                            Comprehensive IT support to keep your business running smoothly
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-card-foreground mb-3">{service.title}</h3>
                                    <p className="text-muted-foreground">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 lg:py-24 border-y border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Choose Our Support</h2>
                        <p className="text-lg text-muted-foreground">
                            Benefits of partnering with Octet Systems for IT support
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="px-6 py-3 bg-card border border-border rounded-full text-foreground font-medium hover:border-primary hover:bg-primary/5 transition-colors"
                            >
                                {benefit}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="py-16 lg:py-24 bg-secondary/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Flexible Support Plans</h2>
                        <p className="text-lg text-muted-foreground">
                            Choose the support level that matches your business needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`relative bg-card border-2 rounded-3xl p-8 ${pkg.popular ? 'border-primary shadow-xl shadow-primary/10' : 'border-border'
                                    }`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                                        Most Popular
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-card-foreground mb-2">{pkg.name}</h3>
                                <p className="text-muted-foreground text-sm mb-6">{pkg.description}</p>

                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-foreground">${pkg.price.toLocaleString()}</span>
                                    <span className="text-muted-foreground ml-2">/ {pkg.period}</span>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle2
                                                className={`w-5 h-5 mt-0.5 flex-shrink-0 ${feature.included ? 'text-green-500' : 'text-muted-foreground/30'
                                                    }`}
                                            />
                                            <span className={feature.included ? 'text-foreground' : 'text-muted-foreground/50'}>
                                                {feature.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/book-consultation"
                                    className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-all ${pkg.popular
                                            ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25'
                                            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                        }`}
                                >
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SLA Information */}
            <section className="py-16 lg:py-24 border-y border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">Service Level Agreements</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-card border border-border rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-primary mb-2">15 min</div>
                                <div className="text-sm text-muted-foreground">Critical Issue Response</div>
                            </div>
                            <div className="bg-card border border-border rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-primary mb-2">2 hours</div>
                                <div className="text-sm text-muted-foreground">High Priority Response</div>
                            </div>
                            <div className="bg-card border border-border rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                                <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 lg:py-24 bg-primary/5 border-y border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Ready for reliable IT support?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let&apos;s discuss how we can provide the IT support your business needs to thrive.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/book-consultation"
                            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full px-8 py-4 font-semibold shadow-lg hover:shadow-primary/25"
                        >
                            Schedule Consultation
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/quote"
                            className="inline-flex items-center justify-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors rounded-full px-8 py-4 font-semibold"
                        >
                            Request Quote
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
