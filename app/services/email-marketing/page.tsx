import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Email Marketing - VMC Media',
  description: 'Email marketing automation and campaigns',
}

export default function EmailMarketingPage() {
  const EmailComponent = require('@/pages/services/EmailMarketing').default
  return (
    <div className="min-h-screen">
<Header />
<EmailComponent />
      <Footer />
    </div>
  )
}

