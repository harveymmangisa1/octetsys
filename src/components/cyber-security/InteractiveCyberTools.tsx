'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PasswordStrength } from './PasswordStrength';
import { PhishingDetector } from './PhishingDetector';
import { SecurityQuiz } from './SecurityQuiz';
import { Shield, Sparkles } from 'lucide-react';

export function InteractiveCyberTools() {
    const [activeTab, setActiveTab] = useState('password');

    return (
        <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-purple-200 mb-4">
                        <Sparkles className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-medium text-purple-900">
                            Interactive Learning
                        </span>
                    </div>

                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Cyber Security Training Tools
                    </h2>
                </div>

                {/* TABS START */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">

                    <TabsList className="mb-8 flex justify-center">
                        <TabsTrigger value="password">Password Strength</TabsTrigger>
                        <TabsTrigger value="phishing">Phishing Detector</TabsTrigger>
                        <TabsTrigger value="quiz">Security Quiz</TabsTrigger>
                    </TabsList>

                    {/* PASSWORD TAB */}
                    <TabsContent value="password">
                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-lg border shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Password Strength Checker</h3>
                                <p className="text-muted-foreground mb-4">
                                    Learn to create strong, secure passwords. Analyse your password in real time.
                                </p>
                            </div>
                            <PasswordStrength />
                        </div>
                    </TabsContent>

                    {/* PHISHING TAB */}
                    <TabsContent value="phishing" className="mt-0">
                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-lg border shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Phishing Email Detector</h3>
                                <p className="text-muted-foreground mb-4">
                                    Paste suspicious emails — our AI highlights red flags and explains the risks.
                                </p>
                            </div>
                            <PhishingDetector />
                        </div>
                    </TabsContent>

                    {/* QUIZ TAB */}
                    <TabsContent value="quiz" className="mt-0">
                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-lg border shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Cyber Security Knowledge Quiz</h3>
                                <p className="text-muted-foreground mb-4">
                                    Test your knowledge with interactive cyber security questions.
                                </p>
                            </div>
                            <SecurityQuiz />
                        </div>
                    </TabsContent>

                </Tabs>
                {/* TABS END */}

                {/* CTA */}
                <div className="mt-12 text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
                        <h3 className="text-2xl font-bold mb-3">Need Professional Cyber Security Services?</h3>
                        <p className="mb-6 opacity-90">
                            Our experts can help protect your business from cyber threats.
                        </p>
                        <a
                            href="/book-consultation"
                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                        >
                            Book a Free Consultation
                            <Shield className="h-5 w-5" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
