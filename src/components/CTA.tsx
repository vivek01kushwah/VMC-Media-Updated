import { ArrowRight, Sparkles } from "lucide-react";

// Mock Button component for demonstration
const Button = ({ children, size, variant, className, ...props }: any) => (
  <button className={className} {...props}>
    {children}
  </button>
);

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">Free Website Audit for Indian Businesses</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Grow Your Online Presence?
          </h2>
          
          <p className="text-base md:text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Reach out to VMC Media — get a free India-focused website audit, marketplace checks (Amazon/Flipkart), local SEO recommendations and a clear growth plan. Prefer WhatsApp? Message us anytime for a quick response.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-white/90 text-lg px-8 py-3 rounded-md font-medium transition-colors group">
              Get a Free Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center justify-center border-2 border-white text-white text-lg px-8 py-3 rounded-md font-medium transition-colors hover:bg-white hover:text-primary">
              Contact Us
            </button>
          </div>

          <p className="text-white/70 text-sm mt-6">
            No commitment required • Free website audit • WhatsApp support • Estimates in INR available
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;