import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Social Media Marketing | Instagram, Facebook, LinkedIn | VMC Media',
  description: 'Build brand authority with strategic social media marketing. Influencer partnerships, content creation, and community management across Instagram, Facebook, YouTube, and LinkedIn.',
  alternates: {
    canonical: 'https://vmcmedia.com/services/smm',
  },
}

export default function SMMPage() {
  const SMMComponent = require('@/pages/services/SMM').default
  return (
    <div className="min-h-screen">
      <Header />
      <SMMComponent />
      <Footer />
    </div>
  )
}

