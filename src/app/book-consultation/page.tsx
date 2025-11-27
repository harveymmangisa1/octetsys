import { submitContactForm } from "@/app/actions";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ConsultationHero } from "@/components/book-consultation/ConsultationHero";
import { ContactInfo } from "@/components/book-consultation/ContactInfo";
import { BookingForm } from "@/components/book-consultation/BookingForm";

export default function BookConsultationPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <ConsultationHero />
        <BookingForm formAction={submitContactForm} />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
}
