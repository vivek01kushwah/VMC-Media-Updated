import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

const blogSlugs = [
  "ai-powered-seo",
  "ai-digital-marketing-2025",
  "ai-content-optimization-seo",
]

export async function generateStaticParams() {
  return blogSlugs.map((slug) => ({
    slug: slug,
  }))
}

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
