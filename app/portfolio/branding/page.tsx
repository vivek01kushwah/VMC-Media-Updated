
'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { motion } from "framer-motion"
import { PenTool, Palette, Sparkles } from "lucide-react"

const Branding = () => {
  const brandingProjects = [
    {
      id: 1,
      title: "GreenLeaf Organic",
      category: "Food & Beverage",
      services: ["Logo Design", "Brand Identity", "Packaging Design"],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
      colors: ["#2D5016", "#7CB342", "#FFF8DC"]
    },
    {
      id: 2,
      title: "TechFlow Solutions",
      category: "Technology",
      services: ["Logo Design", "Brand Guidelines", "Web Design"],
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      colors: ["#1A237E", "#00BCD4", "#FFFFFF"]
    },
    {
      id: 3,
      title: "Luxe Fashion House",
      category: "Fashion",
      services: ["Brand Identity", "Visual Design", "Marketing Collateral"],
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
      colors: ["#000000", "#D4AF37", "#FFFFFF"]
    },
    {
      id: 4,
      title: "HealthPlus Clinic",
      category: "Healthcare",
      services: ["Logo Design", "Brand Identity", "Signage Design"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      colors: ["#01579B", "#4FC3F7", "#E3F2FD"]
    },
    {
      id: 5,
      title: "Urban Coffee Co.",
      category: "Hospitality",
      services: ["Brand Identity", "Packaging", "Interior Design"],
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
      colors: ["#3E2723", "#FF6F00", "#FFF3E0"]
    },
    {
      id: 6,
      title: "EcoHome Builders",
      category: "Real Estate",
      services: ["Logo Design", "Brand Strategy", "Marketing Materials"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      colors: ["#1B5E20", "#66BB6A", "#F1F8E9"]
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
            <PenTool className="w-4 h-4" />
            <span className="text-sm font-semibold">Branding & Design</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Branding <span className="text-accent">Portfolio</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Creating memorable brand identities that resonate with audiences and drive business growth
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandingProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-background border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Palette className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold text-accent">{project.category}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  {project.services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Sparkles className="w-3 h-3 text-accent" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  <span className="text-xs font-semibold text-muted-foreground">Colors:</span>
                  <div className="flex gap-2">
                    {project.colors.map((color, idx) => (
                      <div 
                        key={idx}
                        className="w-6 h-6 rounded-full border-2 border-background shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
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

export default Branding