import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Network, Server, Shield, Wifi, Cable, Cloud, CheckCircle2, Clock, Award, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Networking & Infrastructure Services | Octet Systems',
    description: 'Robust, scalable network architecture design and implementation to keep your business connected and secure.',
    openGraph: {
        title: 'Networking & Infrastructure Services | Octet Systems',
        description: 'Robust, scalable network architecture design and implementation to keep your business connected and secure.',
        type: 'website',
    },
};

export default function NetworkingPage() {
    const packages = [
        {
            name: 'Network Assessment',
            price: 2500,
            period: 'one-time',
            description: 'Comprehensive network infrastructure assessment and optimization recommendations.',
            features: [
                { text: 'Network Topology Analysis', included: true },
                { text: 'Performance Assessment', included: true },
                { text: 'Security Audit', included: true },
                { text: 'Optimization Recommendations', included: true },
                { text: 'Implementation Support', included: false },
                { text: 'Ongoing Monitoring', included: false },
            ],
            popular: false,
        },
        {
            name: 'Network Design & Implementation',
            price: 8000,
            period: 'one-time',
            description: 'Complete network design and implementation for small to medium businesses.',
            features: [
                { text: 'All Assessment features', included: true },
                { text: 'Custom Network Design', included: true },
                { text: 'Hardware Procurement Support', included: true },
                { text: 'Full Implementation', included: true },
                { text: 'Staff Training', included: true },
                { text: 'Documentation', included: true },
            ],
            popular: true,
        },
        {
            name: 'Enterprise Infrastructure',
            price: 5000,
            period: 'per month',
            description: 'Comprehensive managed network infrastructure with 24/7 monitoring and support.',
            features: [
                { text: 'All Implementation features', included: true },
                { text: '24/7 Network Monitoring', included: true },
                { text: 'Proactive Maintenance', included: true },
                { text: 'Priority Support', included: true },
                { text: 'Regular Performance Optimization', included: true },
                { text: 'Dedicated Network Engineer', included: true },
            ],
            popular: false,
        },
    ];

    const services = [
        {
            icon: Network,
            title: 'Network Architecture',
            description: 'Design and implementation of scalable, secure network infrastructures tailored to your business needs.',
        },
        {
            icon: Server,
            title: 'Server Infrastructure',
            description: 'Enterprise-grade server setup, configuration, and management for optimal performance and reliability.',
        },
        {
            icon: Wifi,
            title: 'Wireless Solutions',
            description: 'High-performance wireless networks with seamless coverage and advanced security features.',
        },
        {
            icon: Cable,
            title: 'Structured Cabling',
            description: 'Professional cabling solutions following industry standards for data centers and office environments.',
        },
        {
            icon: Cloud,
            title: 'Cloud Integration',
            description: 'Hybrid cloud solutions integrating on-premises infrastructure with cloud services.',
        },
        {
            icon: Shield,
            title: 'Network Security',
            description: 'Advanced firewall, VPN, and network segmentation to protect your infrastructure.',
        },
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
                        name: 'Networking & Infrastructure Services',
                        description: 'Robust, scalable network architecture design and implementation to keep your business connected and secure.',
                        provider: { '@type': 'Organization', name: 'Octet Systems' },
                        areaServed: 'Global',
                        category: 'Network Infrastructure',
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
                    <span className="text-foreground font-medium">Networking & Infrastructure</span>
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
                                <Network className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium text-primary">Infrastructure Services</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground mb-6">
                                Networking & Infrastructure
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                                Robust, scalable network architecture design and implementation to keep your business connected and secure.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium text-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    99.9% Uptime SLA
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium text-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    24/7 Support
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium text-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    Scalable Solutions
                                </span>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link href="/book-consultation" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full px-8 py-4 font-semibold shadow-lg hover:shadow-primary/25">
                                    Get a proposal
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
                                    <Network className="w-8 h-8 text-primary" />
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-6 text-center text-muted-foreground text-xs font-medium">
                                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-secondary/50">
                                        <Clock className="w-5 h-5 text-foreground" />
                                        <span>Fast Deploy</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-secondary/50">
                                        <Award className="w-5 h-5 text-foreground" />
                                        <span>Certified</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-secondary/50">
                                        <Users className="w-5 h-5 text-foreground" />
                                        <span>Expert Team</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 text-sm font-medium text-foreground">
                                    <li className="flex items-center gap-3">
                                        <div className="p-1 rounded-full bg-green-500/10">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        </div>
                                        Enterprise-grade solutions
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="p-1 rounded-full bg-blue-500/10">
                                            <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                        </div>
                                        Scalable infrastructure
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="p-1 rounded-full bg-purple-500/10">
                                            <CheckCircle2 className="w-4 h-4 text-purple-500" />
                                        </div>
                                        24/7 monitoring & support
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
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Network Services</h2>
                        <p className="text-lg text-muted-foreground">
                            Comprehensive networking solutions to power your business operations
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

            {/* Pricing */}
            <section id="pricing" className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Transparent Pricing</h2>
                        <p className="text-lg text-muted-foreground">
                            Choose the package that best fits your infrastructure needs
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

            {/* CTA */}
            <section className="py-16 lg:py-24 bg-primary/5 border-y border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Ready to upgrade your network infrastructure?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can design and implement a robust, scalable network solution for your business.
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
