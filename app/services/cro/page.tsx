import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Conversion Rate Optimization - VMC Media',
  description: 'CRO services to maximize your conversions',
}

export default function CROPage() {
  const CROComponent = require('@/pages/services/CRO').default
  return (
    <div className="min-h-screen">
<Header />
<CROComponent />
      <Footer />
    </div>
  )
}

