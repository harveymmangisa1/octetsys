import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Users, BookOpen, Award, Target, TrendingUp, CheckCircle2, Clock, Shield } from 'lucide-react';

export const metadata: Metadata = {
    title: 'IT Training & Certification Programs | Octet Systems',
    description: 'Empower your team with professional IT training, from basic cybersecurity awareness to advanced technical skills.',
    openGraph: {
        title: 'IT Training & Certification Programs | Octet Systems',
        description: 'Empower your team with professional IT training, from basic cybersecurity awareness to advanced technical skills.',
        type: 'website',
    },
};

export default function TrainingPage() {
    const packages = [
        {
            name: 'Security Awareness',
            price: 1500,
            period: 'per session',
            description: 'Essential cybersecurity awareness training for all employees.',
            features: [
                { text: 'Up to 30 participants', included: true },
                { text: 'Phishing Awareness', included: true },
                { text: 'Password Security', included: true },
                { text: 'Social Engineering Defense', included: true },
                { text: 'Certification', included: false },
                { text: 'Advanced Topics', included: false },
            ],
            popular: false,
        },
        {
            name: 'Technical Training',
            price: 4500,
            period: 'per course',
            description: 'In-depth technical training with hands-on labs and certification prep.',
            features: [
                { text: 'Up to 20 participants', included: true },
                { text: 'Hands-on Lab Sessions', included: true },
                { text: 'Course Materials', included: true },
                { text: 'Certification Preparation', included: true },
                { text: 'Official Certification Exam', included: true },
                { text: 'Post-Training Support (30 days)', included: true },
            ],
            popular: true,
        },
        {
            name: 'Enterprise Program',
            price: 3000,
            period: 'per month',
            description: 'Comprehensive ongoing training program with custom curriculum.',
            features: [
                { text: 'Unlimited participants', included: true },
                { text: 'Custom Curriculum Design', included: true },
                { text: 'Monthly Training Sessions', included: true },
                { text: 'Skills Assessment', included: true },
                { text: 'Progress Tracking Dashboard', included: true },
                { text: 'Dedicated Training Manager', included: true },
            ],
            popular: false,
        },
    ];

    const courses = [
        {
            icon: Shield,
            title: 'Cybersecurity Fundamentals',
            description: 'Essential security concepts, threat landscape, and best practices for protecting organizational assets.',
            duration: '2 days',
        },
        {
            icon: Target,
            title: 'Network Security',
            description: 'Advanced network security concepts including firewalls, VPNs, IDS/IPS, and secure network design.',
            duration: '3 days',
        },
        {
            icon: BookOpen,
            title: 'Ethical Hacking',
            description: 'Penetration testing methodologies, vulnerability assessment, and security testing techniques.',
            duration: '5 days',
        },
        {
            icon: Users,
            title: 'Security Awareness',
            description: 'Practical security awareness for employees covering phishing, social engineering, and safe practices.',
            duration: '1 day',
        },
        {
            icon: Award,
            title: 'Compliance Training',
            description: 'Understanding regulatory requirements including GDPR, HIPAA, PCI-DSS, and ISO 27001.',
            duration: '2 days',
        },
        {
            icon: TrendingUp,
            title: 'Cloud Security',
            description: 'Securing cloud environments including AWS, Azure, and GCP with best practices and tools.',
            duration: '3 days',
        },
    ];

    const certifications = [
        'CompTIA Security+',
        'Certified Ethical Hacker (CEH)',
        'CISSP',
        'CISM',
        'AWS Certified Security',
        'Azure Security Engineer',
        'CCNA Security',
        'ISO 27001 Lead Implementer',
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
                        name: 'IT Training & Certification Programs',
                        description: 'Empower your team with professional IT training, from basic cybersecurity awareness to advanced technical skills.',
                        provider: { '@type': 'Organization', name: 'Octet Systems' },
                        areaServed: 'Global',
                        category: 'IT Training',
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
                    <span className="text-foreground font-medium">IT Training</span>
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
                                <GraduationCap className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium text-primary">Professional Training</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground mb-6">
                                IT Training & Certification
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                                Empower your team with professional IT training, from basic cybersecurity awareness to advanced technical skills.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium text-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    Expert Instructors
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium text-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    Hands-on Labs
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium text-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    Industry Certifications
                                </span>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link href="/book-consultation" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full px-8 py-4 font-semibold shadow-lg hover:shadow-primary/25">
                                    Enroll Your Team
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link href="#courses" className="inline-flex items-center justify-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors rounded-full px-8 py-4 font-semibold">
                                    Browse Courses
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-8 shadow-xl">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                    <GraduationCap className="w-8 h-8 text-primary" />
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-6 text-center text-muted-foreground text-xs font-medium">
                                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-secondary/50">
                                        <Clock className="w-5 h-5 text-foreground" />
                                        <span>Flexible</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-secondary/50">
                                        <Award className="w-5 h-5 text-foreground" />
                                        <span>Certified</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-secondary/50">
                                        <Users className="w-5 h-5 text-foreground" />
                                        <span>Expert Led</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 text-sm font-medium text-foreground">
                                    <li className="flex items-center gap-3">
                                        <div className="p-1 rounded-full bg-green-500/10">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        </div>
                                        Industry-recognized certs
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="p-1 rounded-full bg-blue-500/10">
                                            <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                        </div>
                                        Practical hands-on labs
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="p-1 rounded-full bg-purple-500/10">
                                            <CheckCircle2 className="w-4 h-4 text-purple-500" />
                                        </div>
                                        Custom corporate programs
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Grid */}
            <section id="courses" className="py-16 lg:py-24 bg-secondary/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Training Courses</h2>
                        <p className="text-lg text-muted-foreground">
                            Comprehensive training programs designed to build real-world skills
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course, index) => {
                            const Icon = course.icon;
                            return (
                                <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                            {course.duration}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-card-foreground mb-3">{course.title}</h3>
                                    <p className="text-muted-foreground">{course.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-16 lg:py-24 border-y border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Certification Preparation</h2>
                        <p className="text-lg text-muted-foreground">
                            We prepare you for industry-leading certifications
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="px-6 py-3 bg-card border border-border rounded-full text-foreground font-medium hover:border-primary hover:bg-primary/5 transition-colors"
                            >
                                {cert}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="py-16 lg:py-24 bg-secondary/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Training Packages</h2>
                        <p className="text-lg text-muted-foreground">
                            Flexible training options to fit your organization's needs
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
                        Ready to upskill your team?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Contact us to discuss a custom training program tailored to your organization's needs.
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
