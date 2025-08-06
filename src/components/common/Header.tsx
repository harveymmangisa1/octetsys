
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-7 w-7 text-primary" />
          <span className="font-headline font-bold text-xl text-foreground">
            Octet Systems
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
          <Link href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link>
          <Link href="#campaigns" className="text-muted-foreground hover:text-primary transition-colors">Campaigns</Link>
          <Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
        </nav>
        <nav className="flex items-center space-x-4">
          <Button asChild>
            <Link href="#consultation">Book a Consultation</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
