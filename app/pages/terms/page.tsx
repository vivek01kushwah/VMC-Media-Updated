import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Terms & Conditions - VMC Media',
  description: 'Terms and conditions for using our services',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
<Header />
<section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: December 4, 2025</p>
            
            <h2>1. Agreement to Terms</h2>
            <p>By accessing our website, you agree to be bound by these terms of service and agree that you are responsible for compliance with any applicable local laws.</p>
            
            <h2>2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on VMC Media's website for personal, non-commercial transitory viewing only.</p>
            
            <h2>3. Disclaimer</h2>
            <p>The materials on VMC Media's website are provided on an 'as is' basis. VMC Media makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            
            <h2>4. Limitations</h2>
            <p>In no event shall VMC Media or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on VMC Media's website.</p>
            
            <h2>5. Revisions</h2>
            <p>The materials appearing on VMC Media's website could include technical, typographical, or photographic errors. VMC Media does not warrant that any of the materials on its website are accurate, complete or current.</p>
            
            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at Info@vmcmedia.in</p>
<Header />
</div>
        </div>
      </section>
<Footer />
</div>
  )
}

