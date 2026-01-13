import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Google Ads & PPC Services | Maximize Your ROI | VMC Media',
  description: 'Performance-driven Google Ads and PPC campaigns. Expert management of search ads, YouTube ads, and display campaigns with proven ROI optimization strategies.',
  alternates: {
    canonical: 'https://vmcmedia.com/services/google-ads',
  },
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

