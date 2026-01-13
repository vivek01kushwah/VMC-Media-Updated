import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Digital Marketing & SEO Blog | VMC Media Insights',
  description: 'Discover proven digital marketing strategies, SEO trends, and AI-powered solutions. Expert insights on content optimization, PPC campaigns, and growth hacking from VMC Media.',
  alternates: {
    canonical: 'https://vmcmedia.com/blog',
  },
}

export default function BlogPage() {
  const BlogComponent = require('@/pages/Blog').default
  return (
    <div className="min-h-screen">
      <Header />
      <BlogComponent />
      <Footer />
    </div>
  )
}

