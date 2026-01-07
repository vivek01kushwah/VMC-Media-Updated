'use client'

import SEO from "@/components/SEO";
import { Mail, CheckCircle2, TrendingUp, Users, BarChart3, ArrowRight, Star, Zap, Target, Heart } from "lucide-react";
import { useRouter } from "next/navigation";

const EmailMarketingService = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <SEO title="Email Marketing & Automation Services - VMC Media" description="Build lasting customer relationships with strategic email marketing campaigns and marketing automation." />      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Email Marketing</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Email Marketing &{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Automation
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Build lasting customer relationships and drive conversions with strategic email campaigns, automated workflows, and personalized messaging that delivers results.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
                alt="Email Marketing"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Comprehensive Email Marketing Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to execution and optimization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Email Strategy",
                description: "Custom email marketing strategies aligned with your business goals and customer journey."
              },
              {
                icon: Mail,
                title: "Campaign Management",
                description: "Professional email campaign design, copywriting, and deployment for maximum engagement."
              },
              {
                icon: Zap,
                title: "Marketing Automation",
                description: "Automated workflows, drip campaigns, and trigger-based emails that nurture leads."
              },
              {
                icon: Users,
                title: "List Building & Segmentation",
                description: "Grow your email list and segment audiences for personalized, targeted messaging."
              },
              {
                icon: BarChart3,
                title: "Analytics & Reporting",
                description: "Track open rates, click-through rates, conversions, and ROI with detailed analytics."
              },
              {
                icon: Heart,
                title: "Newsletter Design",
                description: "Beautiful, responsive email templates that look great on all devices."
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

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Email Marketing Still Works
              </h2>
              <div className="space-y-4">
                {[
                  "Highest ROI of any marketing channel ($42 for every $1 spent)",
                  "Direct communication with your audience",
                  "Personalized messaging at scale",
                  "Automated lead nurturing",
                  "Build lasting customer relationships",
                  "Measurable results and insights",
                  "Cost-effective customer retention",
                  "Own your audience (not platform dependent)"
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
                  { step: "01", title: "Audit & Strategy", desc: "Analyze current performance and plan campaigns" },
                  { step: "02", title: "Design & Content", desc: "Create compelling emails and engaging copy" },
                  { step: "03", title: "Automation Setup", desc: "Build workflows and trigger sequences" },
                  { step: "04", title: "Test & Optimize", desc: "A/B testing and continuous improvement" }
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

      {/* Packages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Email Marketing Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your email marketing needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                features: [
                  "2 Email Campaigns/Month",
                  "Basic Automation",
                  "Email Template Design",
                  "List Management",
                  "Monthly Reporting",
                  "Email Support"
                ]
              },
              {
                name: "Growth",
                popular: true,
                features: [
                  "8 Email Campaigns/Month",
                  "Advanced Automation",
                  "Custom Templates",
                  "A/B Testing",
                  "Advanced Segmentation",
                  "Weekly Reporting",
                  "Priority Support"
                ]
              },
              {
                name: "Enterprise",
                features: [
                  "Unlimited Campaigns",
                  "Full Automation Suite",
                  "Dedicated Designer",
                  "Multi-variate Testing",
                  "Advanced Analytics",
                  "CRM Integration",
                  "Dedicated Manager"
                ]
              }
            ].map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-2xl p-8 border-2 ${
                  pkg.popular ? 'border-primary shadow-2xl scale-105' : 'border-border'
                } hover:shadow-xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                </div>
                
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Grow Your Business with Email?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create email campaigns that engage your audience and drive conversions
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Email Marketing
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>    </div>
  );
};

export default EmailMarketingService;

