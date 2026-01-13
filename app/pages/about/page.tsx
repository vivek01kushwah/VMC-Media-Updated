'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function AboutPage() {
  const AboutComponent = require('@/pages/info/About').default
  return (
    <div className="min-h-screen">
<Header />
<AboutComponent />
      <Footer />
    </div>
  )
}

