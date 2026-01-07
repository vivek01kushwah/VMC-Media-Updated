'use client'

import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { FileText, Award, Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";

const CaseStudies = () => {
  const router = useRouter();

  const cases = [
    {
      title: "E-commerce SEO Success",
      client: "Fashion Brand",
      result: "+220% Traffic",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      slug: "ecommerce-seo"
    },
    {
      title: "Real Estate Lead Generation",
      client: "Premium Agency",
      result: "450+ Leads",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      slug: "real-estate-leads"
    },
    {
      title: "Social Media Growth",
      client: "Lifestyle Brand",
      result: "+300% Followers",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      slug: "lifestyle-social"
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Case Studies | VMC Media Portfolio"
        description="Explore our successful digital marketing case studies and see how we've helped businesses achieve remarkable results."
        canonical="/portfolio/case-studies"
      />      
      <section className="pt-32 pb-16 lg:pb-20 bg-hero-gradient">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Case Studies
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Real results from real clients. See how we drive business growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((item, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onClick={() => router.push(`/portfolio/${item.slug}`)}
              >
                <div className="overflow-hidden rounded-xl mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-1">{item.client}</p>
                <p className="text-accent font-bold">{item.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>    </div>
  );
};

export default CaseStudies;

