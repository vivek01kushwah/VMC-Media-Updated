import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contact VMC Media | Free Digital Marketing Consultation',
  description: 'Ready to boost your online presence? Contact VMC Media for a free consultation. Get expert advice on SEO, paid ads, and custom marketing strategies tailored to your goals.',
  alternates: {
    canonical: 'https://vmcmedia.com/contact',
  },
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

