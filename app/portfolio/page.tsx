'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PortfolioRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page
    router.push('/#portfolio');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-muted-foreground">Redirecting to portfolio...</p>
    </div>
  );
}
