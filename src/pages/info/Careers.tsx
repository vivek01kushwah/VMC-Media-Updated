import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior SEO Specialist",
      department: "Digital Marketing",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "3-5 years",
      description: "Lead SEO strategies for enterprise clients, conduct technical audits, and drive organic growth.",
      requirements: ["Expert in on-page/off-page SEO", "Technical SEO knowledge", "Analytics proficiency"],
    },
    {
      title: "Social Media Manager",
      department: "Social Media",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Develop and execute social media strategies across multiple platforms for diverse clients.",
      requirements: ["Experience with Meta & LinkedIn Ads", "Content creation skills", "Analytics mindset"],
    },
    {
      title: "PPC Campaign Manager",
      department: "Paid Advertising",
      location: "Remote",
      type: "Full-time",
      experience: "3-5 years",
      description: "Manage Google Ads and Facebook Ads campaigns with focus on ROI optimization.",
      requirements: ["Google Ads certified", "Budget management experience", "A/B testing expertise"],
    },
    {
      title: "Content Writer",
      department: "Content Marketing",
      location: "Bangalore, India",
      type: "Full-time / Contract",
      experience: "1-3 years",
      description: "Create compelling content for blogs, websites, and marketing campaigns.",
      requirements: ["Excellent writing skills", "SEO knowledge", "Research abilities"],
    },
    {
      title: "Graphic Designer",
      department: "Creative",
      location: "Hybrid",
      type: "Full-time",
      experience: "2-4 years",
      description: "Design stunning visuals for digital campaigns, branding, and social media.",
      requirements: ["Adobe Creative Suite expert", "UI/UX knowledge", "Portfolio required"],
    },
    {
      title: "Digital Marketing Intern",
      department: "Marketing",
      location: "On-site",
      type: "Internship",
      experience: "0-1 year",
      description: "Learn digital marketing fundamentals while supporting ongoing campaigns.",
      requirements: ["Passionate about digital marketing", "Quick learner", "Team player"],
    }
  ];

  const benefits = [
    "Competitive salary",
    "Health insurance",
    "Flexible work hours",
    "Remote work options",
    "Learning & development",
    "Performance bonuses",
    "Friendly work culture",
    "Career growth opportunities"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Careers - Join VMC Media | Digital Marketing Jobs"
        description="Join VMC Media's talented team. Explore career opportunities in digital marketing, SEO, social media, content creation, and more."
        canonical="/pages/careers"
      />      
      <section className="pt-20 pb-4 lg:pb-6 bg-hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
              Careers at VMC Media
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              Join our team and build your career in digital marketing
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Why Join VMC Media?</h2>
            <p className="text-xs sm:text-sm text-muted-foreground">Grow your career with industry-leading benefits</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card p-4 rounded-xl border border-border text-center">
                <p className="text-sm font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-8 lg:py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Open Positions</h2>
            <p className="text-xs sm:text-sm text-muted-foreground">Explore opportunities to join our growing team</p>
          </div>
          
          <div className="grid gap-6">
            {openPositions.map((job, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="w-fit">{job.experience}</Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Requirements:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="text-sm text-muted-foreground">{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="bg-primary hover:bg-primary/90 group">
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>    </div>
  );
};

export default Careers;

