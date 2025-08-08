
import Link from 'next/link';

export function Cta() {
  return (
    <section id="custom-solution-cta" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-900 to-teal-700 rounded-2xl p-12 text-center text-white">
                <h2 className="text-3xl font-bold mb-4 font-headline">Need a Custom Solution?</h2>
                <p className="text-xl mb-8 opacity-90">
                    Can't find exactly what you're looking for? We create tailored IT solutions 
                    that perfectly match your unique requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                    href="/contact"
                    className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                    Schedule Consultation
                    </Link>
                    <Link
                    href="/contact"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                    >
                    Contact Us
                    </Link>
                </div>
            </div>
      </div>
    </section>
  );
}

    