import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Portfolio - VMC Media',
  description: 'View our portfolio project details',
}

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const PortfolioDetailComponent = require('@/pages/PortfolioDetail').default
  return (
    <div className="min-h-screen">
      <Header />
      <PortfolioDetailComponent />
      <Footer />
    </div>
  )
}
