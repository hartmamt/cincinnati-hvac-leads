'use client'

import { Phone, MapPin, Clock } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Cincinnati's #1
                <span className="block text-yellow-400">Commercial HVAC</span>
                Maintenance Network
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Get instant quotes from verified HVAC contractors. Save up to 30% on preventive maintenance contracts for your commercial property.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">24/7 Emergency</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Greater Cincinnati</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Free Estimates</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get Your Free Quote Now
              </button>
            </div>
          </div>

          {/* Right Column - Quick Form Preview */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-center">Quick Quote Request</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Business Name</label>
                <div className="bg-white/20 rounded p-3 text-white/60">
                  Your Company Name
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Property Type</label>
                <div className="bg-white/20 rounded p-3 text-white/60">
                  Office, Retail, Warehouse...
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Service Needed</label>
                <div className="bg-white/20 rounded p-3 text-white/60">
                  Maintenance, Repair, Installation...
                </div>
              </div>
              <button 
                onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 rounded-lg transition-colors duration-200"
              >
                Continue to Full Form →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
