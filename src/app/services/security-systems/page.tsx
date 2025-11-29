import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Camera, Fingerprint, Lock, Eye, Shield, Smartphone, CheckCircle2, Clock, Award, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'CCTV & Biometric Security Systems | Octet Systems',
    description: 'Advanced physical security solutions, including high-definition surveillance and biometric access control systems.',
    openGraph: {
        title: 'CCTV & Biometric Security Systems | Octet Systems',
        description: 'Advanced physical security solutions, including high-definition surveillance and biometric access control systems.',
        type: 'website',
    },
};

export default function SecuritySystemsPage() {
    const packages = [
        {
            name: 'Basic Surveillance',
            price: 5000,
            period: 'one-time',
            description: 'Essential CCTV system for small businesses and homes.',
            features: [
                { text: 'Up to 8 HD Cameras', included: true },
                { text: 'DVR/NVR System', included: true },
                { text: 'Remote Viewing App', included: true },
                { text: 'Professional Installation', included: true },
                { text: 'Biometric Access Control', included: false },
                { text: '24/7 Monitoring Service', included: false },
            ],
            popular: false,
        },
        {
            name: 'Professional Security',
            price: 15000,
            period: 'one-time',
            description: 'Comprehensive security system with biometric access control.',
            features: [
                { text: 'Up to 16 4K Cameras', included: true },
                { text: 'Advanced NVR with AI', included: true },
                { text: 'Biometric Access Control', included: true },
                { text: 'Motion Detection & Alerts', included: true },
                { text: 'Cloud Storage (1 year)', included: true },
                { text: 'Mobile App & Web Portal', included: true },
            ],
            popular: true,
        },
        {
            name: 'Enterprise Solution',
            price: 2500,
            period: 'per month',
            description: 'Full-scale security infrastructure with ongoing monitoring and support.',
            features: [
                { text: 'Unlimited Cameras', included: true },
                { text: 'Multi-Site Management', included: true },
                { text: 'Advanced Biometrics', included: true },
                { text: '24/7 Monitoring Service', included: true },
                { text: 'Incident Response Team', included: true },
                { text: 'Dedicated Security Manager', included: true },
            ],
            popular: false,
        },
    ];

    const services = [
        {
            icon: Camera,
            title: 'CCTV Surveillance',
            description: 'High-definition IP cameras with night vision, motion detection, and remote viewing capabilities.',
        },
        {
            icon: Fingerprint,
            title: 'Biometric Access',
            description: 'Fingerprint, facial recognition, and iris scanning systems for secure facility access control.',
        },
        {
            icon: Eye,
            title: 'Video Analytics',
            description: 'AI-powered video analytics for intrusion detection, people counting, and behavior analysis.',
        },
        {
            icon: Lock,
            title: 'Access Control',
            description: 'Smart card, keypad, and mobile-based access control systems integrated with your security infrastructure.',
        },
        {
            icon: Smartphone,
            title: 'Mobile Monitoring',
            description: 'Real-time monitoring and alerts via mobile apps for iOS and Android devices.',
        },
        {
            icon: Shield,
            title: 'Alarm Systems',
            description: 'Integrated alarm systems with instant notifications and emergency response protocols.',
        },
    ];

    const features = [
        '4K Ultra HD Resolution',
        'Night Vision (up to 100ft)',
        'Motion Detection',
        'Two-Way Audio',
        'Cloud Storage',
        'Local Storage',
        'Mobile Alerts',
        'AI-Powered Analytics',
        'Facial Recognition',
        'License Plate Recognition',
        'Weather Resistant',
        'Vandal Proof',
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
                        name: 'CCTV & Biometric Security Systems',
                        description: 'Advanced physical security solutions, including high-definition surveillance and biometric access control systems.',
                        provider: { '@type': 'Organization', name: 'Octet Systems' },
                        areaServed: 'Global',
                        category: 'Physical Security',
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
                    <span className="text-foreground font-medium">CCTV & Biometrics</span>
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
                                <Camera className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium text-primary">Physical Security</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground mb-6">
                                CCTV & Biometric Systems
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                                Advanced physical security solutions, including high-definition surveillance and biometric access control systems.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium text-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    4K Ultra HD
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium text-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    AI-Powered Analytics
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium text-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    24/7 Monitoring
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
                                    <Camera className="w-8 h-8 text-primary" />
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-6 text-center text-muted-foreground text-xs font-medium">
                                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-secondary/50">
                                        <Clock className="w-5 h-5 text-foreground" />
                                        <span>24/7 Watch</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-secondary/50">
                                        <Award className="w-5 h-5 text-foreground" />
                                        <span>Premium</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-secondary/50">
                                        <Users className="w-5 h-5 text-foreground" />
                                        <span>Expert Install</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 text-sm font-medium text-foreground">
                                    <li className="flex items-center gap-3">
                                        <div className="p-1 rounded-full bg-green-500/10">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        </div>
                                        Professional installation
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="p-1 rounded-full bg-blue-500/10">
                                            <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                        </div>
                                        Remote monitoring
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="p-1 rounded-full bg-purple-500/10">
                                            <CheckCircle2 className="w-4 h-4 text-purple-500" />
                                        </div>
                                        Lifetime support
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
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Security Solutions</h2>
                        <p className="text-lg text-muted-foreground">
                            Comprehensive physical security systems to protect your premises
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

            {/* Features */}
            <section className="py-16 lg:py-24 border-y border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Advanced Features</h2>
                        <p className="text-lg text-muted-foreground">
                            State-of-the-art technology for maximum security
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="px-6 py-3 bg-card border border-border rounded-full text-foreground font-medium hover:border-primary hover:bg-primary/5 transition-colors"
                            >
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="py-16 lg:py-24 bg-secondary/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Transparent Pricing</h2>
                        <p className="text-lg text-muted-foreground">
                            Choose the security package that best fits your needs
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
                        Ready to secure your premises?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let's design a comprehensive security system tailored to your specific requirements.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/book-consultation"
                            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full px-8 py-4 font-semibold shadow-lg hover:shadow-primary/25"
                        >
                            Schedule Site Survey
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
