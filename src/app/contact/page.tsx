
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

    