'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "How quickly can you provide a quote for commercial HVAC maintenance?",
      answer: "Most quotes are provided within 2-4 hours during business hours. For urgent requests, our network contractors can often provide estimates within 1 hour. All initial consultations and estimates are completely free."
    },
    {
      question: "What areas of Cincinnati do you serve?",
      answer: "We serve the entire Greater Cincinnati area including downtown Cincinnati, Covington, Newport, Florence, Mason, West Chester, Fairfield, Hamilton, and surrounding communities within a 50-mile radius."
    },
    {
      question: "Are your contractors licensed and insured?",
      answer: "Yes, absolutely. Every contractor in our network is fully licensed, bonded, and insured. We verify all credentials before accepting contractors into our network and require proof of current insurance coverage."
    },
    {
      question: "What types of commercial properties do you service?",
      answer: "We service all types of commercial properties including office buildings, retail spaces, warehouses, manufacturing facilities, restaurants, medical facilities, schools, and multi-tenant buildings of all sizes."
    },
    {
      question: "Do you offer emergency HVAC services?",
      answer: "Yes, our network provides 24/7 emergency HVAC services. Emergency calls are typically responded to within 2 hours, with many contractors able to respond within 1 hour depending on location and availability."
    },
    {
      question: "What's included in a preventive maintenance plan?",
      answer: "Preventive maintenance typically includes quarterly system inspections, filter changes, coil cleaning, refrigerant level checks, electrical connection inspections, thermostat calibration, and detailed performance reports."
    },
    {
      question: "How much can I save with regular HVAC maintenance?",
      answer: "Regular maintenance can reduce energy costs by 15-30% and extend equipment life by 5-10 years. It also prevents 80% of major breakdowns, saving thousands in emergency repair costs."
    },
    {
      question: "Do you provide financing options for major repairs or replacements?",
      answer: "Many of our network contractors offer financing options for larger projects. We can also help you identify available rebates and incentives for energy-efficient equipment upgrades."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about commercial HVAC maintenance in Cincinnati
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-lg"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 p-8 bg-blue-600 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 mb-6">
              Our HVAC experts are standing by to help. Get personalized answers and a free consultation.
            </p>
            <button 
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
