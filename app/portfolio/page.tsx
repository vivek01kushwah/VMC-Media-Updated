'use client'

import { useEffect } from 'react';

export default function PortfolioRedirect() {
  useEffect(() => {
    // Redirect to home and scroll to portfolio section
    window.location.href = '/#portfolio';
    
    // Alternative: scroll after redirect
    setTimeout(() => {
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-muted-foreground">Redirecting to portfolio...</p>
    </div>
  );
}
