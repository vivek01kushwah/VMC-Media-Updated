'use client'

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

// Mock NavLink component for demonstration
const NavLink = ({ to, children, className }: any) => (
  <a href={to} className={className}>{children}</a>
);

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold">VMC Media</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-3">
              VMC Media Pvt. Ltd. is a Noida based digital agency specialising in local SEO, marketplace growth, WhatsApp lead funnels, and performance marketing for Indian brands.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <NavLink to="/" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-primary-foreground/80 hover:text-white transition-colors text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-primary-foreground/80 hover:text-white transition-colors text-left">
                  Services
                </button>
              </li>
              <li>
                <NavLink to="/blog" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold mb-2">Services</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-primary-foreground/80 hover:text-white transition-colors text-left">
                  SEO Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-primary-foreground/80 hover:text-white transition-colors text-left">
                  Social Media Marketing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-primary-foreground/80 hover:text-white transition-colors text-left">
                  Google Ads & PPC
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-primary-foreground/80 hover:text-white transition-colors text-left">
                  Website Development
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-primary-foreground/80 hover:text-white transition-colors text-left">
                  Lead Generation
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold mb-2">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  VMC Media Pvt. Ltd.<br />701,7th Floor, logix city centre, Sector-32, Noida-201301
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-primary-foreground/80 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="mailto:hello@vmcmedia.in" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Info@vmcmedia.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-white transition-colors">
                  https://wa.me/9250592505
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            {/* Copyright */}
            <p className="text-primary-foreground/60 text-xs text-center">
              © 2025 All rights reserved by{" "}
              <a
                href="https://nighwantech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground hover:underline"
              >
                Nighwan Technology
              </a>.
            </p>

            {/* Policy Links */}
            <div className="flex gap-3 text-xs">
              <NavLink to="/terms-of-service" className="text-primary-foreground/60 hover:text-white transition-colors whitespace-nowrap">
                Terms and Conditions
              </NavLink>
              <span className="text-primary-foreground/60">|</span>
              <NavLink to="/privacy-policy" className="text-primary-foreground/60 hover:text-white transition-colors whitespace-nowrap">
                Privacy Policy
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;