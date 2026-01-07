import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Online Reputation Management - VMC Media',
  description: 'Protect and enhance your online reputation',
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

