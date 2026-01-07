import { motion } from "framer-motion"
import { Briefcase, Calendar, ExternalLink } from "lucide-react"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      client: "TechStore Inc",
      category: "Web Development",
      date: "2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: "Complete redesign and development of an e-commerce platform with improved UX and conversion rates.",
      results: ["45% increase in sales", "60% faster load times", "35% better mobile experience"]
    },
    {
      id: 2,
      title: "Brand Identity & Website",
      client: "GreenLeaf Organic",
      category: "Branding & Web",
      date: "2024",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      description: "Full brand identity creation and responsive website development for organic food company.",
      results: ["Brand recognition up 80%", "3x social engagement", "50+ new partnerships"]
    },
    {
      id: 3,
      title: "Mobile App Development",
      client: "FitLife Pro",
      category: "App Development",
      date: "2023",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      description: "Native mobile app for fitness tracking and personal training.",
      results: ["50K+ downloads", "4.8 star rating", "30% user retention"]
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
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Work</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Completed <span className="text-accent">Projects</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of successfully delivered projects across various industries
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-background border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-accent">{project.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{project.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-1">Client: {project.client}</p>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                  View Details <ExternalLink className="w-4 h-4 ml-2" />
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

export default Projects