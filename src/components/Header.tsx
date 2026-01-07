
'use client'


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search, Share2, Target, Globe, PenTool, TrendingUp, Mail, BarChart3, ShoppingCart, MapPin, Users, Award, Briefcase, FileText, DollarSign, MessageSquare, Shield, HelpCircle, ScrollText } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import ThemeToggle from "@/components/ThemeToggle";
import GetStartedModal from "@/components/GetStartedModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = {
    core: [
      { name: "Search Engine Optimization (SEO)", href: "/services/seo", icon: Search },
      { name: "Social Media Marketing (SMM)", href: "/services/smm", icon: Share2 },
      { name: "Google Ads & PPC Campaigns", href: "/services/google-ads", icon: Target },
      { name: "Website Development & UI/UX", href: "/services/web-development", icon: Globe },
      { name: "Content Creation & Branding", href: "/services/branding", icon: PenTool },
      { name: "Lead Generation & Performance Marketing", href: "/services/lead-generation", icon: TrendingUp },
    ],
    additional: [
      { name: "Email Marketing & Automation", href: "/services/email-marketing", icon: Mail },
      { name: "Conversion Rate Optimization", href: "/services/cro", icon: BarChart3 },
      { name: "E-commerce Marketing", href: "/services/ecommerce", icon: ShoppingCart },
      { name: "Local SEO Services", href: "/services/local-seo", icon: MapPin },
      { name: "Influencer Marketing", href: "/services/influencer-marketing", icon: Users },
      { name: "Online Reputation Management (ORM)", href: "/services/orm", icon: Shield },
    ],
  };

  const portfolio = [
    { name: "Case Studies", href: "/portfolio/case-studies", icon: FileText },
    { name: "Completed Projects", href: "/portfolio/projects", icon: Briefcase },
    { name: "Client Success Stories", href: "/portfolio/success-stories", icon: Award },
    { name: "Branding Portfolio", href: "/portfolio/branding", icon: PenTool },
    { name: "Website Design Portfolio", href: "/portfolio/websites", icon: Globe },
    { name: "Digital Campaign Results", href: "/portfolio/campaigns", icon: TrendingUp },
  ];

  const pages = [
    { name: "About Company", href: "/pages/about", icon: Briefcase },
    { name: "Our Team", href: "/pages/team", icon: Users },
    { name: "Careers / Join Us", href: "/pages/careers", icon: Award },
    // { name: "Pricing Plans", href: "/pages/pricing", icon: DollarSign },
    { name: "Testimonials", href: "/pages/testimonials", icon: MessageSquare },
    { name: "FAQ", href: "/pages/faq", icon: HelpCircle },
    { name: "Terms & Conditions", href: "/pages/terms", icon: ScrollText },
    { name: "Privacy Policy", href: "/pages/privacy", icon: Shield },
  ];

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-lg">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              VMC Media
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <NavLink
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium py-2 relative group"
              activeClassName="text-primary"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium py-2">
                Services <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
              
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 pt-2 w-[600px] animate-fade-in">
                  <div className="bg-background border border-border rounded-xl shadow-2xl p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">Core Services</h3>
                      <div className="space-y-1">
                        {services.core.map((service) => (
                          <NavLink
                            key={service.href}
                            to={service.href}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-all group/item"
                          >
                            <service.icon className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium">{service.name}</span>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">Additional Services</h3>
                      <div className="space-y-1">
                        {services.additional.map((service) => (
                          <NavLink
                            key={service.href}
                            to={service.href}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-all group/item"
                          >
                            <service.icon className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium">{service.name}</span>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              )}
            </div>

            {/* Portfolio Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("portfolio")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium py-2">
                Portfolio <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "portfolio" ? "rotate-180" : ""}`} />
              </button>
              
              {activeDropdown === "portfolio" && (
                <div className="absolute top-full left-0 pt-2 w-80 animate-fade-in">
                  <div className="bg-background border border-border rounded-xl shadow-2xl p-4">
                  <div className="space-y-1">
                    {portfolio.map((item) => (
                      <NavLink
                        key={item.href}
                        to={item.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary/10 hover:text-secondary transition-all group/item"
                      >
                        <item.icon className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-medium">{item.name}</span>
                      </NavLink>
                    ))}
                  </div>
                  </div>
                </div>
              )}
            </div>

            {/* Pages Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("pages")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium py-2">
                Pages <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "pages" ? "rotate-180" : ""}`} />
              </button>
              
              {activeDropdown === "pages" && (
                <div className="absolute top-full left-0 pt-2 w-72 animate-fade-in">
                  <div className="bg-background border border-border rounded-xl shadow-2xl p-4">
                  <div className="space-y-1">
                    {pages.map((page) => (
                      <NavLink
                        key={page.href}
                        to={page.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary/10 hover:text-primary transition-all group/item"
                      >
                        <page.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{page.name}</span>
                      </NavLink>
                    ))}
                  </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/blog"
              className="text-foreground hover:text-primary transition-colors font-medium py-2 relative group"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </NavLink>

            <NavLink
              to="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium py-2 relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </NavLink>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
              <span className="text-secondary font-semibold text-sm">Support:</span>
              <span className="text-foreground font-bold text-sm">+91 9250592505</span>
            </div>
            <ThemeToggle />
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="hidden lg:inline-flex bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all"
            >
              Get Started
            </Button>
            <button
              className="lg:hidden text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="flex flex-col gap-2">
              <NavLink
                to="/"
                className="text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>

              {/* Mobile Services Dropdown */}
              <div className="border-b border-border pb-2">
                <button
                  onClick={() => toggleMobileDropdown("services")}
                  className="flex items-center justify-between w-full text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-3 px-4 rounded-lg"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === "services" ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdown === "services" && (
                  <div className="mt-2 ml-4 space-y-1 animate-fade-in">
                    <p className="text-xs font-bold text-secondary uppercase px-4 py-2">Core Services</p>
                    {services.core.map((service) => (
                      <NavLink
                        key={service.href}
                        to={service.href}
                        className="flex items-center gap-2 text-sm py-2 px-4 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <service.icon className="w-4 h-4" />
                        {service.name}
                      </NavLink>
                    ))}
                    <p className="text-xs font-bold text-secondary uppercase px-4 py-2 mt-2">Additional Services</p>
                    {services.additional.map((service) => (
                      <NavLink
                        key={service.href}
                        to={service.href}
                        className="flex items-center gap-2 text-sm py-2 px-4 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <service.icon className="w-4 h-4" />
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Portfolio Dropdown */}
              <div className="border-b border-border pb-2">
                <button
                  onClick={() => toggleMobileDropdown("portfolio")}
                  className="flex items-center justify-between w-full text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-3 px-4 rounded-lg"
                >
                  Portfolio
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === "portfolio" ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdown === "portfolio" && (
                  <div className="mt-2 ml-4 space-y-1 animate-fade-in">
                    {portfolio.map((item) => (
                      <NavLink
                        key={item.href}
                        to={item.href}
                        className="flex items-center gap-2 text-sm py-2 px-4 text-muted-foreground hover:text-secondary hover:bg-secondary/10 rounded-lg transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <item.icon className="w-4 h-4" />
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Pages Dropdown */}
              <div className="border-b border-border pb-2">
                <button
                  onClick={() => toggleMobileDropdown("pages")}
                  className="flex items-center justify-between w-full text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-3 px-4 rounded-lg"
                >
                  Pages
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === "pages" ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdown === "pages" && (
                  <div className="mt-2 ml-4 space-y-1 animate-fade-in">
                    {pages.map((page) => (
                      <NavLink
                        key={page.href}
                        to={page.href}
                        className="flex items-center gap-2 text-sm py-2 px-4 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <page.icon className="w-4 h-4" />
                        {page.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/blog"
                className="text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </NavLink>

              <NavLink
                to="/contact"
                className="text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </NavLink>

              <div className="pt-4 px-4">
                <div className="flex items-center gap-2 text-sm mb-3 p-3 bg-muted rounded-lg">
                  <span className="text-secondary font-semibold">Support:</span>
                  <span className="text-foreground font-bold">+91 9250592505</span>
                </div>
                <Button 
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white shadow-lg"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Get Started Modal */}
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Header;
