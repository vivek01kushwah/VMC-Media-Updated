'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function InfluencerMarketingPage() {
  const InfluencerComponent = require('@/pages/services/InfluencerMarketing').default
  return (
    <div className="min-h-screen">
<Header />
<InfluencerComponent />
      <Footer />
    </div>
  )
}

