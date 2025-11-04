import { CheckCircle2, Clock, MessageCircle } from "lucide-react";

export function ConsultationHero() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-8">
            <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
            <span className="text-sm font-medium text-slate-700">Get Started</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-5xl font-light text-slate-900 tracking-tight mb-6">
            Book Your
            <span className="block font-semibold mt-2">Consultation</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-600 leading-8 max-w-2xl font-light">
            Schedule a free, no-obligation consultation with our IT experts to discuss 
            your challenges and discover how Octet Systems can drive your success.
          </p>

          {/* Benefits Grid */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-1">Expert Assessment</h4>
                  <p className="text-slate-600 text-sm font-light">Comprehensive analysis of your technology needs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Clock className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-1">Quick Response</h4>
                  <p className="text-slate-600 text-sm font-light">We'll get back to you within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <MessageCircle className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-1">No Obligation</h4>
                  <p className="text-slate-600 text-sm font-light">Free initial consultation with transparent advice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}