import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Case Studies - VMC Media',
  description: 'Our successful projects and client stories',
}

export default function CaseStudiesPage() {
  const CaseStudiesComponent = require('@/pages/CaseStudies').default
  return (
    <div className="min-h-screen">
      <Header />
      <CaseStudiesComponent />
      <Footer />
    </div>
  )
}