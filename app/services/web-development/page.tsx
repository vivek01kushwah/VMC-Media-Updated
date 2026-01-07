
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import WebDevComponent from "@/components/services/WebDevelopment";

export const metadata: Metadata = {
  title: "Web Development - VMC Media",
  description: "Custom web development and design services",
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

