import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import FAQSection from '@/components/FAQSection'
import TrustSection from '@/components/TrustSection'
import LeadFormSection from '@/components/LeadFormSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cincinnati Commercial HVAC Maintenance | Get Instant Quotes',
  description: 'Professional commercial HVAC maintenance services in Cincinnati. Get instant quotes from verified contractors. Save up to 30% on preventive maintenance contracts.',
  keywords: 'Cincinnati commercial HVAC, HVAC maintenance, commercial air conditioning, heating repair, Cincinnati contractors',
  openGraph: {
    title: 'Cincinnati Commercial HVAC Maintenance | Get Instant Quotes',
    description: 'Professional commercial HVAC maintenance services in Cincinnati. Get instant quotes from verified contractors.',
    url: 'https://cincycommercialhvac.com',
    siteName: 'Cincinnati Commercial HVAC',
    locale: 'en_US',
    type: 'website',
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <FAQSection />
      <LeadFormSection />
      <Footer />
    </main>
  )
}
