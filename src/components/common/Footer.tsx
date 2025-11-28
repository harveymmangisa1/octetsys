import { Twitter, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Logo from "./Logo"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-7xl">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">

          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-xl">
                <Logo className="h-6 w-6 text-primary" />
              </div>
              <span className="text-lg font-semibold text-foreground tracking-tight">Octet Systems</span>
            </div>
            <p className="text-muted-foreground leading-7 font-light max-w-xs">
              Enterprise-grade technology solutions including Cybersecurity, Networks,
              Software Development, and AI-driven digital transformation.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-foreground tracking-wide uppercase">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li className="hover:text-primary transition-colors duration-200 cursor-pointer">
                <Link href="/services/soc-services">Cybersecurity Consulting</Link>
              </li>
              <li className="hover:text-primary transition-colors duration-200 cursor-pointer">
                <Link href="/services/security-architecture">Networks & Infrastructure</Link>
              </li>
              <li className="hover:text-primary transition-colors duration-200 cursor-pointer">
                <Link href="/services/application-security">Software Security</Link>
              </li>
              <li className="hover:text-primary transition-colors duration-200 cursor-pointer">
                <Link href="/services/security-awareness-training">Security Training</Link>
              </li>
              <li className="hover:text-primary transition-colors duration-200 cursor-pointer">
                <Link href="/services/ai-security">AI Security</Link>
              </li>
              <li className="hover:text-primary transition-colors duration-200 cursor-pointer">
                <Link href="/services/managed-security-services">Managed Security Services</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-foreground tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li><Link href="/#services" className="hover:text-primary transition-colors duration-200">Our Services</Link></li>
              <li><Link href="/#portfolio" className="hover:text-primary transition-colors duration-200">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors duration-200">About Us</Link></li>
              <li><Link href="/cyber-security" className="hover:text-primary transition-colors duration-200">Cyber Security</Link></li>
              <li><Link href="/book-consultation" className="hover:text-primary transition-colors duration-200">Book Consultation</Link></li>
              <li><Link href="/news" className="hover:text-primary transition-colors duration-200">News</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors duration-200">Blog</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors duration-200">Events</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-foreground tracking-wide uppercase">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-light">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm leading-relaxed">Area 48, Bingu National Stadium, Corporate Box E14, Lilongwe</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <Link href="tel:+265999771155" className="hover:text-primary transition-colors duration-200">
                  +265 999 771 155
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <Link href="mailto:info@octetsystems.com" className="hover:text-primary transition-colors duration-200">
                  info@octetsystems.com
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground font-light">
            © {new Date().getFullYear()} Octet Systems — All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground font-light">
            <Link href="/privacy" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
