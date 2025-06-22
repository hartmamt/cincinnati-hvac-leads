'use client'

import { useState } from 'react'
import { Building, Phone, Calendar } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function LeadFormSection() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    buildingType: '',
    buildingSize: '',
    serviceType: '',
    timeline: '',
    preferredContact: '',
    additionalDetails: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    try {
      // Submit lead to Supabase
      const { data, error: supabaseError } = await supabase
        .from('leads')
        .insert([
          {
            company_name: formData.companyName,
            contact_name: formData.contactName,
            phone: formData.phone,
            email: formData.email || null,
            building_type: formData.buildingType,
            building_size: formData.buildingSize,
            service_type: formData.serviceType,
            timeline: formData.timeline,
            preferred_contact: formData.preferredContact,
            additional_details: formData.additionalDetails || null,
            source: 'website',
            user_agent: navigator.userAgent
          }
        ])
        .select()

      if (supabaseError) {
        throw supabaseError
      }

      console.log('Lead saved:', data)
      setSubmitted(true)
      
      // Reset form
      setFormData({
        companyName: '',
        contactName: '',
        phone: '',
        email: '',
        buildingType: '',
        buildingSize: '',
        serviceType: '',
        timeline: '',
        preferredContact: '',
        additionalDetails: ''
      })
    } catch (err) {
      console.error('Error submitting lead:', err)
      setError(err instanceof Error ? err.message : 'Failed to submit lead. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="get-quote" className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-xl text-blue-100 mb-6">
              You&apos;ll receive calls within 2 hours
            </p>
            <div className="bg-blue-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">What happens next?</h3>
              <ul className="text-left space-y-2 text-blue-100">
                <li>• We&apos;ll match you with up to 3 qualified contractors</li>
                <li>• You&apos;ll receive calls within 2 hours</li>
                <li>• Get free estimates and compare options</li>
                <li>• Choose the best contractor for your needs</li>
              </ul>
            </div>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-6 text-blue-200 hover:text-white underline"
            >
              Submit another request
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="get-quote" className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get Your Free HVAC Quote
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Fill out the form below and get connected with up to 3 qualified HVAC contractors in Cincinnati
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>2-hour response</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>No obligation quotes</span>
              </div>
              <div className="flex items-center">
                <Building className="w-4 h-4 mr-2" />
                <span>Licensed contractors</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Business Information */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Full Name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(513) 555-0123"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Property & Service Information */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="buildingType" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type *
                  </label>
                  <select
                    id="buildingType"
                    name="buildingType"
                    required
                    value={formData.buildingType}
                    onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Property Type</option>
                    <option value="office">Office Building</option>
                    <option value="retail">Retail Space</option>
                    <option value="warehouse">Warehouse</option>
                    <option value="manufacturing">Manufacturing Facility</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="medical">Medical Facility</option>
                    <option value="school">School/Education</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="buildingSize" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Size
                  </label>
                  <select
                    id="buildingSize"
                    name="buildingSize"
                    value={formData.buildingSize}
                    onChange={(e) => setFormData({ ...formData, buildingSize: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Size</option>
                    <option value="under-5000">Under 5,000 sq ft</option>
                    <option value="5000-15000">5,000 - 15,000 sq ft</option>
                    <option value="15000-50000">15,000 - 50,000 sq ft</option>
                    <option value="over-50000">Over 50,000 sq ft</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Service</option>
                    <option value="maintenance">Preventive Maintenance</option>
                    <option value="repair">Repair Existing System</option>
                    <option value="installation">New Installation</option>
                    <option value="replacement">System Replacement</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="consultation">Consultation Only</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Timeline</option>
                    <option value="asap">Emergency (ASAP)</option>
                    <option value="within_week">Within 1 Week</option>
                    <option value="within_month">Within 1 Month</option>
                    <option value="planning_ahead">Planning Ahead</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Full Width Fields */}
            <div className="mt-6 space-y-6">
              <div>
                <label htmlFor="additionalDetails" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="additionalDetails"
                  name="additionalDetails"
                  rows={4}
                  value={formData.additionalDetails}
                  onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your current HVAC situation, any specific issues, or questions you have..."
                />
              </div>

              <div>
                <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Method *
                </label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  required
                  value={formData.preferredContact}
                  onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Preference</option>
                  <option value="phone">Phone Call</option>
                  <option value="email">Email</option>
                  <option value="text">Text Message</option>
                </select>
              </div>

              {/* Error Display */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex">
                    <div className="text-red-800">
                      <strong>Error:</strong> {error}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold text-lg py-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Get My Free Quotes'
                )}
              </button>
              <p className="text-sm text-gray-600 text-center mt-3">
                By submitting this form, you agree to be contacted by up to 3 HVAC contractors via phone, email, or text. No spam, guaranteed.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
