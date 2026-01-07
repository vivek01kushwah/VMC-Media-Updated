import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Branding Services - VMC Media',
  description: 'Professional branding and design services',
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

