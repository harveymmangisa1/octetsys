'use client';
import {
  ShieldCheck,
  Network,
  Headset,
  GraduationCap,
  Code,
  FileCode,
  Camera,
  BrainCircuit,
  ArrowRight,
  Check,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import placeholderImages from '@/lib/placeholder-images.json';

const services = [
  {
    id: 'networking',
    title: 'Networking & Infrastructure',
    description:
      'Complete network design, implementation, and management for businesses of all sizes.',
    icon: Network,
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-100',
    features: [
      'Network Design & Planning',
      'Hardware Installation',
      'Security Configuration',
      '24/7 Monitoring',
    ],
    image: placeholderImages.services[0],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Consulting',
    description:
      'Protect your digital assets with our expert security assessments and threat mitigation.',
    icon: ShieldCheck,
    iconColor: 'text-red-600',
    bgColor: 'bg-red-100',
    features: [
      'Security Audits',
      'Threat Assessment',
      'Employee Training',
      'Incident Response',
    ],
    image: placeholderImages.services[1],
  },
  {
    id: 'support',
    title: 'System Support',
    description:
      'Reliable remote and on-site support to keep your systems running smoothly.',
    icon: Headset,
    iconColor: 'text-green-600',
    bgColor: 'bg-green-100',
    features: [
      'Remote Troubleshooting',
      'On-site Support',
      'System Maintenance',
      'Emergency Response',
    ],
    image: placeholderImages.services[2],
  },
  {
    id: 'training',
    title: 'IT Training',
    description:
      'Empower your team with practical training on the latest software and technologies.',
    icon: GraduationCap,
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-100',
    features: [
      'Microsoft Office Suite',
      'AI for Productivity',
      'Cybersecurity Basics',
      'Custom Corporate Training',
    ],
    image: placeholderImages.services[3],
  },
  {
    id: 'development',
    title: 'Web & Mobile Development',
    description:
      'Custom web and mobile applications designed to meet your unique business needs.',
    icon: Code,
    iconColor: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    features: [
      'Web Applications',
      'Mobile Apps',
      'E-commerce Solutions',
      'API Development',
    ],
    image: placeholderImages.services[4],
  },
  {
    id: 'software',
    title: 'Software Development',
    description:
      'Bespoke software solutions to streamline your operations and drive growth.',
    icon: FileCode,
    iconColor: 'text-teal-600',
    bgColor: 'bg-teal-100',
    features: [
      'Custom Software',
      'System Integration',
      'Database Solutions',
      'Cloud Applications',
    ],
    image: placeholderImages.services[5],
  },
  {
    id: 'cctv',
    title: 'CCTV & Biometrics',
    description:
      'Advanced surveillance and access control systems for enhanced security.',
    icon: Camera,
    iconColor: 'text-orange-600',
    bgColor: 'bg-orange-100',
    features: [
      'CCTV Installation',
      'Biometric Access Control',
      'System Monitoring',
      'Maintenance & Support',
    ],
    image: placeholderImages.services[6],
  },
  {
    id: 'ai-awareness',
    title: 'AI Awareness & Training',
    description:
      'Navigate the world of AI with our expert-led awareness campaigns and hands-on training.',
    icon: BrainCircuit,
    iconColor: 'text-pink-600',
    bgColor: 'bg-pink-100',
    features: [
      'AI Fundamentals',
      'Business Applications',
      'Implementation Strategy',
      'Ethics & Safety',
    ],
    image: placeholderImages.services[7],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
            <span className="text-sm font-medium text-slate-700">What We Offer</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Comprehensive IT solutions
            <span className="block font-semibold mt-2">for modern businesses</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            From infrastructure to innovation, we deliver technology services that
            drive growth and secure your digital future.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={service.id} className="group">
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
              >
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 ${service.bgColor} rounded-2xl`}
                  >
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-slate-700 text-sm font-medium leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4">
                    <Link
                      href="/#consultation"
                      className="inline-flex items-center justify-center bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-md group/btn"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                    <Link
                      href="/#consultation"
                      className="inline-flex items-center justify-center border-2 border-slate-200 text-slate-900 px-6 py-3 rounded-xl text-sm font-medium hover:border-slate-900 hover:bg-slate-50 transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>

                <div
                  className={`lg:col-span-7 ${
                    index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative overflow-hidden rounded-3xl">
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      <Image
                        src={service.image.src}
                        alt={service.title}
                        data-ai-hint={service.image.hint}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-900 opacity-5"></div>
                    </div>
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-slate-200">
                        <span className="text-sm font-semibold text-slate-900">
                          Professional Service
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {index < services.length - 1 && (
                <div className="mt-20 border-t border-slate-100"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
