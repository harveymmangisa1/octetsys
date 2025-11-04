'use client';

import { ArrowLeft, Check, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { serviceData } from '@/lib/service-data';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { notFound, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = serviceData[slug as keyof typeof serviceData];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Header />
      <div className={`bg-gradient-to-br from-slate-900 to-slate-800 text-white`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center`}>
              <Icon className={`w-8 h-8 text-white`} />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold">{service.title}</h1>
              <p className="text-xl text-white/80 mt-2">{service.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Choose Your Package</h2>
          <p className="text-lg text-slate-600">Select the plan that fits your needs and budget</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl flex flex-col ${
                pkg.popular 
                  ? 'border-slate-900 shadow-xl lg:scale-105' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-slate-900 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <p className="text-slate-600 text-sm mb-4 min-h-[40px]">{pkg.description}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-slate-900">${pkg.price}</span>
                    {pkg.period && pkg.period !== 'one-time' && <span className="text-slate-500">/ {pkg.period.replace('per ','')}</span>}
                  </div>
                   {pkg.period === 'starting at' && <span className="text-xs text-slate-500">for basic setup</span>}
                   {pkg.period === 'one-time' && <span className="text-xs text-slate-500">one-time payment</span>}
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        feature.included ? 'bg-green-100' : 'bg-slate-100'
                      }`}>
                        {feature.included ? (
                          <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                        ) : (
                          <X className="w-3 h-3 text-slate-400" strokeWidth={3} />
                        )}
                      </div>
                      <span className={`text-sm ${
                        feature.included ? 'text-slate-700' : 'text-slate-500 line-through'
                      }`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className={`w-full py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center mt-auto ${
                    pkg.popular
                      ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  <Link
                    href={`/quote/${slug}?package=${encodeURIComponent(pkg.name)}`}
                  >
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Not sure which package is right for you?</h3>
          <p className="text-slate-600 mb-6">
            Our team is here to help you choose the perfect solution for your needs. Schedule a free consultation 
            to discuss your requirements and get a custom quote.
          </p>
          <Button asChild className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800 transition-all">
            <Link
              href={`/quote/${slug}`}
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
