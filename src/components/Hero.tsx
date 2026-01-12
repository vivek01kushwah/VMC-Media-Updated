'use client'

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem, ParallaxWrapper } from "@/components/animations";

// Lazy load modal since it's not immediately needed
const GetStartedModal = dynamic(() => import("@/components/GetStartedModal"), {
  ssr: false,
  loading: () => null
});

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Simplified Background Elements - Static for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <StaggerContainer className="space-y-6 lg:space-y-7">
            <StaggerItem>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                Digital Growth.{" "}
                <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
                  Starts Here
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Transform your brand with data-driven digital marketing strategies. We deliver measurable growth through SEO, paid ads, and performance campaigns.
                </p>
            </StaggerItem>

            {/* Social Proof and CTA Button - Side by Side */}
            <StaggerItem>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* Social Proof on Left */}
                <div className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-premium hover:scale-[1.02] transition-transform">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 border-2 border-card flex items-center justify-center text-xs font-bold text-accent"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-foreground">4.5/5</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">150+ projects</span> delivered
                    </p>
                  </div>
                </div>

                {/* Button on Right */}
                <Button 
                  size="lg" 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 active:scale-95 transition-all duration-300 group h-12 px-6 text-base font-semibold rounded-xl flex-1 sm:flex-none"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </StaggerItem>

            {/* Stats */}
            <StaggerItem>
              <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:items-center sm:gap-6 lg:gap-8 pt-2">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">150+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-border" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">150+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Clients Served</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-border" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">95%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Retention</div>
              </div>
            </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Right Visual */}
          <ParallaxWrapper offset={30} className="relative lg:pl-8 mt-8 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60" />
              
              <div className="relative bg-gradient-to-br from-card to-muted/30 rounded-3xl p-4 sm:p-6 lg:p-8 border border-border/50 shadow-premium-lg backdrop-blur-sm">
                <Image
                  src="/banner.png"
                  alt="Professional marketing expert"
                  width={600}
                  height={600}
                  className="w-full h-auto max-h-[350px] sm:max-h-[450px] lg:max-h-[550px] object-cover rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                  quality={85}
                />
              </div>

              {/* Floating Stat Card 1 - Simplified animations */}
              <div className="hidden sm:flex absolute -top-4 sm:-top-6 -left-4 sm:-left-6 bg-card/90 backdrop-blur-md p-3 sm:p-5 rounded-2xl shadow-premium-lg border border-border/50 hover:scale-105 hover:rotate-2 transition-all">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg shadow-accent/20">
                    <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div>
                        <div className="text-xl sm:text-2xl font-bold text-foreground">+220%</div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground">Traffic Growth (avg.)</div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 2 - Simplified animations */}
              <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-card/90 backdrop-blur-md p-3 sm:p-5 rounded-2xl shadow-premium-lg border border-border/50 w-52 sm:w-64 hover:scale-105 hover:-rotate-2 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-foreground">Campaign ROI</span>
                  <span className="text-xs text-muted-foreground">This Month</span>
                </div>
                <div className="flex items-end gap-1 h-12 mb-2">
                  {[40, 60, 45, 75, 55, 85, 95].map((height, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-accent to-secondary rounded-t" style={{ height: `${height}%` }} />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground">₹45.2L</span>
                  <span className="text-xs font-semibold text-green-500 flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 rotate-[-45deg]" />
                    +32.5%
                  </span>
                </div>
              </div>
            </motion.div>
          </ParallaxWrapper>

          {/* Background Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl -z-10" />
        </div>
      </div>

      {/* Get Started Modal */}
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
    </>
  );
};

export default Hero;