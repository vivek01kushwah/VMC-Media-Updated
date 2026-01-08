"use client"


import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

const projects = [
  {
    title: "Real Estate",
    category: "SEO & Local Marketing",
    image: "/real Estate.png",
    result: "+185% Property Inquiries in 5 Months",
    color: "bg-accent",
    slug: "real-estate",
  },
  {
    title: "College/Admission Consultancy",
    category: "Lead Generation & PPC",
    image: "/college.png",
    result: "650+ Student Enrollments | 5.2% Conversion",
    color: "bg-secondary",
    slug: "college-consultancy",
  },
  {
    title: "Hospital",
    category: "Digital Marketing & Branding",
    image: "/hospital.png",
    result: "+420% Patient Appointments Growth",
    color: "bg-primary",
    slug: "hospital",
  },
  {
    title: "Ecommerce",
    category: "Performance Marketing & CRO",
    image: "/ecommerce.png",
    result: "+340% Revenue | 65% Lower CAC",
    color: "bg-accent",
    slug: "ecommerce",
  },
];

const Portfolio = () => {
  const router = useRouter();
  
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <span className="inline-block bg-secondary/20 px-6 py-2 rounded-full text-secondary font-semibold text-2xl tracking-wider">Our Portfolio</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-3 mb-4">
            Our Work Speaks for Itself
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've helped businesses across industries grow through innovative strategies and measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:shadow-2xl transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => router.push(`/portfolio/${project.slug}`)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 max-h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex items-center gap-2 text-white">
                    <span className="font-medium">View Case Study</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3" variant="secondary">{project.category}</Badge>
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className={`text-lg font-bold ${project.color === 'bg-accent' ? 'text-accent' : project.color === 'bg-secondary' ? 'text-secondary' : 'text-primary'}`}>
                  {project.result}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;