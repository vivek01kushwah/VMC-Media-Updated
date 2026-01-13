import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Conversion Rate Optimization | CRO Services | VMC Media',
  description: 'Maximize conversions with data-driven CRO. A/B testing, user behavior analysis, and checkout optimization to increase sales and revenue.',
  alternates: {
    canonical: 'https://vmcmedia.com/services/cro',
  },
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

