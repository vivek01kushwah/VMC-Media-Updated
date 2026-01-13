import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Local SEO Services | Dominate Local Search Results | VMC Media',
  description: 'Dominate local search with expert Local SEO. Google My Business optimization, local citations, reviews, and hyperlocal targeting to attract nearby customers.',
  alternates: {
    canonical: 'https://vmcmedia.com/services/local-seo',
  },
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

