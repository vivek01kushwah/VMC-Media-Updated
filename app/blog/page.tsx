import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Blog - VMC Media',
  description: 'Latest insights on SEO, marketing, and digital strategies',
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

