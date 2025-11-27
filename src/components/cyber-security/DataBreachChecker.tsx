'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Search, Shield, ExternalLink, Info } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

export function DataBreachChecker() {
    const [email, setEmail] = useState('');
    const [isChecking, setIsChecking] = useState(false);
    const [hasChecked, setHasChecked] = useState(false);
    const [breachCount, setBreachCount] = useState(0);

    // Simulated breach data (in production, this would call a real API like HaveIBeenPwned)
    const simulateBreachCheck = (emailToCheck: string) => {
        setIsChecking(true);
        setHasChecked(false);

        setTimeout(() => {
            // Simulate different results based on email patterns
            const hash = emailToCheck.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            const simulatedBreaches = hash % 5; // 0-4 breaches

            setBreachCount(simulatedBreaches);
            setHasChecked(true);
            setIsChecking(false);
        }, 1500);
    };

    const handleCheck = () => {
        if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            simulateBreachCheck(email);
        }
    };

    const commonBreaches = [
        { name: 'LinkedIn (2021)', accounts: '700M+', year: 2021 },
        { name: 'Facebook (2019)', accounts: '533M+', year: 2019 },
        { name: 'Yahoo (2013)', accounts: '3B+', year: 2013 },
        { name: 'Adobe (2013)', accounts: '153M+', year: 2013 },
    ];

    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-50 rounded-lg border border-orange-100">
                        <AlertTriangle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                        <CardTitle className="text-xl">Data Breach Checker</CardTitle>
                        <CardDescription>
                            Check if your email has been compromised in known data breaches
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                <Alert className="bg-blue-50 border-blue-200">
                    <Info className="h-4 w-4 text-blue-600" />
                    <AlertDescription className="text-sm text-blue-800">
                        <strong>Educational Demo:</strong> This is a simulated checker for demonstration purposes.
                        For real breach checking, use services like{' '}
                        <a href="https://haveibeenpwned.com" target="_blank" rel="noopener noreferrer" className="underline">
                            Have I Been Pwned
                        </a>.
                    </AlertDescription>
                </Alert>

                <div className="space-y-3">
                    <div className="flex gap-2">
                        <Input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleCheck()}
                            className="flex-1"
                        />
                        <Button
                            onClick={handleCheck}
                            disabled={isChecking || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
                            className="bg-orange-600 hover:bg-orange-700"
                        >
                            {isChecking ? (
                                <>Checking...</>
                            ) : (
                                <>
                                    <Search className="h-4 w-4 mr-2" />
                                    Check
                                </>
                            )}
                        </Button>
                    </div>

                    {hasChecked && (
                        <div className="space-y-4 animate-in fade-in-50">
                            {breachCount === 0 ? (
                                <div className="p-6 bg-green-50 border-2 border-green-200 rounded-lg text-center">
                                    <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
                                    <h3 className="text-lg font-semibold text-green-900 mb-2">
                                        Good News!
                                    </h3>
                                    <p className="text-green-800">
                                        This email hasn't been found in any known data breaches in our database.
                                    </p>
                                </div>
                            ) : (
                                <div className="p-6 bg-red-50 border-2 border-red-200 rounded-lg">
                                    <div className="flex items-start gap-3 mb-4">
                                        <AlertTriangle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-red-900 mb-2">
                                                Breach Alert!
                                            </h3>
                                            <p className="text-red-800 mb-3">
                                                This email was found in <strong>{breachCount}</strong> known data breach{breachCount > 1 ? 'es' : ''}.
                                            </p>
                                            <div className="space-y-2">
                                                <p className="text-sm font-semibold text-red-900">Immediate Actions:</p>
                                                <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
                                                    <li>Change passwords for all accounts using this email</li>
                                                    <li>Enable two-factor authentication (2FA)</li>
                                                    <li>Monitor accounts for suspicious activity</li>
                                                    <li>Consider using a password manager</li>
                                                    <li>Be alert for phishing attempts</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Security Recommendations */}
                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <div className="flex items-start gap-2">
                                    <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                                    <div className="space-y-2">
                                        <p className="font-semibold text-sm text-blue-900">Security Best Practices:</p>
                                        <ul className="text-sm text-blue-800 space-y-1">
                                            <li>✓ Use unique passwords for each account</li>
                                            <li>✓ Enable 2FA wherever possible</li>
                                            <li>✓ Regularly update passwords</li>
                                            <li>✓ Use a reputable password manager</li>
                                            <li>✓ Monitor your accounts regularly</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Common Breaches Info */}
                <div className="pt-4 border-t">
                    <h4 className="font-semibold text-sm mb-3">Notable Data Breaches:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {commonBreaches.map((breach) => (
                            <div key={breach.name} className="p-3 bg-gray-50 rounded-lg border">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="font-medium text-sm">{breach.name}</p>
                                        <p className="text-xs text-muted-foreground">{breach.accounts} accounts</p>
                                    </div>
                                    <Badge variant="outline" className="text-xs">
                                        {breach.year}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-3 text-center">
                        These are just a few examples. Thousands of breaches have occurred over the years.
                    </p>
                </div>

                {!hasChecked && (
                    <div className="text-center py-6 text-muted-foreground">
                        <Search className="h-12 w-12 mx-auto mb-3 opacity-50" />
                        <p className="text-sm">Enter an email address to check for data breaches</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
