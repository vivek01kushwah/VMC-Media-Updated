import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'SEO Services - VMC Media',
  description: 'Professional SEO services to boost your rankings',
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

