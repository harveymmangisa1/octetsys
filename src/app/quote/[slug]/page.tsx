'use client';

import { useState } from 'react';
import { useSearchParams, notFound, useRouter, useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { serviceData } from '@/lib/service-data.ts';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Button } from '@/components/ui/button';

export default function QuoteRequestPage() {
  const params = useParams();
  const slug = params.slug as string;
  const searchParams = useSearchParams();
  const router = useRouter();
  const packageName = searchParams.get('package');

  const service = serviceData[slug as keyof typeof serviceData];
  const selectedPackage = service?.packages.find(p => p.name === packageName);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);


  if (!service) {
    notFound();
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({
      service: service.title,
      package: selectedPackage?.name,
      ...formData
    });
    setSubmitted(true);
  };

  if(submitted) {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-slate-50">
            <Header />
            <div className="flex-grow flex items-center justify-center">
                 <div className="text-center max-w-2xl mx-auto p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6">
                        <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h1 className="text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
                        Quote Request Sent!
                    </h1>
                    <p className="text-lg text-slate-600 leading-8 mb-8 font-light">
                        Thank you, {formData.name}. We've received your request for the <strong>{service.title}{selectedPackage && ` - ${selectedPackage.name}`}</strong> package. Our team will review your requirements and get back to you at <strong>{formData.email}</strong> within 24 hours.
                    </p>
                    <Button onClick={() => router.push('/#services')} variant="outline">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Services
                    </Button>
                </div>
            </div>
            <Footer />
        </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Header />
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Packages</span>
          </Button>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8">
              <h2 className="text-3xl font-bold mb-2">Request a Quote</h2>
              <p className="text-white/80">
                {service.title}
                {selectedPackage && ` - ${selectedPackage.name} Package`}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              {selectedPackage && (
                <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Selected Package: {selectedPackage.name}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-bold text-slate-900">${selectedPackage.price}</span>
                    <span className="text-slate-600">{selectedPackage.period}</span>
                  </div>
                  <p className="text-sm text-slate-600">{selectedPackage.description}</p>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      placeholder="+265..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    placeholder="Your Company Ltd"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent resize-none"
                    placeholder="Tell us more about your project needs..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-medium hover:bg-slate-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Submit Quote Request</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>

                <p className="text-sm text-slate-500 text-center">
                  We'll review your request and get back to you within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}