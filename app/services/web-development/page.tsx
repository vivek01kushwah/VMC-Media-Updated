'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebDevComponent from "@/components/services/WebDevelopment";

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <WebDevComponent />
      <Footer />
    </div>
  );
}

