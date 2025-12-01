import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Code, Shield, FileText, Monitor, Brain, Users, Award, BookOpen, PlayCircle, Download, CheckCircle2, Clock, Star } from 'lucide-react';
import React from 'react';

export const metadata: Metadata = {
    title: 'Interactive Training Modules | Octet Systems',
    description: 'Learn essential digital skills with our interactive training modules. From Python programming to AI tools, master new technologies at your own pace.',
    openGraph: {
        title: 'Interactive Training Modules | Octet Systems',
        description: 'Learn essential digital skills with our interactive training modules. From Python programming to AI tools, master new technologies at your own pace.',
        type: 'website',
    },
};

interface Module {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
    duration: string;
    chapters: number;
    level: string;
    badge: string;
    features: string[];
}

const modules: Module[] = [
    {
        id: 'python-programming',
        title: 'Introduction to Python Programming',
        description: 'Master Python programming fundamentals through interactive lessons and hands-on coding exercises.',
        icon: Code,
        color: 'bg-blue-500',
        duration: '5 hours',
        chapters: 5,
        level: 'Beginner',
        badge: 'Python Fundamentals',
        features: ['Interactive coding environment', 'Real-time feedback', '5 progressive chapters', 'Downloadable certificate']
    },
    {
        id: 'safe-internet-habits',
        title: 'Safe Internet Habits',
        description: 'Learn essential online safety practices to protect yourself from digital threats and scams.',
        icon: Shield,
        color: 'bg-green-500',
        duration: '3 hours',
        chapters: 4,
        level: 'Essential',
        badge: 'Digital Safety Certified',
        features: ['Real-world scenarios', 'Threat detection practice', 'Safety checklists', 'Personal security plan']
    },
    {
        id: 'ms-office-tools',
        title: 'MS Office Tools Mastery',
        description: 'Become proficient in Microsoft Office suite with practical exercises and real-world applications.',
        icon: FileText,
        color: 'bg-orange-500',
        duration: '6 hours',
        chapters: 6,
        level: 'Intermediate',
        badge: 'Office Specialist',
        features: ['Word, Excel, PowerPoint', 'Practical templates', 'Productivity tips', 'Business applications']
    },
    {
        id: 'computer-basics',
        title: 'Computer Basics',
        description: 'Build a strong foundation in computer fundamentals, from hardware to software essentials.',
        icon: Monitor,
        color: 'bg-purple-500',
        duration: '4 hours',
        chapters: 5,
        level: 'Beginner',
        badge: 'Computer Essentials',
        features: ['Hardware & software', 'File management', 'Troubleshooting basics', 'Digital literacy']
    },
    {
        id: 'ai-collaboration-tools',
        title: 'AI and Collaboration Tools',
        description: 'Explore cutting-edge AI tools and collaboration platforms to boost productivity and teamwork.',
        icon: Brain,
        color: 'bg-pink-500',
        duration: '4 hours',
        chapters: 4,
        level: 'Modern Skills',
        badge: 'AI Tools Proficient',
        features: ['AI assistants', 'Team collaboration', 'Productivity automation', 'Future-ready skills']
    }
];

export default function InteractiveTrainingPage() {
    return (
        <div className="flex flex-col min-h-dvh bg-background">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'EducationalOccupationalProgram',
                        name: 'Interactive Training Modules',
                        description: 'Learn essential digital skills with our interactive training modules',
                        provider: { '@type': 'Organization', name: 'Octet Systems' },
                        educationalLevel: 'Beginner to Intermediate',
                        timeRequired: 'PT3H-PT6H',
                        offers: {
                            '@type': 'Offer',
                            price: '0',
                            priceCurrency: 'USD'
                        }
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
                    <span className="text-foreground font-medium">Interactive Training</span>
                </div>
            </div>

            {/* Hero */}
            <section className="bg-background relative overflow-hidden border-b border-border">
                <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
                            <BookOpen className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium text-primary">Interactive Learning</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground mb-6">
                            Master Digital Skills
                            <span className="block text-primary">Interactively</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                            Learn at your own pace with hands-on exercises, real-time feedback, and downloadable badges. 
                            From Python programming to AI tools, build practical skills for the digital age.
                        </p>

                        <div className="flex flex-wrap gap-3 justify-center mb-10">
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium text-foreground">
                                <PlayCircle className="w-4 h-4 text-primary" />
                                Interactive Lessons
                            </span>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium text-foreground">
                                <Award className="w-4 h-4 text-primary" />
                                Earn Badges
                            </span>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium text-foreground">
                                <Clock className="w-4 h-4 text-primary" />
                                Self-Paced
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="#modules" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full px-8 py-4 font-semibold shadow-lg hover:shadow-primary/25">
                                Explore Modules
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/book-consultation" className="inline-flex items-center justify-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors rounded-full px-8 py-4 font-semibold">
                                Get Guidance
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules Grid */}
            <section id="modules" className="py-16 lg:py-24 bg-secondary/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Interactive Training Modules</h2>
                        <p className="text-lg text-muted-foreground">
                            Choose your learning path and start building practical skills today
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {modules.map((module) => {
                            const Icon = module.icon;
                            return (
                                <div key={module.id} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                    {/* Module Header */}
                                    <div className={`h-2 ${module.color}`}></div>
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-14 h-14 rounded-xl ${module.color} flex items-center justify-center`}>
                                                <Icon className="w-7 h-7 text-white" />
                                            </div>
                                            <div className="text-right">
                                                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                                    {module.level}
                                                </span>
                                                <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                                                    <Clock className="w-3 h-3" />
                                                    {module.duration}
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                                            {module.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                            {module.description}
                                        </p>

                                        {/* Module Stats */}
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                            <div className="flex items-center gap-1">
                                                <BookOpen className="w-3 h-3" />
                                                {module.chapters} chapters
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Award className="w-3 h-3" />
                                                {module.badge}
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className="space-y-2 mb-6">
                                            {module.features.slice(0, 3).map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                                                    <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0" />
                                                    <span className="line-clamp-1">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3">
                                            <Link
                                                href={`/services/training/${module.id}`}
                                                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-full px-4 py-2 text-sm font-semibold"
                                            >
                                                Start Learning
                                                <PlayCircle className="w-4 h-4" />
                                            </Link>
                                            <button className="inline-flex items-center justify-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors rounded-full px-3 py-2 text-sm">
                                                <Download className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Learning Features */}
            <section className="py-16 lg:py-24 border-y border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Choose Interactive Learning?</h2>
                        <p className="text-lg text-muted-foreground">
                            Experience a new way of learning that adapts to your pace and style
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                                <PlayCircle className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Hands-On Practice</h3>
                            <p className="text-sm text-muted-foreground">
                                Learn by doing with interactive exercises and real-time feedback
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Earn Certificates</h3>
                            <p className="text-sm text-muted-foreground">
                                Receive downloadable badges and certificates upon completion
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-purple-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Expert Support</h3>
                            <p className="text-sm text-muted-foreground">
                                Get help from instructors and join a community of learners
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                                <Star className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Track Progress</h3>
                            <p className="text-sm text-muted-foreground">
                                Monitor your learning journey with detailed progress tracking
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 lg:py-24 bg-primary/5 border-y border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Ready to Start Your Learning Journey?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Join thousands of learners building practical digital skills with our interactive training modules.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="#modules"
                            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full px-8 py-4 font-semibold shadow-lg hover:shadow-primary/25"
                        >
                            Browse All Modules
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/book-consultation"
                            className="inline-flex items-center justify-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors rounded-full px-8 py-4 font-semibold"
                        >
                            Get Learning Advice
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}