'use client'

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

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
                <Link href="/" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-primary-foreground/80 hover:text-white transition-colors text-left">
                  About Us
                </button>
              </li>
              <li>
                <Link href="/portfolio" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold mb-2">Services</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/services/seo" className="text-primary-foreground/80 hover:text-white transition-colors">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="/services/smm" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/google-ads" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Google Ads & PPC
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/lead-generation" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Lead Generation
                </Link>
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
              <button onClick={() => setShowTerms(true)} className="text-primary-foreground/60 hover:text-white transition-colors whitespace-nowrap">
                Terms and Conditions
              </button>
              <span className="text-primary-foreground/60">|</span>
              <button onClick={() => setShowPrivacy(true)} className="text-primary-foreground/60 hover:text-white transition-colors whitespace-nowrap">
                Privacy Policy
              </button>
            </div>
          </div>
        </div>

        {/* Terms Modal */}
        {showTerms && (
          <>
            <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowTerms(false)} />
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ overflow: 'hidden' }}>
              <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
                <div className="flex justify-between items-center p-6 border-b">
                  <h2 className="text-2xl font-bold text-gray-900">Terms and Conditions</h2>
                  <button onClick={() => setShowTerms(false)} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
              <div className="p-6 text-gray-700 space-y-4">
                <h3 className="font-semibold text-lg">1. Terms of Service</h3>
                <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
                
                <h3 className="font-semibold text-lg">2. Use License</h3>
                <p>Permission is granted to temporarily download one copy of the materials (information or software) on VMC Media's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>

                <h3 className="font-semibold text-lg">3. Disclaimer</h3>
                <p>The materials on VMC Media's website are provided "as is". VMC Media makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

                <h3 className="font-semibold text-lg">4. Limitations</h3>
                <p>In no event shall VMC Media or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on VMC Media's website.</p>

                <h3 className="font-semibold text-lg">5. Accuracy of Materials</h3>
                <p>The materials appearing on VMC Media's website could include technical, typographical, or photographic errors. VMC Media does not warrant that any of the materials on the website are accurate, complete, or current.</p>
              </div>
              </div>
            </div>
          </>
        )}

        {/* Privacy Policy Modal */}
        {showPrivacy && (
          <>
            <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowPrivacy(false)} />
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ overflow: 'hidden' }}>
              <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
                <div className="flex justify-between items-center p-6 border-b">
                  <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
                  <button onClick={() => setShowPrivacy(false)} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
              <div className="p-6 text-gray-700 space-y-4">
                <h3 className="font-semibold text-lg">1. Introduction</h3>
                <p>VMC Media ("we", "us", "our", or "Company") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.</p>

                <h3 className="font-semibold text-lg">2. Information Collection and Use</h3>
                <p>We collect several different types of information for various purposes to provide and improve our service to you:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Personal Data: Name, email address, phone number, cookies and usage data</li>
                  <li>Usage Data: Browser type, IP address, pages visited, time spent, referring URLs</li>
                  <li>Device Information: Device type, operating system, unique device identifiers</li>
                </ul>

                <h3 className="font-semibold text-lg">3. Use of Data</h3>
                <p>VMC Media uses the collected data for various purposes:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>To provide and maintain the service</li>
                  <li>To notify you about changes to our service</li>
                  <li>To allow you to participate in interactive features</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis and valuable information</li>
                  <li>To monitor the usage of our service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>

                <h3 className="font-semibold text-lg">4. Security of Data</h3>
                <p>The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

                <h3 className="font-semibold text-lg">5. Changes to This Privacy Policy</h3>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>

                <h3 className="font-semibold text-lg">6. Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, please contact us at Info@vmcmedia.in or call us at +91 9250592505.</p>
              </div>
              </div>
            </div>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;