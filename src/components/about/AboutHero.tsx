
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";

export function AboutHero() {
  return (
    <section className="bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">About Octet Systems</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
              Innovation, Reliability, and
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 mt-2">Education-First IT Services</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-xl mx-auto lg:mx-0 font-light">
              We are a team of passionate technologists dedicated to empowering businesses with cutting-edge IT solutions and a commitment to transparent, education-focused partnerships.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-2.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src={placeholderImages.about.hero.src}
              alt="Our team collaborating in a modern office"
              data-ai-hint={placeholderImages.about.hero.hint}
              width={600}
              height={400}
              className="relative rounded-2xl shadow-2xl border border-border/50 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
