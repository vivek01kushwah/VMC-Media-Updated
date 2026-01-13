import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'E-commerce Marketing Services | Marketplace Optimization | VMC Media',
  description: 'Boost online sales with expert e-commerce marketing. Amazon SEO, marketplace optimization, product listing strategy, and conversion tactics for higher revenue.',
  alternates: {
    canonical: 'https://vmcmedia.com/services/ecommerce',
  },
}

export default function EcommercePage() {
  const EcommerceComponent = require('@/pages/services/EcommerceMarketing').default
  return (
    <div className="min-h-screen">
<Header />
<EcommerceComponent />
      <Footer />
    </div>
  )
}

