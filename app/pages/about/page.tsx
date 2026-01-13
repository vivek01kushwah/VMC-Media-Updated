import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About VMC Media | Award-Winning Digital Marketing Agency',
  description: 'Meet VMC Media: 14+ years of digital marketing excellence. 150+ projects delivered, 95% client retention. We craft custom SEO and growth strategies for sustainable business success.',
  alternates: {
    canonical: 'https://vmcmedia.com/pages/about',
  },
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

