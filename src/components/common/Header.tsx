
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Logo className="h-7 w-7 text-primary" />
          <span className="font-headline font-bold text-xl text-foreground">
            Octet Systems
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
          <Link href="/#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link>
          <Link href="/cyber-security" className="text-primary hover:text-primary/80 transition-colors font-semibold">Cyber Security</Link>
          <Link href="/#campaigns" className="text-muted-foreground hover:text-primary transition-colors">Campaigns</Link>
          <Link href="/#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
        </nav>
        <div className="flex items-center gap-4 ml-auto">
          <Button asChild>
            <Link href="/#consultation">Book a Consultation</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 text-lg font-medium mt-8">
                <Link href="/" className="flex items-center gap-2 py-2 text-foreground">
                  <Logo className="h-7 w-7 text-primary" />
                  <span className="font-headline font-bold text-xl">Octet Systems</span>
                </Link>
                <Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
                <Link href="/#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link>
                <Link href="/cyber-security" className="text-primary hover:text-primary/80 transition-colors font-semibold">Cyber Security</Link>
                <Link href="/#campaigns" className="text-muted-foreground hover:text-primary transition-colors">Campaigns</Link>
                <Link href="/#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
