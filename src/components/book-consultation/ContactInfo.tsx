import { Mail, Phone, MapPin, Clock, MessageCircle, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const contactDetails = [
    {
        icon: Mail,
        title: "Email Us",
        content: "info@octetsystems.com",
        description: "Send us your inquiries and we'll respond within 24 hours",
        href: "mailto:info@octetsystems.com"
    },
    {
        icon: Phone,
        title: "Call Us",
        content: "+265 999 771 155",
        description: "Mon-Fri, 8:00 AM - 5:00 PM CAT",
        href: "tel:+265999771155"
    },
    {
        icon: MapPin,
        title: "Visit Our Office",
        content: "Area 48, Bingu National Stadium, Corporate Box E14, Lilongwe",
        description: "Schedule a visit to discuss your project in person"
    }
];

const businessInfo = [
    {
        icon: Clock,
        title: "Business Hours",
        details: [
            "Monday - Friday: 8:00 AM - 5:00 PM",
            "Saturday: 9:00 AM - 1:00 PM",
            "Sunday: Closed"
        ]
    },
    {
        icon: Users,
        title: "Support Channels",
        details: [
            "Enterprise Support: 24/7 Available",
            "General Inquiries: Business Hours",
            "Emergency Support: 24/7 Hotline"
        ]
    },
    {
        icon: MessageCircle,
        title: "Response Time",
        details: [
            "Initial Response: Within 24 hours",
            "Project Proposals: 2-3 business days",
            "Emergency Support: Within 2 hours"
        ]
    }
];

export function ContactInfo() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
            <span className="text-sm font-medium text-slate-700">Get In Touch</span>
          </div>
          <h2 className="text-4xl font-light text-slate-900 tracking-tight mb-6">
            Contact Information
            <span className="block font-semibold mt-2">Multiple Ways to Connect</span>
          </h2>
          <p className="text-lg text-slate-600 leading-8 font-light max-w-2xl">
            We're here to help you succeed. Choose the most convenient way to reach out, 
            and our team will assist you promptly.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {contactDetails.map((detail) => (
                <Card key={detail.title} className="border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
                    <CardContent className="p-8">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-100 rounded-2xl mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                            <detail.icon className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
                            {detail.title}
                        </h3>
                        {detail.href ? (
                            <Link 
                                href={detail.href}
                                className="block text-slate-600 hover:text-slate-900 transition-colors duration-200 mb-2 text-lg font-light leading-relaxed"
                            >
                                {detail.content}
                            </Link>
                        ) : (
                            <p className="text-slate-600 mb-2 text-lg font-light leading-relaxed">
                                {detail.content}
                            </p>
                        )}
                        <p className="text-slate-500 text-sm font-light leading-6">
                            {detail.description}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>

        {/* Business Information */}
        <div className="border-t border-slate-200 pt-20">
          <div className="max-w-3xl mb-12">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">
              Business Information
            </h3>
            <p className="text-slate-600 font-light">
              Our commitment to providing timely and professional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessInfo.map((info) => (
              <div key={info.title} className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900">
                    {info.title}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {info.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600 text-sm font-light leading-6">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Contact Note */}
        <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200">
          <div className="max-w-2xl">
            <h4 className="text-lg font-semibold text-slate-900 mb-3">
              Prefer a Direct Approach?
            </h4>
            <p className="text-slate-600 font-light mb-4">
              For urgent matters or to speak directly with our project managers, 
              call our main line during business hours. We're committed to providing 
              personalized attention to every client.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link 
                href="tel:+265999771155"
                className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-slate-700 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>+265 999 771 155</span>
              </Link>
              <span className="text-slate-400 hidden sm:block">•</span>
              <Link 
                href="mailto:info@octetsystems.com"
                className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-slate-700 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>info@octetsystems.com</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}