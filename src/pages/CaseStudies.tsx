'use client'

import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

const CaseStudies = () => {
  const router = useRouter();

  const caseStudies = [
    {
      id: 1,
      title: "E-commerce SEO Success Story",
      client: "Fashion Retail Brand",
      category: "SEO & Content Marketing",
      result: "+220% Organic Traffic",
      description: "Transformed organic visibility for a leading fashion brand through strategic SEO implementation and content optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      metrics: {
        traffic: "+220%",
        revenue: "+180%",
        keywords: "450+ #1 Rankings",
      },
      icon: TrendingUp,
      color: "bg-accent",
      slug: "ecommerce-seo",
    },
    {
      id: 2,
      title: "Real Estate Lead Generation",
      client: "Premium Property Agency",
      category: "Lead Generation & PPC",
      result: "450+ Qualified Leads",
      description: "Generated high-quality leads through targeted Google Ads campaigns and landing page optimization.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      metrics: {
        leads: "450+",
        conversion: "4.3%",
        costPerLead: "-65%",
      },
      icon: Target,
      color: "bg-secondary",
      slug: "real-estate-leads",
    },
    {
      id: 3,
      title: "Social Media Growth Campaign",
      client: "Lifestyle Brand",
      category: "Social Media Marketing",
      result: "+300% Follower Growth",
      description: "Built a thriving social media community with engaging content and influencer partnerships.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      metrics: {
        followers: "+300%",
        engagement: "+85%",
        reach: "2M+",
      },
      icon: Users,
      color: "bg-accent",
      slug: "lifestyle-social",
    },
    {
      id: 4,
      title: "Website Redesign & Conversion Optimization",
      client: "Corporate Business",
      category: "Web Development & CRO",
      result: "+40% Conversion Rate",
      description: "Revamped website design and user experience to significantly boost conversion rates.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      metrics: {
        conversion: "+40%",
        bounceRate: "-35%",
        pageSpeed: "95/100",
      },
      icon: Zap,
      color: "bg-secondary",
      slug: "corporate-website",
    },
    {
      id: 5,
      title: "SaaS Product Launch Campaign",
      client: "Tech Startup",
      category: "Full-Stack Digital Marketing",
      result: "1000+ Sign-ups in 30 Days",
      description: "Executed comprehensive launch campaign with SEO, PPC, and social media strategies.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      metrics: {
        signups: "1000+",
        cac: "$12",
        roi: "350%",
      },
      icon: TrendingUp,
      color: "bg-accent",
      slug: "saas-launch",
    },
    {
      id: 6,
      title: "Local SEO for Multi-location Business",
      client: "Restaurant Chain",
      category: "Local SEO & Maps Optimization",
      result: "+175% Local Search Visibility",
      description: "Dominated local search results across 15 locations with optimized Google Business profiles.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      metrics: {
        visibility: "+175%",
        calls: "+120%",
        footTraffic: "+45%",
      },
      icon: Target,
      color: "bg-secondary",
      slug: "local-seo",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Case Studies | VMC Media Success Stories"
        description="Explore our portfolio of successful digital marketing campaigns. Real results from real clients across various industries."
        canonical="/case-studies"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
              <span className="text-sm font-semibold text-accent">Our Work</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              Case Studies &{" "}
              <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Real results from real clients. Discover how we've helped businesses 
              across industries achieve remarkable growth through strategic digital marketing.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold text-foreground">250+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-4xl font-bold text-foreground">120+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-4xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={study.id}
                className="group overflow-hidden border-border bg-card/50 backdrop-blur-sm hover:shadow-premium-lg transition-all duration-500 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => router.push(`/portfolio/${study.slug}`)}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-muted">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      {study.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`absolute bottom-4 right-4 w-12 h-12 ${study.color} rounded-xl flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <study.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {study.client}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-3 pt-3 border-t border-border">
                    {Object.entries(study.metrics).map(([key, value]) => (
                      <div key={key} className="text-xs">
                        <span className="font-bold text-accent">{value}</span>
                        <span className="text-muted-foreground ml-1 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      </div>
                    ))}
                  </div>

                  {/* Result Badge */}
                  <div className="pt-3">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      <span className="text-sm font-semibold text-accent">{study.result}</span>
                    </div>
                  </div>

                  {/* View Details Link */}
                  <Button
                    variant="ghost"
                    className="w-full justify-between group/btn hover:bg-accent/5 rounded-xl"
                  >
                    <span className="font-semibold">View Full Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent via-secondary to-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative z-10 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-white/90">
            Let's discuss how we can help you achieve similar results
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-white text-accent hover:bg-white/90 shadow-lg hover:shadow-xl transition-all h-14 px-8 text-base font-semibold rounded-xl"
              onClick={() => router.push("/consultation")}
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-accent h-14 px-8 text-base font-semibold rounded-xl transition-all"
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>    </div>
  );
};

export default CaseStudies;

