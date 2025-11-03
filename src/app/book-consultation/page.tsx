
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ConsultationHero } from "@/components/book-consultation/ConsultationHero";
import { BookingForm } from "@/components/book-consultation/BookingForm";

export default function BookConsultationPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <ConsultationHero />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
