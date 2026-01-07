import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Local SEO - VMC Media',
  description: 'Local SEO services to dominate your area',
}

export default function LocalSEOPage() {
  const LocalSEOComponent = require('@/pages/services/LocalSEO').default
  return (
    <div className="min-h-screen">
<Header />
<LocalSEOComponent />
      <Footer />
    </div>
  )
}

