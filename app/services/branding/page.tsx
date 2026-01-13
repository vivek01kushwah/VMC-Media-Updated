import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Branding & Design Services | Logo Design | Brand Identity | VMC Media',
  description: 'Professional branding and logo design services. Create a powerful brand identity with custom design, visual guidelines, and market positioning strategies.',
  alternates: {
    canonical: 'https://vmcmedia.com/services/branding',
  },
}

export default function BrandingPage() {
  const BrandingComponent = require('@/pages/services/Branding').default
  return (
    <div className="min-h-screen">
      <Header />
      <BrandingComponent />
      <Footer />
    </div>
  )
}

