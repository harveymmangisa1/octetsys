'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, CheckCircle2, Download, BookOpen, Award, AlertTriangle, Lock, Eye, Clock, ChevronRight, ChevronLeft, RefreshCw, Users, Smartphone, Mail, Key } from 'lucide-react';

interface Chapter {
    id: number;
    title: string;
    description: string;
    duration: string;
    completed: boolean;
    locked: boolean;
    topics: string[];
    scenarios: number;
}

const chapters: Chapter[] = [
    {
        id: 1,
        title: 'Understanding Online Threats',
        description: 'Learn to identify common online threats and how cybercriminals target users.',
        duration: '30 minutes',
        completed: false,
        locked: false,
        topics: ['Types of malware', 'Phishing attacks', 'Social engineering', 'Online scams'],
        scenarios: 4
    },
    {
        id: 2,
        title: 'Password Security Best Practices',
        description: 'Master the art of creating and managing strong, secure passwords.',
        duration: '45 minutes',
        completed: false,
        locked: false,
        topics: ['Creating strong passwords', 'Password managers', 'Two-factor authentication', 'Avoiding common mistakes'],
        scenarios: 6
    },
    {
        id: 3,
        title: 'Safe Social Media Usage',
        description: 'Protect your privacy and stay safe while using social media platforms.',
        duration: '40 minutes',
        completed: false,
        locked: false,
        topics: ['Privacy settings', 'Sharing personal info', 'Recognizing fake profiles', 'Cyberbullying prevention'],
        scenarios: 5
    },
    {
        id: 4,
        title: 'Email and Messaging Security',
        description: 'Learn to secure your communications and spot malicious messages.',
        duration: '35 minutes',
        completed: false,
        locked: false,
        topics: ['Email security', 'Spotting phishing', 'Safe attachments', 'Encrypted messaging'],
        scenarios: 5
    }
];

const scenarios = {
    1: [
        {
            title: "Suspicious Email",
            description: "You receive an email from your bank asking you to verify your account by clicking a link.",
            type: "phishing",
            correctAction: "Report as phishing and delete"
        },
        {
            title: "Pop-up Warning",
            description: "A pop-up says your computer is infected and you need to download antivirus software immediately.",
            type: "malware",
            correctAction: "Close pop-up and run legitimate antivirus scan"
        },
        {
            title: "Too Good to Be True",
            description: "You've won a lottery you never entered! They just need your bank details to transfer the prize.",
            type: "scam",
            correctAction: "Delete and block - it's a scam"
        },
        {
            title: "Urgent Request",
            description: "Your 'boss' sends a text asking you to buy gift cards for a client and send the codes immediately.",
            type: "social_engineering",
            correctAction: "Verify through official channels before taking action"
        }
    ],
    2: [
        {
            title: "Password Reuse",
            description: "Should you use the same password for multiple accounts?",
            type: "password_security",
            correctAction: "No - use unique passwords for each account"
        },
        {
            title: "Public WiFi",
            description: "You're at a coffee shop and need to check your bank account. What should you do?",
            type: "network_security",
            correctAction: "Use a VPN or wait until you're on a secure network"
        },
        {
            title: "Password Sharing",
            description: "Your coworker asks for your password to access a shared document.",
            type: "password_policy",
            correctAction: "Never share passwords - use proper sharing methods"
        },
        {
            title: "Security Questions",
            description: "Setting up security questions for account recovery.",
            type: "account_security",
            correctAction: "Use answers that aren't publicly discoverable"
        },
        {
            title: "Password Manager",
            description: "Is it safe to store all your passwords in a password manager?",
            type: "password_tools",
            correctAction: "Yes - reputable password managers are secure"
        },
        {
            title: "Two-Factor Authentication",
            description: "You receive an unexpected 2FA code on your phone.",
            type: "account_security",
            correctAction: "Don't use it - someone is trying to access your account"
        }
    ],
    3: [
        {
            title: "Friend Request",
            description: "A friend request from someone you don't know but they have mutual friends.",
            type: "social_media",
            correctAction: "Verify identity through other means before accepting"
        },
        {
            title: "Profile Information",
            description: "How much personal information should you share on your public profile?",
            type: "privacy",
            correctAction: "Limit to what's necessary and non-sensitive"
        },
        {
            title: "Photo Tags",
            description: "Someone tags you in an embarrassing photo at a party.",
            type: "digital_footprint",
            correctAction: "Untag yourself and ask them to remove it"
        },
        {
            title: "Location Sharing",
            description: "Should you share your real-time location on social media?",
            type: "safety",
            correctAction: "Avoid real-time location sharing for safety"
        },
        {
            title: "Cyberbullying",
            description: "You see someone being harassed online. What should you do?",
            type: "online_safety",
            correctAction: "Report the content and support the victim"
        }
    ],
    4: [
        {
            title: "Suspicious Attachment",
            description: "Email from unknown sender with 'Invoice.pdf' attachment.",
            type: "email_security",
            correctAction: "Delete without opening - it's likely malicious"
        },
        {
            title: "Urgent Transfer Request",
            description: "Email from CEO asking for urgent wire transfer to new client.",
            type: "business_email_compromise",
            correctAction: "Verify through phone call or in-person conversation"
        },
        {
            title: "Subscription Renewal",
            description: "Email saying your subscription will auto-renew unless you click to cancel.",
            type: "phishing",
            correctAction: "Log into your account directly to check status"
        },
        {
            title: "Encrypted Messaging",
            description: "When should you use encrypted messaging apps?",
            type: "communication_security",
            correctAction: "For sensitive or private conversations"
        },
        {
            title: "Public WiFi Email",
            description: "Checking work email on airport WiFi without VPN.",
            type: "network_security",
            correctAction: "Avoid - use VPN or mobile data instead"
        }
    ]
};

