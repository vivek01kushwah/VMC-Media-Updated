import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Google Ads & PPC - VMC Media',
  description: 'Professional Google Ads and PPC campaign management',
}

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

