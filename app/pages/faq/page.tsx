import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'FAQ - VMC Media',
  description: 'Frequently asked questions about our services',
}

export default function FAQPage() {
  const FAQComponent = require('@/pages/info/FAQ').default
  return (
    <div className="min-h-screen">
<Header />
<FAQComponent />
      <Footer />
    </div>
  )
}

