'use client'

import { useEffect } from 'react';

export default function PortfolioRedirect() {
  useEffect(() => {
    // Redirect to home page with portfolio section
    window.location.href = '/#portfolio';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-muted-foreground">Redirecting to portfolio...</p>
    </div>
  );
}
