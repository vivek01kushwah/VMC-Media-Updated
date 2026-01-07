import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Influencer Marketing - VMC Media',
  description: 'Connect with influencers to grow your brand',
}

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

