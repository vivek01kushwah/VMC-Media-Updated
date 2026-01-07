import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Case Studies - VMC Media',
  description: 'Detailed case studies of our work',
}

export default function PortfolioCaseStudiesPage() {
  const CaseStudiesComponent = require('@/pages/portfolio/CaseStudies').default
  return (
    <div className="min-h-screen">
      <Header />
      <CaseStudiesComponent />
      <Footer />
    </div>
  )
}