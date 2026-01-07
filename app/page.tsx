import dynamic from 'next/dynamic'
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"

// Lazy load below-the-fold components
const Services = dynamic(() => import("@/components/Services"), { ssr: false })
const About = dynamic(() => import("@/components/About"), { ssr: false })
const Stats = dynamic(() => import("@/components/Stats"), { ssr: false })
const Portfolio = dynamic(() => import("@/components/Portfolio"), { ssr: false })
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false })
const CTA = dynamic(() => import("@/components/CTA"), { ssr: false })

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
