'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const blogPosts = [
  {
    title: "Top SEO Trends That Will Dominate Next Year",
    excerpt: "Stay ahead of the competition with these cutting-edge SEO strategies that will shape the future of search rankings.",
    image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=600&h=400&fit=crop",
    category: "SEO",
    date: "Dec 1, 2024",
    author: "VMC Media Team",
    slug: "top-seo-trends",
  },
  {
    title: "How to Build a Strong Digital Marketing Strategy",
    excerpt: "A comprehensive guide to creating a data-driven digital marketing strategy that delivers measurable results for your business.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Digital Marketing",
    date: "Nov 28, 2024",
    author: "VMC Media Team",
    slug: "digital-marketing-strategy",
  },
  {
    title: "Why Every Business Needs a Website in 2025",
    excerpt: "Discover the critical reasons why having a professional website is no longer optional but essential for business success.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    category: "Web Development",
    date: "Nov 25, 2024",
    author: "VMC Media Team",
    slug: "website-importance-2025",
  },
  {
    title: "Google Ads vs Facebook Ads: Which Is Better?",
    excerpt: "An in-depth comparison of two major advertising platforms to help you choose the right one for your business goals.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    category: "PPC Advertising",
    date: "Nov 22, 2024",
    author: "VMC Media Team",
    slug: "google-ads-vs-facebook-ads",
  },
  {
    title: "How to Improve Your Website Conversion Rate",
    excerpt: "Proven tactics and optimization techniques to turn more visitors into customers and boost your bottom line.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "Conversion Optimization",
    date: "Nov 20, 2024",
    author: "VMC Media Team",
    slug: "improve-conversion-rate",
  },
  {
    title: "The Power of Social Media Marketing in 2025",
    excerpt: "Learn how to leverage social media platforms to build brand awareness, engage audiences, and drive business growth.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    category: "Social Media",
    date: "Nov 18, 2024",
    author: "VMC Media Team",
    slug: "social-media-marketing-2025",
  },
];

const Blog = () => {
  const router = useRouter();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 lg:pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Blog
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Stay updated with the latest trends, tips, and insights in digital marketing and SEO.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-16 lg:pb-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg border border-border bg-card hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative overflow-hidden h-56 bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://placehold.co/600x400/1a1a1a/888888?text=${encodeURIComponent(post.category)}`;
                    }}
                  />
                  <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground z-10">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary group/btn self-start"
                    onClick={() => router.push(`/blog/${post.slug}`)}
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;