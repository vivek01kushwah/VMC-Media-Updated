import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'SEO Services | Rank Higher on Google | VMC Media',
  description: 'Professional SEO services to increase organic traffic and rankings. Technical SEO, keyword research, link building, and content strategy optimized for long-term growth.',
  alternates: {
    canonical: 'https://vmcmedia.com/services/seo',
  },
}

export default function SEOPage() {
  const SEOComponent = require('@/pages/services/SEO').default
  return (
    <div className="min-h-screen">
      <Header />
      <SEOComponent />
      <Footer />
    </div>
  )
}

