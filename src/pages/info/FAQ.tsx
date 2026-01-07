import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does VMC Media offer?",
      answer: "We offer comprehensive digital marketing services including SEO, Social Media Marketing, Google Ads & PPC, Website Development, Content Creation, Lead Generation, Email Marketing, and more."
    },
    {
      question: "How long does it take to see results?",
      answer: "Results vary by service. PPC campaigns can show immediate results, while SEO typically takes 3-6 months for significant improvements. We provide regular reports to track progress."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We work with businesses of all sizes, from startups to enterprises. We have packages tailored to different budgets and needs."
    },
    {
      question: "What makes VMC Media different?",
      answer: "We focus on data-driven strategies, transparent reporting, and measurable ROI. Our team has years of experience and we stay updated with the latest digital marketing trends."
    },
    {
      question: "Do you provide monthly reports?",
      answer: "Yes, we provide detailed monthly analytics reports showing your campaign performance, traffic, conversions, and ROI metrics."
    },
    {
      question: "Can I cancel my contract anytime?",
      answer: "We offer flexible contracts with a minimum commitment period depending on the service. Please contact us to discuss specific terms."
    },
    {
      question: "Do you offer website maintenance?",
      answer: "Yes, we provide ongoing website maintenance, security updates, content updates, and technical support as part of our packages."
    },
    {
      question: "How do I get started?",
      answer: "Simply contact us through our website or call us at +91 9250592505. We'll schedule a free consultation to understand your needs and propose a customized strategy."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Frequently Asked Questions | VMC Media"
        description="Find answers to common questions about our digital marketing services, pricing, processes, and more."
        canonical="/pages/faq"
      />      
      <section className="pt-32 pb-16 lg:pb-20 bg-hero-gradient">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Find answers to common questions about our services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>    </div>
  );
};

export default FAQ;