export default function SafeInternetHabitsModule() {
    const [currentChapter, setCurrentChapter] = useState(1);
    const [completedChapters, setCompletedChapters] = useState<number[]>([]);
    const [currentScenario, setCurrentScenario] = useState(0);
    const [showScenario, setShowScenario] = useState(false);
    const [userAnswer, setUserAnswer] = useState('');
    const [feedback, setFeedback] = useState<{ correct: boolean; message: string } | null>(null);

    const selectedChapter = chapters.find(ch => ch.id === currentChapter);
    const chapterScenarios = scenarios[currentChapter as keyof typeof scenarios] || [];

    const handleChapterComplete = () => {
        if (!completedChapters.includes(currentChapter)) {
            setCompletedChapters([...completedChapters, currentChapter]);
        }
    };

    const handleScenarioSubmit = () => {
        const scenario = chapterScenarios[currentScenario];
        const isCorrect = userAnswer.toLowerCase().includes(scenario.correctAction.toLowerCase().split(' ')[0]);
        
        setFeedback({
            correct: isCorrect,
            message: isCorrect 
                ? "Correct! You&apos;ve successfully identified the safe action." 
                : `Not quite. The best action would be: ${scenario.correctAction}`
        });

        setTimeout(() => {
            if (currentScenario < chapterScenarios.length - 1) {
                setCurrentScenario(currentScenario + 1);
                setUserAnswer('');
                setFeedback(null);
            } else {
                setShowScenario(false);
                setCurrentScenario(0);
            }
        }, 3000);
    };

    const progress = (completedChapters.length / chapters.length) * 100;

    return (
        <div className="flex flex-col min-h-dvh bg-background">
            {/* Breadcrumb */}
            <div className="border-b border-border bg-secondary/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/services/training" className="hover:text-primary transition-colors">Interactive Training</Link>
                    <span className="mx-2">/</span>
                    <span className="text-foreground font-medium">Safe Internet Habits</span>
                </div>
            </div>

            {/* Module Header */}
            <section className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                            <Shield className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">Safe Internet Habits</h1>
                            <p className="text-green-100">Master essential online safety practices</p>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="max-w-2xl">
                        <div className="flex items-center justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span>{completedChapters.length} of {chapters.length} chapters completed</span>
                        </div>
                        <div className="w-full bg-green-800/30 rounded-full h-3">
                            <div 
                                className="bg-white rounded-full h-3 transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Chapter Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-card border border-border rounded-2xl p-6 sticky top-8">
                            <h3 className="text-lg font-semibold text-foreground mb-4">Chapters</h3>
                            <div className="space-y-2">
                                {chapters.map((chapter) => (
                                    <button
                                        key={chapter.id}
                                        onClick={() => !chapter.locked && setCurrentChapter(chapter.id)}
                                        disabled={chapter.locked}
                                        className={`w-full text-left p-3 rounded-xl transition-all ${
                                            currentChapter === chapter.id
                                                ? 'bg-primary text-primary-foreground'
                                                : chapter.locked
                                                ? 'bg-muted/50 text-muted-foreground cursor-not-allowed'
                                                : completedChapters.includes(chapter.id)
                                                ? 'bg-green-50 border border-green-200 text-green-800 hover:bg-green-100'
                                                : 'bg-secondary/50 hover:bg-secondary text-foreground'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex-shrink-0">
                                                {chapter.locked ? (
                                                    <Lock className="w-4 h-4" />
                                                ) : completedChapters.includes(chapter.id) ? (
                                                    <CheckCircle2 className="w-4 h-4" />
                                                ) : (
                                                    <BookOpen className="w-4 h-4" />
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="font-medium text-sm">Chapter {chapter.id}</div>
                                                <div className="text-xs opacity-80 truncate">{chapter.title}</div>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {completedChapters.length === chapters.length && (
                                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                                    <div className="flex items-center gap-2 text-green-800 mb-2">
                                        <Award className="w-5 h-5" />
                                        <span className="font-semibold">Module Complete!</span>
                                    </div>
                                    <p className="text-sm text-green-700 mb-3">
                                        You&apos;ve earned your Digital Safety Certified badge
                                    </p>
                                    <button className="w-full bg-green-600 text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                                        <Download className="w-4 h-4" />
                                        Download Badge
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {selectedChapter && (
                            <div className="space-y-8">
                                {/* Chapter Header */}
                                <div className="bg-card border border-border rounded-2xl p-8">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <h2 className="text-2xl font-bold text-foreground mb-2">
                                                Chapter {selectedChapter.id}: {selectedChapter.title}
                                            </h2>
                                            <p className="text-muted-foreground mb-4">{selectedChapter.description}</p>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {selectedChapter.duration}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <AlertTriangle className="w-4 h-4" />
                                                    {selectedChapter.scenarios} scenarios
                                                </div>
                                            </div>
                                        </div>
                                        {completedChapters.includes(selectedChapter.id) && (
                                            <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4" />
                                                Completed
                                            </div>
                                        )}
                                    </div>

                                    {/* Topics */}
                                    <div className="mb-8">
                                        <h3 className="text-lg font-semibold text-foreground mb-4">What you'll learn</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {selectedChapter.topics.map((topic, index) => (
                                                <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                                                    <Shield className="w-4 h-4 text-green-600 flex-shrink-0" />
                                                    <span className="text-sm">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Interactive Scenarios */}
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-foreground">Real-World Scenarios</h3>
                                            <button
                                                onClick={() => setShowScenario(!showScenario)}
                                                className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
                                            >
                                                <Eye className="w-4 h-4" />
                                                {showScenario ? 'Hide' : 'Practice'} Scenarios
                                            </button>
                                        </div>

                                        {showScenario && currentScenario < chapterScenarios.length && (
                                            <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6">
                                                <div className="mb-4">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <AlertTriangle className="w-5 h-5 text-orange-600" />
                                                        <span className="text-sm font-semibold text-orange-800">
                                                            Scenario {currentScenario + 1} of {chapterScenarios.length}
                                                        </span>
                                                    </div>
                                                    <h4 className="text-lg font-semibold text-foreground mb-2">
                                                        {chapterScenarios[currentScenario].title}
                                                    </h4>
                                                    <p className="text-muted-foreground">
                                                        {chapterScenarios[currentScenario].description}
                                                    </p>
                                                </div>

                                                <div className="space-y-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-foreground mb-2">
                                                            What would you do in this situation?
                                                        </label>
                                                        <textarea
                                                            value={userAnswer}
                                                            onChange={(e) => setUserAnswer(e.target.value)}
                                                            className="w-full p-3 border border-border rounded-lg focus:border-green-500 focus:outline-none resize-none"
                                                            rows={3}
                                                            placeholder="Describe your response..."
                                                        />
                                                    </div>

                                                    {feedback && (
                                                        <div className={`p-4 rounded-lg ${feedback.correct ? 'bg-green-100 border border-green-200' : 'bg-red-100 border border-red-200'}`}>
                                                            <div className="flex items-center gap-2 mb-1">
                                                                {feedback.correct ? (
                                                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                                                ) : (
                                                                    <AlertTriangle className="w-5 h-5 text-red-600" />
                                                                )}
                                                                <span className={`font-semibold ${feedback.correct ? 'text-green-800' : 'text-red-800'}`}>
                                                                    {feedback.correct ? 'Correct!' : 'Not quite'}
                                                                </span>
                                                            </div>
                                                            <p className={`text-sm ${feedback.correct ? 'text-green-700' : 'text-red-700'}`}>
                                                                {feedback.message}
                                                            </p>
                                                        </div>
                                                    )}

                                                    <button
                                                        onClick={handleScenarioSubmit}
                                                        disabled={!userAnswer.trim()}
                                                        className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                                                    >
                                                        Submit Response
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {showScenario && currentScenario >= chapterScenarios.length && (
                                            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                                                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                                                <h4 className="text-lg font-semibold text-green-800 mb-2">
                                                    All Scenarios Complete!
                                                </h4>
                                                <p className="text-green-700 mb-4">
                                                    You&apos;ve successfully completed all scenarios for this chapter.
                                                </p>
                                                <button
                                                    onClick={() => {
                                                        setCurrentScenario(0);
                                                        setShowScenario(false);
                                                    }}
                                                    className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                                >
                                                    Start New Chapter
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Chapter Actions */}
                                <div className="bg-card border border-border rounded-2xl p-6">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button
                                            onClick={handleChapterComplete}
                                            disabled={completedChapters.includes(currentChapter)}
                                            className="flex-1 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            <CheckCircle2 className="w-5 h-5" />
                                            {completedChapters.includes(currentChapter) ? 'Chapter Completed' : 'Mark as Complete'}
                                        </button>
                                        
                                        {currentChapter < chapters.length && (
                                            <button
                                                onClick={() => setCurrentChapter(currentChapter + 1)}
                                                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                                            >
                                                Next Chapter
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                        )}
                                        
                                        {currentChapter > 1 && (
                                            <button
                                                onClick={() => setCurrentChapter(currentChapter - 1)}
                                                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                                Previous
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Study Further */}
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
                                    <div className="text-center">
                                        <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-foreground mb-2">Become a Security Expert</h3>
                                        <p className="text-muted-foreground mb-6">
                                            Complete this module and unlock advanced cybersecurity courses, threat hunting techniques, and professional certifications.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <button className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                                                <Award className="w-5 h-5" />
                                                Apply to Study Further
                                            </button>
                                            <Link 
                                                href="/services/training"
                                                className="px-6 py-3 bg-white text-green-600 border border-green-200 rounded-xl font-semibold hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
                                            >
                                                Browse More Modules
                                                <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}