import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Introduction</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>
                                At Octet Systems, we are committed to protecting your privacy and ensuring the security of your personal information.
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                                or use our services.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Information We Collect</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <h3 className="text-lg font-semibold mt-4">Personal Information</h3>
                            <p>We may collect personal information that you voluntarily provide to us when you:</p>
                            <ul>
                                <li>Contact us through our website</li>
                                <li>Request information about our services</li>
                                <li>Subscribe to our newsletter</li>
                                <li>Submit a cyber violence report</li>
                            </ul>

                            <h3 className="text-lg font-semibold mt-4">Automatically Collected Information</h3>
                            <p>When you visit our website, we may automatically collect certain information, including:</p>
                            <ul>
                                <li>IP address</li>
                                <li>Browser type and version</li>
                                <li>Pages visited and time spent on pages</li>
                                <li>Referring website addresses</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>How We Use Your Information</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>We use the information we collect to:</p>
                            <ul>
                                <li>Provide, operate, and maintain our services</li>
                                <li>Improve and personalize your experience</li>
                                <li>Respond to your inquiries and provide customer support</li>
                                <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                                <li>Analyze usage patterns and improve our website</li>
                                <li>Protect against fraudulent or illegal activity</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Data Security</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>
                                We implement appropriate technical and organizational security measures to protect your personal information
                                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
                                the Internet or electronic storage is 100% secure.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Cyber Violence Reports</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>
                                Reports submitted through our cyber violence reporting system are handled with strict confidentiality.
                                We collect only the information necessary to understand and address the reported incidents. Reports are
                                stored securely and access is limited to authorized personnel only.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Third-Party Services</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>
                                We may use third-party service providers to help us operate our website and deliver our services.
                                These providers have access to your personal information only to perform specific tasks on our behalf
                                and are obligated to protect your information.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Your Rights</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>You have the right to:</p>
                            <ul>
                                <li>Access the personal information we hold about you</li>
                                <li>Request correction of inaccurate information</li>
                                <li>Request deletion of your personal information</li>
                                <li>Object to processing of your personal information</li>
                                <li>Withdraw consent at any time</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Cookies</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>
                                We use cookies and similar tracking technologies to track activity on our website and store certain information.
                                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Changes to This Policy</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                                Privacy Policy on this page and updating the "Last Updated" date.
                            </p>
                            <p className="mt-4">
                                <strong>Last Updated:</strong> November 30, 2024
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Us</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>If you have any questions about this Privacy Policy, please contact us:</p>
                            <ul>
                                <li>Email: info@octetsystems.com</li>
                                <li>Phone: +265 999 77 11 55</li>
                                <li>Address: Malawi</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
