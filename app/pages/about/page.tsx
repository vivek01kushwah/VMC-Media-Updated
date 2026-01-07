import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About Us - VMC Media',
  description: 'Learn more about VMC Media and our mission',
}

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

