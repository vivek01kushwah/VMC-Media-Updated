'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function EcommercePage() {
  const EcommerceComponent = require('@/pages/services/EcommerceMarketing').default
  return (
    <div className="min-h-screen">
<Header />
<EcommerceComponent />
      <Footer />
    </div>
  )
}

