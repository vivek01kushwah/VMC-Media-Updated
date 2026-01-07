import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Pricing - VMC Media',
  description: 'Transparent pricing for our services',
}

export default function PricingPage() {
  const PricingComponent = require('@/pages/info/Pricing').default
  return (
    <div className="min-h-screen">
<Header />
<PricingComponent />
      <Footer />
    </div>
  )
}

