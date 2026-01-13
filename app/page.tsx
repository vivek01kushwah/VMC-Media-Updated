import dynamic from 'next/dynamic'
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import { Metadata } from 'next'

// Lazy load below-the-fold components
const Services = dynamic(() => import("@/components/Services"), { ssr: false })
const About = dynamic(() => import("@/components/About"), { ssr: false })
const Stats = dynamic(() => import("@/components/Stats"), { ssr: false })
const Portfolio = dynamic(() => import("@/components/Portfolio"), { ssr: false })
const CTA = dynamic(() => import("@/components/CTA"), { ssr: false })

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://vmcmedia.com',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Portfolio />
      <CTA />
      <Footer />
    </div>
  )
}
