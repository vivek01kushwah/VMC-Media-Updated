import SEO from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="About VMC Media Pvt. Ltd. | Digital Marketing Agency"
        description="Learn about VMC Media - a full-service digital marketing agency dedicated to helping businesses thrive in the competitive digital world."
        canonical="/pages/about"
      />      
      <section className="pt-20 pb-4 lg:pb-6 bg-hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
              About VMC Media
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Your trusted partner for digital marketing success
            </p>
          </div>
        </div>
      </section>

      <section className="py-4 lg:py-6 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
            {/* Left Images */}
            <div className="relative animate-fade-in max-w-xl mx-auto lg:mx-0">
              <div className="grid grid-cols-2 gap-3">
                {/* Main Large Image */}
                <div className="col-span-2 relative z-10 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-[240px] object-cover rounded-xl"
                  />
                  {/* Stats Badge */}
                  <div className="absolute bottom-4 left-4 bg-card p-4 rounded-xl shadow-xl border border-border">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary mb-1">14+</p>
                      <p className="text-xs text-muted-foreground">Years Experience</p>
                    </div>
                  </div>
                </div>
                
                {/* Two Smaller Images Below */}
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
                    alt="Team meeting"
                    className="w-full h-[140px] object-cover rounded-xl"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                    alt="Creative workspace"
                    className="w-full h-[140px] object-cover rounded-xl"
                  />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/20 rounded-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-3xl -z-10" />
            </div>

            {/* Right Content */}
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                VMC Media Pvt. Ltd. is a full-service digital marketing agency dedicated to helping businesses thrive in the competitive digital world. With a passion for creativity and a commitment to performance, we deliver solutions that elevate brands and drive revenue growth.
              </p>
              <div className="space-y-2">
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">To provide innovative, data-driven digital marketing strategies that empower businesses to reach the right audience and achieve measurable success.</p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">To become a leading global digital marketing agency known for excellence, creativity, and delivering real business results.</p>
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-foreground">Our Approach</h3>
                {[
                  "Understand Your Goals",
                  "Develop a Customized Strategy",
                  "Execute with Precision",
                  "Measure, Optimize & Scale",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>    </div>
  );
};

export default About;

