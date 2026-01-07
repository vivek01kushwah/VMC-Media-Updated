import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Careers - VMC Media',
  description: 'Join our team at VMC Media',
}

export default function CareersPage() {
  const CareersComponent = require('@/pages/info/Careers').default
  return (
    <div className="min-h-screen">
<Header />
<CareersComponent />
      <Footer />
    </div>
  )
}

