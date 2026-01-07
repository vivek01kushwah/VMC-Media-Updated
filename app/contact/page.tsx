import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contact Us - VMC Media',
  description: 'Get in touch with our team',
}

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

