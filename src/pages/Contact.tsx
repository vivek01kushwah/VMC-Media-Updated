"use client";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact Us | VMC Media Pvt. Ltd."
        description="Get in touch with VMC Media. We're here to help you unlock your brand's full potential. Contact us for digital marketing consultation."
        canonical="/contact"
      />      
      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-hero-gradient">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Let's Grow Your Business Together
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Have a project in mind? We're here to help you unlock your brand's full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Get In Touch With Us</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {[
              {
                icon: Phone,
                title: "Call Us",
                content: "+91 9250592505",
                subtext: "Mon-Sat 10am-6pm IST",
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "Info@vmcmedia.in",
                subtext: "We reply within 24 hours",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                content: "VMC Media Pvt. Ltd.",
                subtext: "701,7th Floor, logix city centre, Sector-32, Noida-201301",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center border-border hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-lg font-semibold text-primary mb-1">{item.content}</p>
                  <p className="text-sm text-muted-foreground">{item.subtext}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input required placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input required placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input type="email" required placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Interested In
                    </label>
                    <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground">
                      <option>Search Engine Optimization (SEO)</option>
                      <option>Social Media Marketing (SMM)</option>
                      <option>Google Ads & PPC Campaigns</option>
                      <option>Website Development & UI/UX</option>
                      <option>Branding & Creative Services</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      required
                      placeholder="Tell us about your project..."
                      className="min-h-32"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Office Hours</h3>
                      <p className="text-muted-foreground">We're available during these times</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-foreground font-medium">Monday - Saturday</span>
                      <span className="text-muted-foreground">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-foreground font-medium">Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-gradient-to-br from-accent to-secondary">
                <CardContent className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
                  <p className="mb-6 text-white/90">
                    Schedule a free consultation with our team to discuss your marketing goals.
                  </p>
                  <Button size="lg" className="w-full bg-white text-secondary hover:bg-white/90">
                    Schedule Free Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;