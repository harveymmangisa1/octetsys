
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";

export function AboutHero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
                <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                <span className="text-sm font-medium text-slate-700">About Octet Systems</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 tracking-tight leading-tight">
              Innovation, Reliability, and
              <span className="block font-semibold mt-2">Education-First IT Services</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl mx-auto lg:mx-0 font-light">
              We are a team of passionate technologists dedicated to empowering businesses with cutting-edge IT solutions and a commitment to transparent, education-focused partnerships.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-2.5 bg-gradient-to-r from-slate-200 to-slate-300 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src={placeholderImages.about.hero.src}
              alt="Our team collaborating in a modern office"
              data-ai-hint={placeholderImages.about.hero.hint}
              width={600}
              height={400}
              className="relative rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
