"use client"
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, Calendar, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Consultation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Consultation Request Received!",
      description: "Our team will contact you within 24 hours to schedule your free consultation.",
    });

    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const benefits = [
    "Free 30-minute strategy session",
    "Personalized digital marketing roadmap",
    "Competitor analysis insights",
    "ROI projection for your business",
    "No obligation, completely free",
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Book Free Consultation | VMC Media"
        description="Schedule a free 30-minute consultation with our digital marketing experts. Get personalized strategies for your business growth."
        canonical="/consultation"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Free Consultation</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              Book Your Free{" "}
              <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
                Consultation
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Get expert advice on growing your business online. Our digital marketing 
              specialists will create a custom strategy tailored to your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Side - Benefits */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4 animate-fade-in">
                <h2 className="text-3xl font-bold text-foreground">
                  What You'll Get
                </h2>
                <p className="text-muted-foreground">
                  Our free consultation includes a comprehensive review of your 
                  digital presence and actionable recommendations.
                </p>
              </div>

              <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4 pt-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Card className="p-5 border-border bg-card/50 backdrop-blur-sm hover:shadow-premium transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Call Us</div>
                      <div className="font-semibold text-foreground">+91  9250592505</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-5 border-border bg-card/50 backdrop-blur-sm hover:shadow-premium transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email Us</div>
                      <div className="font-semibold text-foreground">Info@vmcmedia.in</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:col-span-3">
              <Card className="p-8 lg:p-10 border-border shadow-premium-lg animate-scale-in">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="h-12 rounded-xl border-border focus:border-accent focus:ring-accent"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="h-12 rounded-xl border-border focus:border-accent focus:ring-accent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">
                        Phone Number <span className="text-accent">*</span>
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="h-12 rounded-xl border-border focus:border-accent focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      Company Name
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="h-12 rounded-xl border-border focus:border-accent focus:ring-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      Tell us about your goals
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What are you looking to achieve with digital marketing?"
                      rows={5}
                      className="rounded-xl border-border focus:border-accent focus:ring-accent resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all text-base"
                  >
                    Schedule Free Consultation
                  </Button>

                  <p className="text-sm text-center text-muted-foreground">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>    </div>
  );
};

export default Consultation;

