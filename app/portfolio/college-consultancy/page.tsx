'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { CheckCircle2, Users, BookOpen, Target, TrendingUp } from 'lucide-react';

export default function CollegeConsultancyPortfolio() {
  const projects = [
    {
      id: 1,
      name: "Top Engineering College - Delhi NCR",
      description: "Student recruitment campaign for premium engineering institute with emphasis on placement records",
      results: "3500 applications received, 42% increase in admissions",
      image: "https://loremflickr.com/600/400?lock=5"
    },
    {
      id: 2,
      name: "Medical College - Mumbai",
      description: "Comprehensive admission marketing for medical and dental programs across India",
      results: "2800 qualified leads, 380 students enrolled",
      image: "https://loremflickr.com/600/400?lock=6"
    },
    {
      id: 3,
      name: "Business School - Bangalore",
      description: "MBA and executive program marketing with focus on career outcomes and alumni network",
      results: "1200 applications, 85% conversion rate",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      name: "International Consultancy - Pan India",
      description: "Overseas admission counseling with visa and placement support highlighting",
      results: "950 students placed abroad, 65% increase in inquiries",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    }
  ];

  const benefits = [
    { icon: TrendingUp, title: "Increased Enrollment", description: "Boost student applications through targeted digital campaigns" },
    { icon: Users, title: "Student Engagement", description: "Connect with qualified students at every stage of their journey" },
    { icon: BookOpen, title: "Brand Building", description: "Establish your institution as a preferred educational choice" },
    { icon: Target, title: "Precise Targeting", description: "Reach students based on academic interests and career goals" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <section className="pt-20 pb-6 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                College & Admission Consultancy Portfolio
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Successful student recruitment and admission marketing strategies for educational institutions
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-10">Featured College & Consultancy Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all">
                  <div className="h-48 bg-muted overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/600x400?text=${encodeURIComponent(project.name)}`;
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{project.name}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <p className="text-sm font-semibold text-primary">{project.results}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-10">Why Choose Our Education Marketing</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-all text-center">
                  <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-10">Our Education Marketing Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Institution Analysis", desc: "Understand your unique value proposition and competitive advantage" },
                { step: "02", title: "Student Targeting", desc: "Reach relevant students through multiple digital channels" },
                { step: "03", title: "Enrollment Optimization", desc: "Convert inquiries into admissions with strategic nurturing" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
