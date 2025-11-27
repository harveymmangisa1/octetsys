'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Mail, Shield, ExternalLink, AlertCircle } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

interface PhishingIndicator {
    type: 'danger' | 'warning' | 'safe';
    message: string;
    severity: number;
}

export function PhishingDetector() {
    const [emailContent, setEmailContent] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [indicators, setIndicators] = useState<PhishingIndicator[]>([]);
    const [riskScore, setRiskScore] = useState(0);

    const analyzeEmail = () => {
        setIsAnalyzing(true);
        const foundIndicators: PhishingIndicator[] = [];
        let score = 0;

        // Check sender email
        if (senderEmail) {
            // Suspicious TLDs
            if (/\.(xyz|tk|ml|ga|cf|gq)$/i.test(senderEmail)) {
                foundIndicators.push({
                    type: 'danger',
                    message: 'Sender uses a suspicious domain extension often used in phishing',
                    severity: 30
                });
                score += 30;
            }

            // Misspelled domains
            const commonDomains = ['google', 'microsoft', 'amazon', 'paypal', 'apple', 'facebook'];
            const emailDomain = senderEmail.split('@')[1]?.toLowerCase() || '';
            commonDomains.forEach(domain => {
                if (emailDomain.includes(domain) && !emailDomain.endsWith(`${domain}.com`)) {
                    foundIndicators.push({
                        type: 'danger',
                        message: `Domain appears to mimic ${domain} but is not legitimate`,
                        severity: 40
                    });
                    score += 40;
                }
            });

            // Free email services for business
            if (/@(gmail|yahoo|hotmail|outlook)\.com$/i.test(senderEmail)) {
                foundIndicators.push({
                    type: 'warning',
                    message: 'Sender uses free email service (unusual for legitimate businesses)',
                    severity: 15
                });
                score += 15;
            }
        }

        // Check email content
        if (emailContent) {
            // Urgency keywords
            const urgencyKeywords = ['urgent', 'immediate action', 'act now', 'limited time', 'expires', 'suspended', 'verify now', 'confirm immediately'];
            urgencyKeywords.forEach(keyword => {
                if (new RegExp(keyword, 'i').test(emailContent)) {
                    foundIndicators.push({
                        type: 'warning',
                        message: `Contains urgency language: "${keyword}"`,
                        severity: 10
                    });
                    score += 10;
                }
            });

            // Suspicious links
            const urlMatches = emailContent.match(/https?:\/\/[^\s]+/gi) || [];
            urlMatches.forEach(url => {
                if (/bit\.ly|tinyurl|goo\.gl|ow\.ly/i.test(url)) {
                    foundIndicators.push({
                        type: 'warning',
                        message: 'Contains shortened URL (can hide malicious destination)',
                        severity: 20
                    });
                    score += 20;
                }

                if (/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(url)) {
                    foundIndicators.push({
                        type: 'danger',
                        message: 'Contains IP address instead of domain name',
                        severity: 35
                    });
                    score += 35;
                }
            });

            // Requests for sensitive info
            const sensitiveKeywords = ['password', 'social security', 'credit card', 'bank account', 'pin', 'ssn', 'cvv'];
            sensitiveKeywords.forEach(keyword => {
                if (new RegExp(keyword, 'i').test(emailContent)) {
                    foundIndicators.push({
                        type: 'danger',
                        message: `Requests sensitive information: "${keyword}"`,
                        severity: 40
                    });
                    score += 40;
                }
            });

            // Poor grammar/spelling
            const grammarIssues = ['kindly', 'dear customer', 'dear user', 'dear member'];
            grammarIssues.forEach(phrase => {
                if (new RegExp(phrase, 'i').test(emailContent)) {
                    foundIndicators.push({
                        type: 'warning',
                        message: `Generic greeting or unusual phrasing: "${phrase}"`,
                        severity: 10
                    });
                    score += 10;
                }
            });

            // Threats
            if (/account.*(suspend|close|terminate|lock)/i.test(emailContent)) {
                foundIndicators.push({
                    type: 'danger',
                    message: 'Contains threats about account suspension/closure',
                    severity: 30
                });
                score += 30;
            }

            // Prize/money offers
            if (/(won|winner|prize|lottery|inheritance|million)/i.test(emailContent)) {
                foundIndicators.push({
                    type: 'danger',
                    message: 'Contains unrealistic prize or money offers',
                    severity: 35
                });
                score += 35;
            }
        }

        // Add safe indicators if score is low
        if (score === 0) {
            foundIndicators.push({
                type: 'safe',
                message: 'No obvious phishing indicators detected',
                severity: 0
            });
        }

        setTimeout(() => {
            setIndicators(foundIndicators);
            setRiskScore(Math.min(score, 100));
            setIsAnalyzing(false);
        }, 1000);
    };

    const getRiskLevel = () => {
        if (riskScore >= 70) return { label: 'High Risk', color: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-200' };
        if (riskScore >= 40) return { label: 'Medium Risk', color: 'text-orange-600', bgColor: 'bg-orange-50', borderColor: 'border-orange-200' };
        if (riskScore > 0) return { label: 'Low Risk', color: 'text-yellow-600', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200' };
        return { label: 'Safe', color: 'text-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200' };
    };

    const riskLevel = getRiskLevel();

    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-50 rounded-lg border border-purple-100">
                        <Mail className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                        <CardTitle className="text-xl">Phishing Email Detector</CardTitle>
                        <CardDescription>
                            Analyze emails for common phishing indicators
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="space-y-3">
                    <div>
                        <label className="text-sm font-medium mb-2 block">Sender Email Address</label>
                        <input
                            type="email"
                            placeholder="sender@example.com"
                            value={senderEmail}
                            onChange={(e) => setSenderEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium mb-2 block">Email Content</label>
                        <Textarea
                            placeholder="Paste the email content here..."
                            value={emailContent}
                            onChange={(e) => setEmailContent(e.target.value)}
                            className="min-h-[150px] resize-none"
                        />
                    </div>

                    <Button
                        onClick={analyzeEmail}
                        disabled={isAnalyzing || (!emailContent && !senderEmail)}
                        className="w-full bg-purple-600 hover:bg-purple-700"
                    >
                        {isAnalyzing ? 'Analyzing...' : 'Analyze Email'}
                    </Button>
                </div>

                {indicators.length > 0 && (
                    <div className="space-y-4 animate-in fade-in-50">
                        {/* Risk Score */}
                        <div className={`p-4 rounded-lg border ${riskLevel.bgColor} ${riskLevel.borderColor}`}>
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    {riskScore >= 70 ? (
                                        <AlertTriangle className={`h-5 w-5 ${riskLevel.color}`} />
                                    ) : riskScore > 0 ? (
                                        <AlertCircle className={`h-5 w-5 ${riskLevel.color}`} />
                                    ) : (
                                        <CheckCircle className={`h-5 w-5 ${riskLevel.color}`} />
                                    )}
                                    <span className={`font-semibold ${riskLevel.color}`}>
                                        {riskLevel.label}
                                    </span>
                                </div>
                                <span className={`text-2xl font-bold ${riskLevel.color}`}>
                                    {riskScore}%
                                </span>
                            </div>
                            <Progress value={riskScore} className="h-2" />
                        </div>

                        {/* Indicators */}
                        <div className="space-y-2">
                            <h4 className="font-semibold text-sm">Detected Indicators:</h4>
                            {indicators.map((indicator, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start gap-3 p-3 rounded-lg border ${indicator.type === 'danger'
                                            ? 'bg-red-50 border-red-200'
                                            : indicator.type === 'warning'
                                                ? 'bg-yellow-50 border-yellow-200'
                                                : 'bg-green-50 border-green-200'
                                        }`}
                                >
                                    {indicator.type === 'danger' ? (
                                        <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                                    ) : indicator.type === 'warning' ? (
                                        <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                                    ) : (
                                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    )}
                                    <div className="flex-1">
                                        <p className="text-sm">{indicator.message}</p>
                                        {indicator.severity > 0 && (
                                            <Badge
                                                variant="outline"
                                                className={`mt-1 text-xs ${indicator.type === 'danger'
                                                        ? 'border-red-300 text-red-700'
                                                        : 'border-yellow-300 text-yellow-700'
                                                    }`}
                                            >
                                                +{indicator.severity} risk points
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Recommendations */}
                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <div className="flex items-start gap-2">
                                <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                                <div className="space-y-2">
                                    <p className="font-semibold text-sm text-blue-900">Safety Recommendations:</p>
                                    <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                                        {riskScore > 0 && (
                                            <>
                                                <li>Do not click any links in this email</li>
                                                <li>Do not provide any personal information</li>
                                                <li>Verify sender identity through official channels</li>
                                                <li>Report this email as phishing to your email provider</li>
                                            </>
                                        )}
                                        {riskScore === 0 && (
                                            <>
                                                <li>Always verify sender identity before responding</li>
                                                <li>Hover over links to check actual destination</li>
                                                <li>Be cautious of unexpected emails requesting action</li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {indicators.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                        <Mail className="h-12 w-12 mx-auto mb-3 opacity-50" />
                        <p className="text-sm">Enter email details above to begin analysis</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
