import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Agreement to Terms</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>
                                By accessing and using the Octet Systems website and services, you agree to be bound by these Terms of Service.
                                If you do not agree to these terms, please do not use our services.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Services Description</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>Octet Systems provides:</p>
                            <ul>
                                <li>Cybersecurity consulting and managed services</li>
                                <li>Web development and design services</li>
                                <li>Network infrastructure solutions</li>
                                <li>IT support and maintenance</li>
                                <li>Cyber violence reporting platform</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>User Responsibilities</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>When using our services, you agree to:</p>
                            <ul>
                                <li>Provide accurate and complete information</li>
                                <li>Maintain the confidentiality of your account credentials</li>
                                <li>Use our services in compliance with all applicable laws</li>
                                <li>Not engage in any activity that could harm our systems or other users</li>
                                <li>Not use our services for any illegal or unauthorized purpose</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Intellectual Property</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>
                                All content on this website, including text, graphics, logos, images, and software, is the property of
                                Octet Systems or its content suppliers and is protected by international copyright laws. You may not
                                reproduce, distribute, or create derivative works without our express written permission.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Service Availability</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>
                                We strive to provide uninterrupted access to our services, but we do not guarantee that our services
                                will be available at all times. We may suspend or discontinue services for maintenance, updates, or
                                other reasons without prior notice.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Limitation of Liability</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>
                                To the fullest extent permitted by law, Octet Systems shall not be liable for any indirect, incidental,
                                special, consequential, or punitive damages resulting from your use of or inability to use our services.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Cyber Violence Reporting</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>
                                Our cyber violence reporting platform is provided as a community service. While we take all reports
                                seriously and handle them with confidentiality, we cannot guarantee specific outcomes or actions.
                                For immediate safety concerns, please contact local authorities.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Confidentiality</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>
                                We maintain strict confidentiality regarding client information and project details. Any information
                                shared with us during the course of providing services will be protected according to our Privacy Policy
                                and applicable data protection laws.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Payment Terms</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>
                                Payment terms for services will be outlined in individual service agreements. Unless otherwise specified,
                                payment is due upon completion of services or according to the payment schedule agreed upon in writing.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Termination</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>
                                We reserve the right to terminate or suspend access to our services immediately, without prior notice,
                                for any reason, including breach of these Terms of Service.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Modifications to Terms</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>
                                We reserve the right to modify these terms at any time. We will notify users of any material changes
                                by posting the new Terms of Service on this page. Your continued use of our services after such
                                modifications constitutes acceptance of the updated terms.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Governing Law</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>
                                These Terms of Service shall be governed by and construed in accordance with the laws of Malawi,
                                without regard to its conflict of law provisions.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Dispute Resolution</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>
                                Any disputes arising from these terms or your use of our services shall be resolved through good faith
                                negotiation. If a resolution cannot be reached, disputes may be submitted to mediation or arbitration
                                as mutually agreed upon.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-slate max-w-none">
                            <p>If you have any questions about these Terms of Service, please contact us:</p>
                            <ul>
                                <li>Email: info@octetsystems.com</li>
                                <li>Phone: +265 999 77 11 55</li>
                                <li>Address: Malawi</li>
                            </ul>
                            <p className="mt-4">
                                <strong>Last Updated:</strong> November 30, 2024
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
