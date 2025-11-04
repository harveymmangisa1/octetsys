import { Twitter, Linkedin, Facebook, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Logo } from "./Logo"

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-24">
      <div className="container mx-auto px-6 lg:px-12 py-20 max-w-7xl">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-slate-900 rounded-xl">
                <Logo className="h-6 w-6 text-white" />
              </div>
              <span className="text-lg font-semibold text-slate-900 tracking-tight">Octet Systems</span>
            </div>
            <p className="text-slate-600 leading-7 font-light max-w-xs">
              Enterprise-grade technology solutions including Cybersecurity, Networks, 
              Software Development, and AI-driven digital transformation.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <Link 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all duration-200"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all duration-200"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="text-sm font-semibold text-slate-900 tracking-wide uppercase">Services</h4>
            <ul className="space-y-3 text-sm text-slate-600 font-light">
              <li className="hover:text-slate-900 transition-colors duration-200 cursor-pointer">
                Cybersecurity Consulting
              </li>
              <li className="hover:text-slate-900 transition-colors duration-200 cursor-pointer">
                Networks & Infrastructure
              </li>
              <li className="hover:text-slate-900 transition-colors duration-200 cursor-pointer">
                Software Development
              </li>
              <li className="hover:text-slate-900 transition-colors duration-200 cursor-pointer">
                IT Training & Consultancy
              </li>
              <li className="hover:text-slate-900 transition-colors duration-200 cursor-pointer">
                AI Solutions
              </li>
              <li className="hover:text-slate-900 transition-colors duration-200 cursor-pointer">
                Systems Support
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="text-sm font-semibold text-slate-900 tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-600 font-light">
              <li className="hover:text-slate-900 transition-colors duration-200 cursor-pointer">
                <Link href="/#services">Our Services</Link>
              </li>
              <li className="hover:text-slate-900 transition-colors duration-200 cursor-pointer">
                <Link href="/#portfolio">Portfolio</Link>
              </li>
              <li className="hover:text-slate-900 transition-colors duration-200 cursor-pointer">
                <Link href="/about">About Us</Link>
              </li>
              <li className="hover:text-slate-900 transition-colors duration-200 cursor-pointer">
                <Link href="/cyber-security">Cyber Security</Link>
              </li>
              <li className="hover:text-slate-900 transition-colors duration-200 cursor-pointer">
                <Link href="/book-consultation">Book Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="text-sm font-semibold text-slate-900 tracking-wide uppercase">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-600 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <span>Area 48, Bingu National Stadium, Corporate Box E14, Lilongwe</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-slate-400 flex-shrink-0" />
                <Link href="tel:+265999771155" className="hover:text-slate-900 transition-colors duration-200">
                  +265 999 771 155
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-slate-400 flex-shrink-0" />
                <Link href="mailto:info@octetsystems.com" className="hover:text-slate-900 transition-colors duration-200">
                  info@octetsystems.com
                </Link>
              </li>
            </ul>

            {/* CTA Button */}
            <Link 
              href="/book-consultation"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-slate-800 transition-all duration-300 mt-6 group"
            >
              <span>Get Started</span>
              <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500 font-light">
            © {new Date().getFullYear()} Octet Systems — All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-500 font-light">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}