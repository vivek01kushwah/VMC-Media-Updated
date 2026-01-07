import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-6 sm:py-8 lg:py-10 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Left Images */}
          <div className="relative animate-fade-in max-w-xl mx-auto lg:mx-0">
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {/* Main Large Image */}
              <div className="col-span-2 relative z-10 rounded-xl sm:rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-[180px] sm:h-[220px] lg:h-[240px] object-cover rounded-xl"
                />
                {/* Stats Badge */}
                <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-2 sm:left-3 lg:left-4 bg-card p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl shadow-xl border border-border">
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-0.5 sm:mb-1">14+</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Years Experience</p>
                  </div>
                </div>
              </div>
              
              {/* Two Smaller Images Below */}
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
                  alt="Team meeting"
                  className="w-full h-[100px] sm:h-[120px] lg:h-[140px] object-cover rounded-lg sm:rounded-xl"
                />
              </div>
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                  alt="Creative workspace"
                  className="w-full h-[100px] sm:h-[120px] lg:h-[140px] object-cover rounded-lg sm:rounded-xl"
                />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/20 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-3xl -z-10" />
          </div>

          {/* Right Content */}
          <div className="space-y-3 sm:space-y-4 animate-fade-in mt-6 lg:mt-0" style={{ animationDelay: "0.2s" }}>
            <span className="text-secondary font-semibold text-lg sm:text-xl uppercase tracking-wider">About VMC Media</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary leading-tight">
              Full-Service Digital Marketing Agency
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              VMC Media Pvt. Ltd. is a full-service digital marketing agency dedicated to helping businesses thrive in the competitive digital world. With a passion for creativity and a commitment to performance, we deliver solutions that elevate brands and drive revenue growth.
            </p>

            <div className="space-y-2">
              <h2 className="text-sm font-bold text-foreground">Our Vision</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To become a leading global digital marketing agency known for excellence, creativity, and delivering real business results.
              </p>
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

            <div className="pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;