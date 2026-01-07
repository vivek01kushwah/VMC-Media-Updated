'use client'

import SEO from "@/components/SEO";
import { Briefcase, CheckCircle2, FileText, CreditCard, Mail, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const CorporateDesign = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <SEO title="Corporate Design Services - VMC Media" description="Professional corporate stationery and collateral design for your business." />      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
                <Briefcase className="w-4 h-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Corporate Design</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Professional{" "}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Corporate Design
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Elevate your professional image with stunning corporate stationery and business collateral designed to impress.
              </p>
              
              <button
                onClick={() => router.push('/contact')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Design Your Corporate Materials
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&h=600&fit=crop"
                alt="Corporate Design"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Corporate Design Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete suite of professional business materials
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CreditCard,
                title: "Business Cards",
                description: "Premium business card design with various finishes - standard, matte, glossy, or special materials"
              },
              {
                icon: FileText,
                title: "Letterhead Design",
                description: "Professional letterhead for official correspondence that reinforces your brand identity"
              },
              {
                icon: Mail,
                title: "Envelope Design",
                description: "Custom envelope designs in various sizes - from standard to large format"
              },
              {
                icon: Briefcase,
                title: "Folder & Binder",
                description: "Presentation folders and binders for proposals, reports, and corporate documents"
              },
              {
                icon: FileText,
                title: "Brochures & Flyers",
                description: "Marketing collateral including bifold, trifold brochures and promotional flyers"
              },
              {
                icon: CheckCircle2,
                title: "Corporate Reports",
                description: "Annual reports, white papers, and professional document design"
              },
              {
                icon: Mail,
                title: "Email Signatures",
                description: "Professional HTML email signatures for your entire team"
              },
              {
                icon: Briefcase,
                title: "PowerPoint Templates",
                description: "Custom presentation templates for consistent corporate communications"
              },
              {
                icon: FileText,
                title: "Invoices & Forms",
                description: "Professional invoice templates, order forms, and business documents"
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

      {/* Packages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Stationery Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect package for your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential",
                price: "$399",
                features: [
                  "Business Card Design",
                  "Letterhead Design",
                  "Email Signature",
                  "Print-Ready Files",
                  "2 Revision Rounds",
                  "5-Day Delivery"
                ]
              },
              {
                name: "Professional",
                price: "$699",
                features: [
                  "All Essential Items",
                  "Envelope Design",
                  "Folder Design",
                  "Invoice Template",
                  "Word Doc Templates",
                  "Unlimited Revisions",
                  "3-Day Delivery"
                ]
              },
              {
                name: "Complete",
                price: "$1,299",
                features: [
                  "All Professional Items",
                  "Brochure Design",
                  "PowerPoint Template",
                  "Social Media Kit",
                  "Brand Guidelines",
                  "Priority Support",
                  "2-Day Delivery"
                ]
              }
            ].map((pkg, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border-2 border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300"
              >
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
                  className="w-full py-3 rounded-xl font-semibold border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all"
                >
                  Get Started
                </button>
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
                Why Professional Corporate Design?
              </h2>
              <div className="space-y-4">
                {[
                  "Make a lasting first impression",
                  "Build trust and credibility",
                  "Stand out from competitors",
                  "Maintain brand consistency",
                  "Show attention to detail",
                  "Professional business image"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-foreground mb-6">What You Get</h3>
              <ul className="space-y-3">
                {[
                  "Print-ready files (CMYK, 300 DPI)",
                  "Digital versions (RGB, web-optimized)",
                  "Editable source files",
                  "Multiple file formats",
                  "Printing specifications",
                  "Setup instructions",
                  "Ongoing support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-secondary to-accent">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Professional Corporate Design?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create stunning business materials that make you stand out
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>    </div>
  );
};

export default CorporateDesign;

