
'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { motion } from "framer-motion"
import { Award, TrendingUp, Users, Quote } from "lucide-react"

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      company: "TechStartup Solutions",
      industry: "SaaS",
      challenge: "Low brand visibility and poor lead generation",
      solution: "Comprehensive digital marketing strategy with SEO, content marketing, and PPC campaigns",
      results: {
        metric1: "300% increase in organic traffic",
        metric2: "150+ qualified leads per month",
        metric3: "$2M revenue growth in 12 months"
      },
      testimonial: "VMC Media transformed our online presence. Their strategic approach and execution exceeded all expectations.",
      person: "Sarah Johnson",
      position: "CEO, TechStartup Solutions",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      company: "EcoShop Retail",
      industry: "E-commerce",
      challenge: "High cart abandonment rate and low conversion",
      solution: "Website optimization, email marketing automation, and retargeting campaigns",
      results: {
        metric1: "45% reduction in cart abandonment",
        metric2: "85% increase in conversion rate",
        metric3: "4x ROI on ad spend"
      },
      testimonial: "The results speak for themselves. VMC Media's expertise in e-commerce marketing is unmatched.",
      person: "Michael Chen",
      position: "Founder, EcoShop Retail",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      company: "FitnessPro Gyms",
      industry: "Fitness",
      challenge: "Struggling to compete with larger gym chains",
      solution: "Local SEO, social media marketing, and community engagement campaigns",
      results: {
        metric1: "200% increase in local searches",
        metric2: "500+ new memberships in 6 months",
        metric3: "#1 ranking for local fitness keywords"
      },
      testimonial: "VMC Media helped us stand out in a crowded market. Our gyms are now thriving!",
      person: "David Martinez",
      position: "Owner, FitnessPro Gyms",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
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
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4" />
            <span className="text-sm font-semibold">Success Stories</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-secondary">Success Stories</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from real businesses. See how we've helped our clients achieve their goals.
          </p>
        </motion.div>

        {/* Stories */}
        <div className="space-y-12">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-5 gap-6 p-8">
                {/* Left Content */}
                <div className="md:col-span-3 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{story.company}</h3>
                    <p className="text-secondary font-semibold">{story.industry}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase mb-2">Challenge</h4>
                    <p className="text-foreground">{story.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase mb-2">Solution</h4>
                    <p className="text-foreground">{story.solution}</p>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-muted/50 p-6 rounded-xl relative">
                    <Quote className="w-8 h-8 text-accent/20 absolute top-4 left-4" />
                    <p className="text-foreground italic mb-4 pl-8">{story.testimonial}</p>
                    <div className="flex items-center gap-4">
                      <img 
                        src={story.image} 
                        alt={story.person}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">{story.person}</p>
                        <p className="text-sm text-muted-foreground">{story.position}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Results */}
                <div className="md:col-span-2">
                  <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-xl p-6 h-full flex flex-col justify-center">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase mb-6 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Key Results
                    </h4>
                    <div className="space-y-6">
                      <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg">
                        <p className="text-2xl font-bold text-accent mb-1">{story.results.metric1.split(' ')[0]}</p>
                        <p className="text-sm text-foreground">{story.results.metric1.split(' ').slice(1).join(' ')}</p>
                      </div>
                      <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg">
                        <p className="text-2xl font-bold text-secondary mb-1">{story.results.metric2.split(' ')[0]}</p>
                        <p className="text-sm text-foreground">{story.results.metric2.split(' ').slice(1).join(' ')}</p>
                      </div>
                      <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg">
                        <p className="text-2xl font-bold text-primary mb-1">{story.results.metric3.split(' ')[0]}</p>
                        <p className="text-sm text-foreground">{story.results.metric3.split(' ').slice(1).join(' ')}</p>
                      </div>
                    </div>
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

export default SuccessStories