import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Social Media Marketing - VMC Media',
  description: 'Expert social media marketing services',
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

