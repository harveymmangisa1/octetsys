'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PasswordStrength } from './PasswordStrength';
import { PhishingDetector } from './PhishingDetector';
import { SecurityQuiz } from './SecurityQuiz';
import { DataBreachChecker } from './DataBreachChecker';
import { Shield, Mail, Brain, Sparkles, AlertTriangle } from 'lucide-react';

export function InteractiveCyberTools() {
    const [activeTab, setActiveTab] = useState('password');

    return (
        <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-purple-200 mb-4">
                        <Sparkles className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-medium text-purple-900">Interactive Learning</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Cyber Security Training Tools
                    </h2>
                                <p className="text-muted-foreground mb-4">
                                    Learn to create strong, secure passwords. Our tool analyzes your password in real-time
                                    and provides suggestions to make it stronger.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Real-time Analysis</span>
                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Smart Suggestions</span>
                                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Security Tips</span>
                                </div>
                            </div>
                            <PasswordStrength />
                        </div>
                    </TabsContent>

                    <TabsContent value="phishing" className="mt-0">
                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-lg border shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Phishing Email Detector</h3>
                                <p className="text-muted-foreground mb-4">
                                    Learn to identify phishing attempts. Paste suspicious emails and our AI-powered detector
                                    will highlight red flags and explain why they're dangerous.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Threat Detection</span>
                                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Risk Scoring</span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Safety Tips</span>
                                </div>
                            </div>
                            <PhishingDetector />
                        </div>
                    </TabsContent>

                    <TabsContent value="quiz" className="mt-0">
                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-lg border shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Cyber Security Knowledge Quiz</h3>
                                <p className="text-muted-foreground mb-4">
                                    Test your cyber security knowledge with our interactive quiz. Learn about passwords,
                                    phishing, malware, and best practices through engaging questions.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">10 Questions</span>
                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Instant Feedback</span>
                                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Learn & Practice</span>
                                </div>
                            </div>
                            <SecurityQuiz />
                        </div>
                    </TabsContent>
                </Tabs >

        {/* Call to Action */ }
        < div className = "mt-12 text-center" >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-3">Need Professional Cyber Security Services?</h3>
                <p className="mb-6 opacity-90">
                    Our team of experts can help protect your business from cyber threats
                </p>
                <a
                    href="/book-consultation"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                    Book a Free Consultation
                    <Shield className="h-5 w-5" />
                </a>
            </div>
                </div >
            </div >
        </section >
    );
}
