import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Testimonials from "@/components/Testimonials"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Testimonials - VMC Media',
  description: 'See what our clients say about us',
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
<Header />
<section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
            <p className="text-xl text-muted-foreground">What our clients say about working with us</p>
<Header />
</div>
          <Testimonials />
        </div>
      </section>
<Footer />
</div>
  )
}

