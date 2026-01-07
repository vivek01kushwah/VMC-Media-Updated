import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

const portfolioSlugs = [
  "real-estate",
  "college-consultancy",
  "hospital",
  "ecommerce",
]

export async function generateStaticParams() {
  return portfolioSlugs.map((slug) => ({
    slug: slug,
  }))
}

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
