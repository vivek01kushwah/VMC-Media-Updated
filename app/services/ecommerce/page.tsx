import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'E-commerce Marketing - VMC Media',
  description: 'Specialized e-commerce marketing solutions',
}

export default function EcommercePage() {
  const EcommerceComponent = require('@/pages/services/EcommerceMarketing').default
  return (
    <div className="min-h-screen">
<Header />
<EcommerceComponent />
      <Footer />
    </div>
  )
}

