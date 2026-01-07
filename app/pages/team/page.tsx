import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Our Team - VMC Media',
  description: 'Meet the talented team behind VMC Media',
}

export default function TeamPage() {
  const TeamComponent = require('@/pages/info/Team').default
  return (
    <div className="min-h-screen">
<Header />
<TeamComponent />
      <Footer />
    </div>
  )
}

