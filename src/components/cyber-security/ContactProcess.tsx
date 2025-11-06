
import Image from 'next/image';
import { ShieldCheck, AlertTriangle, LifeBuoy, Phone } from 'lucide-react';

export function ContactProcess() {
  return (
    <section id="contact-process" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="prose prose-lg text-slate-600">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 rounded-full mb-6">
              <Phone className="w-4 h-4 text-slate-700" />
              <span className="text-sm font-medium text-slate-700">Incident Response Protocol</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Your Direct Line to Security Expertise</h2>
            <p>
              A clear contact and incident reporting process is the first line of defense in a cybersecurity event. It ensures that potential threats are communicated to the right people swiftly, enabling a rapid and effective response.
            </p>
            
            <h3 className="font-semibold text-slate-800 mt-8">Why a Formal Process is Critical</h3>
            <p>
              Without a defined protocol, chaos can ensue. Delays in reporting can lead to greater damage, loss of critical evidence, and a breakdown in trust. A structured process minimizes confusion and ensures every incident is tracked and resolved.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <span><strong>Rapid Response:</strong> Immediately engage our experts to contain the threat.</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
                <span><strong>Risk Mitigation:</strong> Minimize the impact of a breach on your operations and reputation.</span>
              </li>
              <li className="flex items-start">
                <LifeBuoy className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                <span><strong>Guided Recovery:</strong> Receive step-by-step guidance to restore systems and data safely.</span>
              </li>
            </ul>

            <h3 className="font-semibold text-slate-800 mt-8">How Octet Helps</h3>
            <p>
              We provide a streamlined incident reporting system through our client portal and dedicated hotline. When an incident is reported, our SOC team immediately analyzes the situation, provides actionable guidance, and coordinates the response effort, keeping you informed every step of the way.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src="/placeholder-images/contact-process.jpg"
              alt="Cybersecurity contact process"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
