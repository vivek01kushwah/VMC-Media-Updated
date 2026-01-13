'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function GoogleAdsPage() {
  const GoogleAdsComponent = require('@/pages/services/GoogleAds').default
  return (
    <div className="min-h-screen">
<Header />
<GoogleAdsComponent />
      <Footer />
    </div>
  )
}

