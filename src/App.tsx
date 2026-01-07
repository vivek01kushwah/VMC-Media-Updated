import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import { PageTransition } from "@/components/animations";
import ErrorBoundary from "@/components/ErrorBoundary";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import PortfolioDetail from "./pages/PortfolioDetail";
import NotFound from "./pages/NotFound";
import Consultation from "./pages/Consultation";
import CaseStudiesPage from "./pages/CaseStudies";

// Lazy load service pages to reduce bundle size
const SEOService = React.lazy(() => import("./pages/services/SEO"));
const SMMService = React.lazy(() => import("./pages/services/SMM"));
const GoogleAdsService = React.lazy(() => import("./pages/services/GoogleAds"));
const WebDevelopmentService = React.lazy(() => import("./pages/services/WebDevelopment"));
const BrandingService = React.lazy(() => import("./pages/services/Branding"));
const LeadGenerationService = React.lazy(() => import("./pages/services/LeadGeneration"));

// Branding Sub-Services - Lazy loaded
const LogoDesign = React.lazy(() => import("./pages/services/branding/LogoDesign"));
const BrandIdentity = React.lazy(() => import("./pages/services/branding/BrandIdentity"));
const CorporateDesign = React.lazy(() => import("./pages/services/branding/CorporateDesign"));

// Additional Services - Lazy loaded
const EmailMarketing = React.lazy(() => import("./pages/services/EmailMarketing"));
const CRO = React.lazy(() => import("./pages/services/CRO"));
const EcommerceMarketing = React.lazy(() => import("./pages/services/EcommerceMarketing"));
const LocalSEO = React.lazy(() => import("./pages/services/LocalSEO"));
const InfluencerMarketing = React.lazy(() => import("./pages/services/InfluencerMarketing"));
const ORM = React.lazy(() => import("./pages/services/ORM"));

// Portfolio Pages - Lazy loaded
const CaseStudies = React.lazy(() => import("./pages/portfolio/CaseStudies"));

// Info Pages - Lazy loaded
const AboutPage = React.lazy(() => import("./pages/info/About"));
const Team = React.lazy(() => import("./pages/info/Team"));
const Careers = React.lazy(() => import("./pages/info/Careers"));
const Pricing = React.lazy(() => import("./pages/info/Pricing"));
const FAQ = React.lazy(() => import("./pages/info/FAQ"));

const queryClient = new QueryClient();

// Loading component for lazy loaded routes
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <PageTransition key={location.pathname}>
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              
              {/* Service Routes */}
              <Route path="/services/seo" element={<SEOService />} />
              <Route path="/services/smm" element={<SMMService />} />
              <Route path="/services/google-ads" element={<GoogleAdsService />} />
              <Route path="/services/web-development" element={<WebDevelopmentService />} />
              <Route path="/services/branding" element={<BrandingService />} />
              <Route path="/services/lead-generation" element={<LeadGenerationService />} />
              
              {/* Branding Sub-Services */}
              <Route path="/services/branding/logo-design" element={<LogoDesign />} />
              <Route path="/services/branding/brand-identity" element={<BrandIdentity />} />
              <Route path="/services/branding/corporate-design" element={<CorporateDesign />} />
              
              {/* Additional Services */}
              <Route path="/services/email-marketing" element={<EmailMarketing />} />
              <Route path="/services/cro" element={<CRO />} />
              <Route path="/services/ecommerce" element={<EcommerceMarketing />} />
              <Route path="/services/local-seo" element={<LocalSEO />} />
              <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
              <Route path="/services/orm" element={<ORM />} />
              
              {/* Portfolio Routes */}
              <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
              <Route path="/portfolio/case-studies" element={<CaseStudies />} />
              <Route path="/portfolio/projects" element={<CaseStudies />} />
              <Route path="/portfolio/success-stories" element={<CaseStudies />} />
              <Route path="/portfolio/branding" element={<CaseStudies />} />
              <Route path="/portfolio/websites" element={<CaseStudies />} />
              <Route path="/portfolio/campaigns" element={<CaseStudies />} />
              
              {/* Info/Pages Routes */}
              <Route path="/pages/about" element={<AboutPage />} />
              <Route path="/pages/team" element={<Team />} />
              <Route path="/pages/careers" element={<Careers />} />
              <Route path="/pages/pricing" element={<Pricing />} />
              <Route path="/pages/testimonials" element={<Index />} />
              <Route path="/pages/faq" element={<FAQ />} />
              <Route path="/pages/terms" element={<FAQ />} />
              <Route path="/pages/privacy" element={<FAQ />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          </PageTransition>
        </AnimatePresence>
      );
    };

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <AnimatedRoutes />
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
