import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Lead Generation - VMC Media',
  description: 'Professional lead generation and performance marketing',
}

export default function LeadGenerationPage() {
  const LeadGenComponent = require('@/pages/services/LeadGeneration').default
  return (
    <div className="min-h-screen">
<Header />
<LeadGenComponent />
      <Footer />
    </div>
  )
}

