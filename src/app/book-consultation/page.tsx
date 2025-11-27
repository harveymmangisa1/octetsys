import { submitContactForm } from "@/app/actions";
import { ConsultationHero } from "@/components/book-consultation/ConsultationHero";
import { ContactInfo } from "@/components/book-consultation/ContactInfo";
import { BookingForm } from "@/components/book-consultation/BookingForm";

export default function BookConsultationPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <main className="flex-1">
        <ConsultationHero />
        <BookingForm formAction={submitContactForm} />
        <ContactInfo />
      </main>
    </div>
  );
}
