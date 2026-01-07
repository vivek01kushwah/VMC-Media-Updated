'use client'

import { useParams, useRouter } from "next/navigation";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { motion } from "framer-motion";

// Blog data (in production, this would come from an API or CMS)
const blogData = {
  "top-seo-trends": {
    title: "Top SEO Trends That Will Dominate Next Year",
    excerpt: "Stay ahead of the competition with these cutting-edge SEO strategies that will shape the future of search rankings.",
    content: `
      <h2>Introduction</h2>
      <p>Search Engine Optimization continues to evolve at a rapid pace. As we look ahead, several key trends are emerging that will define success in organic search...</p>
      
      <h2>1. AI-Powered Search Experience</h2>
      <p>Artificial Intelligence is transforming how search engines understand and rank content. Google's AI algorithms are becoming increasingly sophisticated...</p>
      
      <h2>2. E-E-A-T Becomes Critical</h2>
      <p>Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) are now more important than ever. Google is prioritizing content from verified experts...</p>
      
      <h2>3. Voice Search Optimization</h2>
      <p>With the rise of voice assistants, optimizing for conversational queries is essential. Long-tail keywords and natural language processing...</p>
      
      <h2>4. Core Web Vitals & Page Experience</h2>
      <p>User experience signals continue to be ranking factors. Fast loading times, mobile responsiveness, and smooth interactions...</p>
      
      <h2>5. Video Content Dominance</h2>
      <p>Video content is becoming increasingly important for SEO. YouTube optimization and video snippets in search results...</p>
      
      <h2>Conclusion</h2>
      <p>Staying ahead of these trends will give your business a competitive edge in organic search. At VMC Media, we help businesses implement cutting-edge SEO strategies...</p>
    `,
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1200&h=600&fit=crop",
    category: "SEO",
    date: "Dec 1, 2024",
    author: "VMC Media Team",
    readTime: "8 min read",
  },
  "digital-marketing-strategy": {
    title: "How to Build a Strong Digital Marketing Strategy",
    excerpt: "A comprehensive guide to creating a data-driven digital marketing strategy that delivers measurable results for your business.",
    content: `
      <h2>Understanding Your Market</h2>
      <p>Before diving into tactics, it's crucial to understand your target audience, competitors, and market landscape...</p>
      
      <h2>Setting Clear Objectives</h2>
      <p>Define SMART goals that align with your business objectives. Whether it's brand awareness, lead generation, or sales...</p>
      
      <h2>Choosing the Right Channels</h2>
      <p>Not all digital channels are created equal. Select platforms where your audience is most active...</p>
      
      <h2>Content Strategy</h2>
      <p>Create valuable content that resonates with your audience. Develop a content calendar and maintain consistency...</p>
      
      <h2>Measurement & Analytics</h2>
      <p>Track KPIs and use data to optimize your campaigns. Regular reporting and analysis are essential...</p>
    `,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    category: "Digital Marketing",
    date: "Nov 28, 2024",
    author: "VMC Media Team",
    readTime: "10 min read",
  },
  "website-importance-2025": {
    title: "Why Every Business Needs a Website in 2025",
    excerpt: "Discover the critical reasons why having a professional website is no longer optional but essential for business success.",
    content: `
      <h2>Digital Presence is Non-Negotiable</h2>
      <p>In today's digital-first world, your website is often the first impression potential customers have of your business...</p>
      
      <h2>24/7 Availability</h2>
      <p>Unlike physical stores, your website works around the clock, serving customers even when you're asleep...</p>
      
      <h2>Credibility and Trust</h2>
      <p>A professional website establishes credibility. Customers expect businesses to have an online presence...</p>
      
      <h2>Cost-Effective Marketing</h2>
      <p>Compared to traditional advertising, a website offers incredible ROI for marketing your products and services...</p>
      
      <h2>Customer Insights</h2>
      <p>Websites provide valuable data about customer behavior, preferences, and demographics...</p>
    `,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop",
    category: "Web Development",
    date: "Nov 25, 2024",
    author: "VMC Media Team",
    readTime: "7 min read",
  },
};

type BlogKey = keyof typeof blogData;

const BlogDetail = () => {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const slug = params?.slug;
  
  const post = slug ? blogData[slug as BlogKey] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Button onClick={() => router.push("/blog")}>Back to Blog</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${post.title} | VMC Media Blog`}
        description={post.excerpt}
        canonical={`/blog/${slug}`}
      />      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-hero-gradient">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="ghost"
              onClick={() => router.push("/blog")}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
            
            <div className="max-w-4xl">
              <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {post.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{post.date}</span>
                </div>
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-border"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Share this article</h3>
                <Button variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 p-8 bg-gradient-to-br from-accent to-secondary rounded-2xl text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="mb-6 text-white/90">
                Get in touch with VMC Media and let's discuss how we can help your business grow.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => router.push("/contact")}
              >
                Get Free Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>    </div>
  );
};

export default BlogDetail;

