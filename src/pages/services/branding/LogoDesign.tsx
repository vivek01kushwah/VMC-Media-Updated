'use client'

import SEO from "@/components/SEO";
import { PenTool, CheckCircle2, Sparkles, Palette, ArrowRight, Star } from "lucide-react";
import { useRouter } from "next/navigation";

const LogoDesign = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <SEO title="Logo Design Services - VMC Media" description="Professional logo design that captures your brand essence and makes a lasting impression." />      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
                <PenTool className="w-4 h-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Logo Design</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Professional{" "}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Logo Design
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Make a powerful first impression with a unique, memorable logo that perfectly represents your brand identity and values.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Get Your Custom Logo
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => router.push('/case-studies')}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-secondary text-secondary font-semibold rounded-xl hover:bg-secondary hover:text-white transition-all duration-300"
                >
                  View Portfolio
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=800&h=600&fit=crop"
                alt="Logo Design"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Packages */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Logo Design Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect package for your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Startup",
                price: "$299",
                features: [
                  "3 Unique Logo Concepts",
                  "2 Revision Rounds",
                  "Vector Files (AI, EPS, PDF)",
                  "High-Res PNG & JPG",
                  "Grayscale Version",
                  "7-Day Delivery"
                ]
              },
              {
                name: "Professional",
                price: "$599",
                popular: true,
                features: [
                  "5 Unique Logo Concepts",
                  "Unlimited Revisions",
                  "All File Formats",
                  "Color Variations",
                  "Brand Style Guide",
                  "Social Media Kit",
                  "5-Day Delivery"
                ]
              },
              {
                name: "Enterprise",
                price: "$999",
                features: [
                  "8 Unique Logo Concepts",
                  "Unlimited Revisions",
                  "Complete Brand Package",
                  "Stationery Design",
                  "Brand Guidelines",
                  "3D Mockups",
                  "3-Day Delivery"
                ]
              }
            ].map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-2xl p-8 border-2 ${
                  pkg.popular ? 'border-secondary shadow-2xl scale-105' : 'border-border'
                } hover:shadow-xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 bg-secondary text-white text-sm font-semibold rounded-full">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-secondary mb-4">{pkg.price}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => router.push('/contact')}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-secondary to-accent text-white hover:scale-105'
                      : 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Types of Logos We Create
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From wordmarks to emblems, we design every style
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: "Wordmark", desc: "Text-based logo using unique typography" },
              { type: "Lettermark", desc: "Initials or monogram design" },
              { type: "Icon/Symbol", desc: "Iconic graphic representation" },
              { type: "Combination", desc: "Text + icon combined design" },
              { type: "Emblem", desc: "Badge or seal style logo" },
              { type: "Mascot", desc: "Character-based brand identity" },
              { type: "Abstract", desc: "Abstract geometric shapes" },
              { type: "3D Logo", desc: "Three-dimensional design" }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
              >
                <Sparkles className="w-8 h-8 text-secondary mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-2">{item.type}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Logo Design Process
              </h2>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Discovery & Research", desc: "We learn about your business, industry, and target audience" },
                  { step: "02", title: "Concept Development", desc: "Our designers create multiple unique logo concepts" },
                  { step: "03", title: "Feedback & Refinement", desc: "You provide feedback and we refine your chosen design" },
                  { step: "04", title: "Finalization", desc: "Receive final files in all formats with full ownership" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-3xl font-bold text-secondary/30">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-10">
                <h3 className="text-2xl font-bold text-foreground mb-6">What You Get</h3>
                <ul className="space-y-4">
                  {[
                    "100% original & unique designs",
                    "Unlimited revisions (Pro & Enterprise)",
                    "Vector files for unlimited scaling",
                    "Color and black & white versions",
                    "Multiple file formats (AI, EPS, PDF, PNG, JPG, SVG)",
                    "Full copyright ownership",
                    "Brand style guide",
                    "Social media ready formats",
                    "Print-ready files",
                    "Free support after delivery"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-secondary to-accent">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Your Perfect Logo?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create a logo that makes your brand unforgettable
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Your Logo Project
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>    </div>
  );
};

export default LogoDesign;

