'use client'

import { useParams, useRouter } from "next/navigation";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Users, Target, Calendar } from "lucide-react";
import { motion } from "framer-motion";

// Portfolio data
const portfolioData = {
  "ecommerce-seo": {
    title: "SEO Success for E-commerce Brand",
    category: "SEO Optimization",
    client: "Fashion E-commerce Brand",
    duration: "6 Months",
    result: "+220% Organic Traffic",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    challenge: "The client was struggling with low organic visibility and high customer acquisition costs. Their website wasn't ranking for key product categories, and they were heavily dependent on paid advertising.",
    solution: "We implemented a comprehensive SEO strategy including technical optimization, content creation, and link building. We optimized product pages, created buying guides, and improved site architecture.",
    results: [
      { label: "Organic Traffic Increase", value: "+220%" },
      { label: "Keyword Rankings (Top 10)", value: "450+" },
      { label: "Organic Revenue Growth", value: "+185%" },
      { label: "Pages Indexed", value: "3,500+" },
    ],
    testimonial: {
      text: "VMC Media transformed our online presence. The increase in organic traffic has dramatically reduced our marketing costs.",
      author: "Priya Sharma",
      role: "Marketing Director",
    },
  },
  "real-estate-leads": {
    title: "Lead Generation for Real Estate Client",
    category: "Lead Generation",
    client: "Premium Real Estate Agency",
    duration: "4 Months",
    result: "450+ Qualified Leads",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop",
    challenge: "The client needed a consistent flow of high-quality leads for their luxury property listings. Their existing marketing was generating low-intent traffic.",
    solution: "We created targeted lead generation funnels with custom landing pages, implemented Google Ads campaigns for high-intent keywords, and set up retargeting campaigns.",
    results: [
      { label: "Qualified Leads Generated", value: "450+" },
      { label: "Conversion Rate", value: "4.3%" },
      { label: "Cost Per Lead Reduction", value: "-35%" },
      { label: "Sales Closed", value: "28" },
    ],
    testimonial: {
      text: "The lead quality from VMC Media's campaigns is outstanding. We've closed more deals in 4 months than the entire previous year.",
      author: "Rajesh Kumar",
      role: "CEO",
    },
  },
  "lifestyle-social": {
    title: "Social Media Growth for Lifestyle Brand",
    category: "Social Media Marketing",
    client: "Lifestyle & Wellness Brand",
    duration: "8 Months",
    result: "+300% Follower Growth",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop",
    challenge: "The brand had a small, inactive social media presence and needed to build a community to support product launches.",
    solution: "We developed a comprehensive social media strategy with creative campaigns, influencer partnerships, and engaging content that resonated with the target audience.",
    results: [
      { label: "Follower Growth", value: "+300%" },
      { label: "Engagement Rate", value: "8.5%" },
      { label: "User-Generated Content", value: "2,000+" },
      { label: "Campaign Reach", value: "2.5M+" },
    ],
    testimonial: {
      text: "Our social media presence has completely transformed. The campaigns VMC Media created went viral and brought us thousands of engaged followers.",
      author: "Amit Patel",
      role: "Founder",
    },
  },
  "corporate-website": {
    title: "Website Revamp for Corporate Business",
    category: "Web Development",
    client: "B2B Technology Company",
    duration: "3 Months",
    result: "+40% Conversion Rate",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop",
    challenge: "The client's outdated website had poor user experience, high bounce rates, and wasn't generating leads effectively.",
    solution: "We redesigned the entire website with a modern UI/UX, optimized conversion paths, improved page speed, and implemented strategic CTAs throughout the site.",
    results: [
      { label: "Conversion Rate Increase", value: "+40%" },
      { label: "Bounce Rate Reduction", value: "-55%" },
      { label: "Page Load Time", value: "-70%" },
      { label: "Mobile Traffic Growth", value: "+125%" },
    ],
    testimonial: {
      text: "The new website is stunning and performs incredibly well. Our lead generation has increased significantly since the launch.",
      author: "Neha Singh",
      role: "Marketing Manager",
    },
  },
};

type PortfolioKey = keyof typeof portfolioData;

const PortfolioDetail = () => {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const slug = params?.slug;
  
  const project = slug ? portfolioData[slug as PortfolioKey] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => router.push("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${project.title} | VMC Media Portfolio`}
        description={project.challenge}
        canonical={`/portfolio/${slug}`}
      />      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-hero-gradient">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="ghost"
              onClick={() => router.push("/")}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="max-w-4xl">
              <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {project.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap gap-8 text-muted-foreground">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Client</p>
                  <p>{project.client}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Duration</p>
                  <p>{project.duration}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Key Result</p>
                  <p className="text-accent font-bold">{project.result}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto">
            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <Target className="w-12 h-12 text-secondary mb-4" />
                    <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.challenge}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <TrendingUp className="w-12 h-12 text-accent mb-4" />
                    <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.solution}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Results Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-center mb-8">The Results</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {project.results.map((result, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <p className="text-4xl font-bold text-accent mb-2">{result.value}</p>
                      <p className="text-sm text-muted-foreground">{result.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-primary to-accent text-white">
                <CardContent className="p-8">
                  <Users className="w-12 h-12 mb-4 opacity-80" />
                  <p className="text-xl mb-6 leading-relaxed">"{project.testimonial.text}"</p>
                  <div>
                    <p className="font-bold">{project.testimonial.author}</p>
                    <p className="text-white/80">{project.testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-12 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                Ready to Achieve Similar Results?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how VMC Media can help transform your business.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90"
                onClick={() => router.push("/contact")}
              >
                Get Free Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>    </div>
  );
};

export default PortfolioDetail;

