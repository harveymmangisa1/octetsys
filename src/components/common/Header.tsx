
'use client';

import React from 'react';
import Link from 'next/link';
import { Menu, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';
import { ModeToggle } from './ModeToggle';
import { Button } from '../ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/cyber-security", label: "Cyber Security" },
    { href: "/about", label: "About" },
    { href: "/book-consultation", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Octet Systems
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* You can add a search bar here if needed */}
          </div>
          <nav className="flex items-center">
             <ModeToggle />
            <Button 
                asChild 
                className="ml-2 hidden md:inline-flex"
                size="sm"
            >
              <Link href="/book-consultation">
                Book a Consultation <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden ml-2 p-2 rounded-lg hover:bg-accent transition-colors"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-14 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-y-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80">
            <div className="relative z-20 grid gap-2 rounded-lg border bg-popover p-4 text-popover-foreground shadow-md">
                <nav className="grid grid-flow-row auto-rows-max text-sm">
                 {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                    >
                        {link.label}
                    </Link>
                    ))}
                </nav>
                <div className="pt-4 border-t">
                    <Button asChild className="w-full">
                        <Link href="/book-consultation" onClick={() => setMobileMenuOpen(false)}>Book a Consultation</Link>
                    </Button>
                </div>
            </div>
        </div>
      )}
    </header>
  );
}
