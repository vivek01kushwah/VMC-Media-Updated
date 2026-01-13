'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

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

