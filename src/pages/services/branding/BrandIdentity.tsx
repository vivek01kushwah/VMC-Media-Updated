'use client'

import SEO from "@/components/SEO";
import { Palette, CheckCircle2, Layers, Type, Image, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const BrandIdentity = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <SEO title="Brand Identity Design - VMC Media" description="Complete brand identity systems that create consistency and recognition across all touchpoints." />      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
                <Palette className="w-4 h-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Brand Identity</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Complete{" "}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Brand Identity
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Build a cohesive brand identity system with comprehensive guidelines that ensure consistency across every customer touchpoint.
              </p>
              
              <button
                onClick={() => router.push('/contact')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Build Your Brand Identity
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop"
                alt="Brand Identity"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Complete Brand Identity Package
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for a professional, cohesive brand
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Color Palette",
                description: "Primary, secondary, and accent colors with exact color codes (HEX, RGB, CMYK, Pantone)"
              },
              {
                icon: Type,
                title: "Typography System",
                description: "Carefully selected font families for headlines, body text, and special uses"
              },
              {
                icon: Layers,
                title: "Logo Variations",
                description: "Full color, grayscale, white, black, icon-only versions for every use case"
              },
              {
                icon: Image,
                title: "Visual Elements",
                description: "Patterns, textures, icons, and graphic elements that support your brand"
              },
              {
                icon: Palette,
                title: "Brand Voice & Tone",
                description: "Personality guidelines for how your brand communicates"
              },
              {
                icon: CheckCircle2,
                title: "Usage Guidelines",
                description: "Clear rules on proper logo usage, spacing, do's and don'ts"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Guidelines */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-foreground mb-6">Your Brand Guidelines Include</h3>
              <ul className="space-y-4">
                {[
                  "Brand story and mission statement",
                  "Logo construction and clear space",
                  "Color palette with usage rules",
                  "Typography specifications",
                  "Imagery style and photography guidelines",
                  "Iconography and graphic elements",
                  "Stationery design templates",
                  "Social media templates",
                  "Email signature designs",
                  "Presentation templates",
                  "Print and digital specifications",
                  "Brand application examples"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Brand Guidelines Matter
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Consistency",
                    desc: "Ensure your brand looks the same across all platforms and materials"
                  },
                  {
                    title: "Recognition",
                    desc: "Build strong brand recognition with cohesive visual identity"
                  },
                  {
                    title: "Professionalism",
                    desc: "Present a polished, professional image to your audience"
                  },
                  {
                    title: "Efficiency",
                    desc: "Speed up design decisions with clear guidelines"
                  },
                  {
                    title: "Team Alignment",
                    desc: "Keep everyone on the same page with documented standards"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl border border-border">
                    <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What You Receive
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional files and documentation for seamless brand implementation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Digital Brand Guidelines (PDF)",
                items: ["Complete brand manual", "Interactive PDF with hyperlinks", "Easy to share with team and vendors"]
              },
              {
                title: "Logo Files (All Formats)",
                items: ["Vector files (AI, EPS, SVG)", "High-res PNG & JPG", "All color variations"]
              },
              {
                title: "Design Templates",
                items: ["Business card templates", "Letterhead & envelope", "Social media templates"]
              },
              {
                title: "Asset Library",
                items: ["Patterns and textures", "Icon set", "Photo style guide"]
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((subitem, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{subitem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-secondary to-accent">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for a Complete Brand Identity?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's build a cohesive brand system that elevates your business
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>    </div>
  );
};

export default BrandIdentity;

