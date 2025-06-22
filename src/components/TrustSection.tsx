import { Star, Award, Users, Clock, Shield } from 'lucide-react'

export default function TrustSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      number: "500+",
      label: "Commercial Clients Served"
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      number: "4.9",
      label: "Average Rating"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      number: "< 2hrs",
      label: "Emergency Response Time"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      number: "15+",
      label: "Years Experience"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Martinez",
      company: "Downtown Office Complex",
      text: "Exceptional service! They responded to our emergency call within an hour and had our system running by end of day. Couldn't ask for better service.",
      rating: 5
    },
    {
      name: "Mike Johnson", 
      company: "Cincinnati Manufacturing",
      text: "Their preventive maintenance program has saved us thousands. No more unexpected breakdowns during peak season. Highly recommended!",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "Retail Plaza Manager",
      text: "Professional, reliable, and competitive pricing. They've been maintaining our 50,000 sq ft facility for 3 years without issues.",
      rating: 5
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Trust Stats */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Cincinnati Businesses
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join hundreds of satisfied commercial property owners who trust our network for their HVAC needs.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-center text-gray-900 mb-8">
            Our Contractors Are Certified & Insured
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm mb-2">
                <Award className="w-8 h-8 text-blue-600 mx-auto" />
              </div>
              <span className="text-sm font-medium text-gray-700">Licensed & Bonded</span>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm mb-2">
                <Shield className="w-8 h-8 text-green-600 mx-auto" />
              </div>
              <span className="text-sm font-medium text-gray-700">Fully Insured</span>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm mb-2">
                <Users className="w-8 h-8 text-purple-600 mx-auto" />
              </div>
              <span className="text-sm font-medium text-gray-700">Background Checked</span>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm mb-2">
                <Star className="w-8 h-8 text-yellow-600 mx-auto" />
              </div>
              <span className="text-sm font-medium text-gray-700">Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
