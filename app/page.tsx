import dynamic from 'next/dynamic'
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import { Metadata } from 'next'

// Lazy load components that use context hooks with loading fallback
const Header = dynamic(() => import("@/components/Header"), { 
  ssr: false,
  loading: () => <div className="h-20" /> 
})
const Services = dynamic(() => import("@/components/Services"), { 
  ssr: false,
  loading: () => <div className="h-96" /> 
})
const About = dynamic(() => import("@/components/About"), { 
  ssr: false,
  loading: () => <div className="h-96" /> 
})
const Stats = dynamic(() => import("@/components/Stats"), { 
  ssr: false,
  loading: () => <div className="h-64" /> 
})
const Portfolio = dynamic(() => import("@/components/Portfolio"), { 
  ssr: false,
  loading: () => <div className="h-96" /> 
})
const CTA = dynamic(() => import("@/components/CTA"), { 
  ssr: false,
  loading: () => <div className="h-80" /> 
})

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
