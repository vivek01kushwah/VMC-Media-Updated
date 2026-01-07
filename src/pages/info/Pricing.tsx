'use client'

import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Pricing = () => {
  const router = useRouter();

  const plans = [
    {
      name: "Starter",
      price: "₹25,000",
      period: "/month",
      features: [
        "SEO Optimization",
        "Social Media Management (2 platforms)",
        "Monthly Analytics Report",
        "Email Support",
        "Basic Content Creation"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "₹50,000",
      period: "/month",
      features: [
        "Everything in Starter",
        "Google Ads Management",
        "Social Media (4 platforms)",
        "Weekly Analytics Report",
        "Priority Support",
        "Advanced Content Strategy",
        "Conversion Optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Everything in Professional",
        "Dedicated Account Manager",
        "Custom Strategy",
        "Unlimited Platforms",
        "24/7 Support",
        "Advanced Analytics",
        "Quarterly Business Reviews"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Pricing Plans | VMC Media Digital Marketing Services"
        description="Choose the perfect digital marketing package for your business. Transparent pricing with no hidden fees."
        canonical="/pages/pricing"
      />      
      <section className="pt-32 pb-16 lg:pb-20 bg-hero-gradient">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Pricing Plans
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Choose the perfect plan for your business growth
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-accent border-2 shadow-xl' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-accent hover:bg-accent/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => router.push("/contact")}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>    </div>
  );
};

export default Pricing;

