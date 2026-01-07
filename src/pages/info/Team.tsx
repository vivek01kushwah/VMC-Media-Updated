import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Digital marketing expert with 10+ years of experience",
      linkedin: "#",
      twitter: "#",
      email: "rajesh@vmcmedia.com"
    },
    {
      name: "Priya Sharma",
      role: "Head of SEO",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "SEO specialist driving organic growth strategies",
      linkedin: "#",
      twitter: "#",
      email: "priya@vmcmedia.com"
    },
    {
      name: "Amit Patel",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Award-winning designer and brand strategist",
      linkedin: "#",
      twitter: "#",
      email: "amit@vmcmedia.com"
    },
    {
      name: "Sneha Reddy",
      role: "Social Media Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Social media strategist with proven campaign success",
      linkedin: "#",
      twitter: "#",
      email: "sneha@vmcmedia.com"
    },
    {
      name: "Vikram Singh",
      role: "PPC Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Google Ads certified with expertise in ROI optimization",
      linkedin: "#",
      twitter: "#",
      email: "vikram@vmcmedia.com"
    },
    {
      name: "Neha Gupta",
      role: "Content Strategist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Content marketing expert creating engaging narratives",
      linkedin: "#",
      twitter: "#",
      email: "neha@vmcmedia.com"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Our Team | VMC Media Pvt. Ltd."
        description="Meet the talented team behind VMC Media - experts in digital marketing, SEO, social media, and creative strategy."
        canonical="/pages/team"
      />      
      <section className="pt-20 pb-4 lg:pb-6 bg-hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
              Our Team
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              Meet the passionate experts driving your digital success
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-white/90">{member.role}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <a href={member.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>    </div>
  );
};

export default Team;

