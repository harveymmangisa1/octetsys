
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-headline font-bold text-xl text-primary">
            Octet Insights
          </span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Button asChild>
            <Link href="#consultation">Book a Consultation</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
