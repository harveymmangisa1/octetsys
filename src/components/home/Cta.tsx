import { ArrowRight, CheckCircle2, Clock, Shield, Lightbulb } from 'lucide-react';
import Link from 'next/link';


export function Cta() {
  return (
    <section id="custom-solution-cta" className="relative py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Minimal badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/5 rounded-full">
              <Lightbulb className="w-4 h-4 text-slate-700" />
              <span className="text-sm font-medium text-slate-700">Custom Solutions</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900 tracking-tight leading-tight">
                Built for your
                <span className="block font-semibold mt-2">unique business needs</span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                We design and develop tailored technology solutions that seamlessly 
                integrate with your existing infrastructure and drive measurable results.
              </p>
            </div>

            {/* Clean feature list */}
            <div className="space-y-3 pt-4">
              {[
                'Comprehensive needs assessment',
                'Scalable architecture design',
                'Dedicated implementation support'
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="/book-consultation"
                className="group inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-slate-900/20"
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-medium hover:border-slate-900 hover:bg-slate-50 transition-all duration-300"
              >
                Schedule a Call
              </Link>
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="relative">
            <div className="grid gap-4">
              
              {/* Primary card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      24-Hour Response
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Our team commits to reviewing your inquiry and providing initial 
                      feedback within one business day.
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary cards grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:bg-white transition-colors duration-300">
                  <Shield className="w-8 h-8 text-slate-700 mb-3" />
                  <h4 className="font-semibold text-slate-900 mb-2">No Obligation</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Free consultation with expert guidance
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:bg-white transition-colors duration-300">
                  <Lightbulb className="w-8 h-8 text-slate-700 mb-3" />
                  <h4 className="font-semibold text-slate-900 mb-2">Custom Proposal</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tailored solutions for your requirements
                  </p>
                </div>
              </div>

              {/* Stats bar */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold mb-1">500+</div>
                    <div className="text-xs text-slate-300 font-medium">Projects Delivered</div>
                  </div>
                  <div className="border-x border-slate-700">
                    <div className="text-2xl font-bold mb-1">98%</div>
                    <div className="text-xs text-slate-300 font-medium">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-1">24/7</div>
                    <div className="text-xs text-slate-300 font-medium">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
