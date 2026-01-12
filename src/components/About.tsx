import { CheckCircle2 } from "lucide-react";

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
                  src="/about top.webp"
                  alt="Team collaboration"
                  className="w-full h-[180px] sm:h-[220px] lg:h-[240px] object-cover rounded-xl"
                />
                {/* Stats Badge */}
                <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-2 sm:left-3 lg:left-4 bg-card p-1.5 sm:p-2 lg:p-3 rounded-lg sm:rounded-xl shadow-xl border border-border">
                  <div className="text-center">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-0.5 sm:mb-1">14+</p>
                    <p className="text-[9px] sm:text-xs text-muted-foreground">Years Exp</p>
                  </div>
                </div>
              </div>
              
              {/* Two Smaller Images Below */}
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden">
                <img
                  src="/about vmc Down.webp"
                  alt="Team meeting"
                  className="w-full h-[100px] sm:h-[120px] lg:h-[140px] object-cover rounded-lg sm:rounded-xl"
                />
              </div>
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden">
                <img
                  src="/about vmc Down.webp"
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
            <div className="inline-block bg-secondary/20 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full">
              <span className="text-secondary font-semibold text-sm sm:text-base uppercase tracking-wider">About VMC Media</span>
            </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;