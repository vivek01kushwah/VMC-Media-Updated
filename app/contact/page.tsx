'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ContactPage() {
  const ContactComponent = require('@/pages/Contact').default
  return (
    <div className="min-h-screen">
<Header />
<Header />
      <ContactComponent />
      <Footer />
    </div>
  )
}

