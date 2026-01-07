import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
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

// NOTE: This App.tsx is kept for legacy React Router compatibility
// The actual app uses Next.js App Router in the /app directory
// For production, use the /app directory routes instead

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ScrollToTop />
          <Index />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
