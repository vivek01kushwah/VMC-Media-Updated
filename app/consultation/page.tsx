import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Consultation - VMC Media',
  description: 'Book a free consultation with our marketing experts',
}

export default function ConsultationPage() {
  const ConsultationComponent = require('@/pages/Consultation').default
  return (
    <div className="min-h-screen">
<Header />
<ConsultationComponent />
      <Footer />
    </div>
  )
}

