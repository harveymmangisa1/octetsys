'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { serviceData, IService, IPackage } from '@/lib/service-data';

interface ServiceDetailProps {
  service: IService;
}

function PackageCard({ pkg, isPopular }: { pkg: IPackage; isPopular: boolean }) {
  return (
    <Card className={`relative ${isPopular ? 'border-blue-200 shadow-lg scale-105' : ''}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
        </div>
      )}
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl">{pkg.name}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold">${pkg.price.toLocaleString()}</span>
          <span className="text-slate-500 ml-2">/{pkg.period}</span>
        </div>
        <CardDescription className="mt-2">{pkg.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-3 mb-6">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${feature.included ? 'text-green-600' : 'text-slate-300'}`} />
              <span className={`text-sm ${feature.included ? 'text-slate-700' : 'text-slate-400'}`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        <Button 
          className={`w-full ${isPopular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-900 hover:bg-slate-800'}`}
          size="lg"
        >
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-50 to-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-slate-100 rounded-xl">
                <service.icon className="h-8 w-8 text-slate-900" />
              </div>
              {service.badge && (
                <Badge variant="secondary" className="text-sm">{service.badge}</Badge>
              )}
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              {service.title}
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              {service.description}
            </p>

            {service.highlights && (
              <div className="flex flex-wrap gap-3">
                {service.highlights.map((highlight, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {highlight}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-12">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="packages">Packages</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="methodology">Methodology</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="prose prose-slate max-w-none">
                {service.content && (
                  <div dangerouslySetInnerHTML={{ __html: service.content }} />
                )}
                
                {service.overview && (
                  <div className="bg-slate-50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">Overview</h3>
                    <p className="text-lg text-slate-700 leading-relaxed">{service.overview}</p>
                  </div>
                )}

                {service.deliverables && (
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-6">Deliverables</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.deliverables.map((deliverable, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl">
                          <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-slate-700">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="packages" className="space-y-8">
              {service.packages && service.packages.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {service.packages.map((pkg, index) => (
                    <PackageCard 
                      key={index} 
                      pkg={pkg} 
                      isPopular={pkg.popular}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-slate-500 text-lg">Package information coming soon.</p>
                  <Button className="mt-4" asChild>
                    <Link href="/book-consultation">
                      Contact for Custom Pricing
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )}

              {service.pricing && (
                <div className="mt-12 bg-slate-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-6">Pricing Tiers</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.pricing.map((tier, index) => (
                      <div key={index} className="text-center p-6 bg-white rounded-xl border border-slate-200">
                        <h4 className="font-semibold text-slate-900 mb-2">{tier.tier}</h4>
                        <p className="text-slate-600 mb-2">{tier.summary}</p>
                        {tier.startingAt && (
                          <p className="text-blue-600 font-medium">{tier.startingAt}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="benefits" className="space-y-8">
              {service.benefits && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                      <Star className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Key Benefit</h4>
                        <p className="text-slate-700">{benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {service.outcomes && (
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-6">Expected Outcomes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service.outcomes.map((outcome, index) => (
                      <div key={index} className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                        <p className="text-blue-900 font-medium">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="methodology" className="space-y-8">
              {service.methodology && (
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-6">Our Approach</h3>
                  <div className="space-y-6">
                    {service.methodology.map((step, index) => (
                      <div key={index} className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 mb-2">Step {index + 1}</h4>
                          <p className="text-slate-700">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {service.complianceAlignment && (
                <div className="bg-slate-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-6">Compliance Alignment</h3>
                  <div className="flex flex-wrap gap-3">
                    {service.complianceAlignment.map((compliance, index) => (
                      <Badge key={index} variant="outline" className="text-sm px-4 py-2">
                        {compliance}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* FAQ Section */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="mt-16 pt-16 border-t border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {service.faqs.map((faq, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="font-semibold text-slate-900">{faq.q}</h4>
                    <p className="text-slate-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-slate-900 to-slate-800 p-12 rounded-3xl text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how {service.title} can help your organization achieve its goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/book-consultation">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900" asChild>
                <Link href="/quote">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}