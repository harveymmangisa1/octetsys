
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';
import Logo from './Logo';
import { Button } from '../ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/cyber-security", label: "Cyber Security" },
    { href: "/flyer-maker", label: "Activism" },
    { href: "/about", label: "About" },
    { href: "/book-consultation", label: "Contact" }
  ];

  const isActiveLink = (href: string) => {
    if (href.includes('#')) {
        return false;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="flex items-center justify-center w-10 h-10 bg-slate-900 rounded-xl group-hover:bg-slate-800 transition-colors duration-200">
              <Logo className="h-6 w-6 text-white" />
            </div>
            <span className="font-semibold text-slate-900 text-lg tracking-tight">
              Octet Systems
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-white/70 shadow-sm ring-1 ring-slate-200/80 p-2 rounded-2xl backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActiveLink(link.href)
                    ? 'text-slate-900 bg-slate-100 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              asChild 
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 rounded-xl transition-all duration-200 group/btn shadow-md hover:shadow-lg"
              size="sm"
            >
              <Link href="/book-consultation" className="flex items-center">
                <span>Book Consultation</span>
                <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm ring-1 ring-slate-200/80"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-slate-700" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[calc(100%_+_0.5rem)] left-0 right-0 mx-4 sm:mx-6 animate-in slide-in-from-top-5 duration-300">
            <div className="bg-white/95 backdrop-blur-lg border border-slate-200 rounded-2xl shadow-xl p-4">
              <nav className="grid gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActiveLink(link.href)
                        ? 'text-slate-900 bg-slate-100'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </Link>
                ))}
              </nav>
              
              <div className="mt-4 pt-4 border-t border-slate-200">
                <Button 
                  asChild 
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl transition-all duration-200 shadow-sm"
                  size="lg"
                >
                  <Link 
                    href="/book-consultation" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center"
                  >
                    <span>Book Consultation</span>
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
