import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Online Reputation Management | ORM Services | VMC Media',
  description: 'Protect and enhance your online reputation. Monitor reviews, manage negative content, build positive brand perception across the web.',
  alternates: {
    canonical: 'https://vmcmedia.com/services/orm',
  },
}

export default function ORMPage() {
  const ORMComponent = require('@/pages/services/ORM').default
  return (
    <div className="min-h-screen">
<Header />
<ORMComponent />
      <Footer />
    </div>
  )
}

