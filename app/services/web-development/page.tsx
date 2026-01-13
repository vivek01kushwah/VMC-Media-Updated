
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import WebDevComponent from "@/components/services/WebDevelopment";

export const metadata: Metadata = {
  title: "Web Development & Digital Growth | SEO-Optimized Sites | VMC Media",
  description: "Build high-converting websites with expert web development. Responsive design, fast loading speeds, and integrated SEO for sustainable digital growth and increased revenue.",
  alternates: {
    canonical: 'https://vmcmedia.com/services/web-development',
  },
};

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <WebDevComponent />
      <Footer />
    </div>
  );
}

