'use client'

import { useState } from 'react'
import { Building, MapPin, Phone, Mail, MessageCircle, Calendar } from 'lucide-react'

export default function LeadFormSection() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    propertyType: '',
    squareFootage: '',
    serviceNeeded: '',
    urgency: '',
    currentIssue: '',
    preferredContact: '',
    address: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Replace with actual Supabase submission
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="lead-form" className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-xl text-blue-100 mb-6">
              Your request has been received. A qualified HVAC contractor will contact you within 2 hours during business hours.
            </p>
            <div className="bg-blue-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">What happens next?</h3>
              <ul className="text-left space-y-2 text-blue-100">
                <li>• We'll match you with up to 3 qualified contractors</li>
                <li>• You'll receive calls within 2 hours</li>
                <li>• Get free estimates and compare options</li>
                <li>• Choose the best contractor for your needs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="lead-form" className="py-16 bg-blue-600">
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
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Full Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
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
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(513) 555-0123"
                  />
                </div>
              </div>

              {/* Property & Service Information */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type *
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    required
                    value={formData.propertyType}
                    onChange={handleInputChange}
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
                  <label htmlFor="squareFootage" className="block text-sm font-medium text-gray-700 mb-2">
                    Square Footage
                  </label>
                  <select
                    id="squareFootage"
                    name="squareFootage"
                    value={formData.squareFootage}
                    onChange={handleInputChange}
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
                  <label htmlFor="serviceNeeded" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="serviceNeeded"
                    name="serviceNeeded"
                    required
                    value={formData.serviceNeeded}
                    onChange={handleInputChange}
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
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Urgency</option>
                    <option value="emergency">Emergency (ASAP)</option>
                    <option value="urgent">Urgent (Within 24 hours)</option>
                    <option value="soon">Soon (Within 1 week)</option>
                    <option value="planning">Planning Ahead</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Full Width Fields */}
            <div className="mt-6 space-y-6">
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Property Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Street Address, City, State, ZIP"
                />
              </div>

              <div>
                <label htmlFor="currentIssue" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Issue or Additional Details
                </label>
                <textarea
                  id="currentIssue"
                  name="currentIssue"
                  rows={4}
                  value={formData.currentIssue}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your current HVAC situation, any specific issues, or questions you have..."
                />
              </div>

              <div>
                <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Method
                </label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Preference</option>
                  <option value="phone">Phone Call</option>
                  <option value="email">Email</option>
                  <option value="both">Either Phone or Email</option>
                </select>
              </div>
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
