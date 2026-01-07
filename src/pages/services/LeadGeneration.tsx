'use client'

import SEO from "@/components/SEO";
import { TrendingUp, CheckCircle2, Target, Users, BarChart3, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const LeadGenerationService = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <SEO title="Lead Generation & Performance Marketing - VMC Media" description="Fuel your sales team with qualified leads through our proven lead generation strategies." />      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Lead Generation</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Generate Quality{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Leads That Convert
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Drive sustainable business growth with qualified leads. Our performance marketing strategies deliver measurable results and maximize your ROI.
              </p>
              
              <button
                onClick={() => router.push('/contact')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start Generating Leads
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                alt="Lead Generation Analytics"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Complete Lead Generation Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to execution, we deliver leads that grow your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "B2B Lead Generation",
                description: "Targeted campaigns to reach decision-makers and generate high-value business leads."
              },
              {
                icon: Users,
                title: "B2C Lead Generation",
                description: "Consumer-focused strategies that drive conversions and build customer relationships."
              },
              {
                icon: TrendingUp,
                title: "Funnel Creation",
                description: "Optimized sales funnels that guide prospects from awareness to conversion."
              },
              {
                icon: BarChart3,
                title: "Marketing Automation",
                description: "Automated workflows that nurture leads and maximize conversion rates."
              },
              {
                icon: CheckCircle2,
                title: "CRM Integration",
                description: "Seamless integration with your CRM for efficient lead management and tracking."
              },
              {
                icon: Target,
                title: "Landing Page Optimization",
                description: "High-converting landing pages designed to capture and qualify leads."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Choose Our Lead Generation Services?
              </h2>
              <div className="space-y-4">
                {[
                  "Qualified leads that match your ideal customer profile",
                  "Performance-based approach with clear ROI",
                  "Multi-channel lead generation strategies",
                  "Real-time tracking and reporting",
                  "Dedicated account management",
                  "Scalable solutions that grow with your business"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Process</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Strategy Development", desc: "Define target audience and lead qualification criteria" },
                  { step: "02", title: "Campaign Launch", desc: "Multi-channel campaigns to attract quality prospects" },
                  { step: "03", title: "Lead Nurturing", desc: "Automated workflows to engage and qualify leads" },
                  { step: "04", title: "Optimization", desc: "Continuous improvement based on performance data" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-3xl font-bold text-primary/30">{item.step}</div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Scale Your Lead Generation?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create a custom strategy to fill your pipeline with qualified leads
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Free Strategy Session
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>    </div>
  );
};

export default LeadGenerationService;

