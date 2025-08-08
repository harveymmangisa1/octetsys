
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="font-semibold text-accent">About Octet Systems</p>
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl mt-2">
              Innovation, Reliability, and Education-First IT Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/80 max-w-xl mx-auto lg:mx-0">
              We are a team of passionate technologists dedicated to empowering businesses with cutting-edge IT solutions and a commitment to transparent, education-focused partnerships.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-accent to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src="https://placehold.co/600x400"
              alt="Our team collaborating in a modern office"
              data-ai-hint="diverse team meeting"
              width={600}
              height={400}
              className="relative rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

    