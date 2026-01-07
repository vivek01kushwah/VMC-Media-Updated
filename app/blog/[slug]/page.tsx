import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Blog Post - VMC Media',
  description: 'Read our latest insights on digital marketing',
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const BlogDetailComponent = require('@/pages/BlogDetail').default
  return (
    <div className="min-h-screen">
      <Header />
      <BlogDetailComponent />
      <Footer />
    </div>
  )
}
