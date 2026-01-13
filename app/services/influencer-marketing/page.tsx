import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Influencer Marketing Services | Brand Collaborations | VMC Media',
  description: 'Scale your brand with strategic influencer marketing. Connect with relevant influencers, authentic partnerships, and measurable campaign results.',
  alternates: {
    canonical: 'https://vmcmedia.com/services/influencer-marketing',
  },
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

