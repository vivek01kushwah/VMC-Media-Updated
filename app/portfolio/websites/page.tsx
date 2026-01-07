
'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { motion } from "framer-motion"
import { Globe, Monitor, Smartphone, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const Websites = () => {
  const websites = [
    {
      id: 1,
      title: "E-Commerce Fashion Store",
      client: "StyleHub",
      category: "E-commerce",
      tech: ["Next.js", "Tailwind CSS", "Stripe"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      url: "#",
      features: ["Product catalog", "Shopping cart", "Payment integration", "Admin dashboard"]
    },
    {
      id: 2,
      title: "Corporate Business Website",
      client: "TechCorp Global",
      category: "Corporate",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      url: "#",
      features: ["Multi-language", "Blog system", "Contact forms", "SEO optimized"]
    },
    {
      id: 3,
      title: "Restaurant Booking Platform",
      client: "FoodieSpot",
      category: "Hospitality",
      tech: ["Vue.js", "Firebase", "Google Maps API"],
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
      url: "#",
      features: ["Online booking", "Menu display", "Reviews system", "Location finder"]
    },
    {
      id: 4,
      title: "Real Estate Listings",
      client: "HomeSeeker Pro",
      category: "Real Estate",
      tech: ["Angular", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      url: "#",
      features: ["Property search", "Virtual tours", "Agent portal", "Mortgage calculator"]
    },
    {
      id: 5,
      title: "Healthcare Portal",
      client: "MediCare Plus",
      category: "Healthcare",
      tech: ["React", "Express", "MySQL"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      url: "#",
      features: ["Appointment booking", "Patient records", "Doctor profiles", "Telemedicine"]
    },
    {
      id: 6,
      title: "Educational Learning Platform",
      client: "LearnHub Academy",
      category: "Education",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      url: "#",
      features: ["Course catalog", "Video streaming", "Quizzes", "Progress tracking"]
    }
  ]

  return (
    <>
      <Header />
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-semibold">Web Development</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Website Design <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Beautiful, responsive, and high-performing websites that deliver exceptional user experiences
          </p>
        </motion.div>

        {/* Websites Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websites.map((website, index) => (
            <motion.div
              key={website.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-background border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={website.image} 
                  alt={website.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="bg-background/90 backdrop-blur-sm p-2 rounded-lg">
                    <Monitor className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-background/90 backdrop-blur-sm p-2 rounded-lg">
                    <Smartphone className="w-4 h-4 text-accent" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {website.category}
                  </span>
                  <a href={website.url} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {website.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">Client: {website.client}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {website.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-1 mb-4">
                  {website.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                  View Website
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Websites