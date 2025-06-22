import { Wrench, Shield, Clock, DollarSign, Users, CheckCircle } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Preventive Maintenance",
      description: "Regular inspections, filter changes, and system tune-ups to prevent costly breakdowns.",
      features: ["Quarterly inspections", "Filter replacement", "Performance optimization"]
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Emergency Repairs",
      description: "24/7 emergency service for when your HVAC system fails unexpectedly.",
      features: ["24/7 availability", "Same-day service", "Licensed technicians"]
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: "System Upgrades",
      description: "Energy-efficient system installations and upgrades to reduce operating costs.",
      features: ["Energy audits", "Equipment financing", "Rebate assistance"]
    }
  ]

  const benefits = [
    "Licensed & Insured Contractors",
    "Competitive Pricing",
    "Same-Day Service Available",
    "Preventive Maintenance Plans",
    "Energy Efficiency Focus",
    "Local Cincinnati Experts"
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Commercial HVAC Services in Cincinnati
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine maintenance to emergency repairs, our verified contractors provide comprehensive HVAC solutions for businesses across Greater Cincinnati.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-bold text-gray-900 ml-3">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our HVAC Network?
              </h3>
              <p className="text-gray-600 mb-6">
                We connect you with Cincinnati&apos;s most trusted commercial HVAC contractors. Every partner in our network is thoroughly vetted for quality, reliability, and customer satisfaction.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-2">
                  <Clock className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="font-bold text-gray-900">Fast Response</span>
                </div>
                <p className="text-gray-600">Average response time under 2 hours for emergency calls</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center mb-2">
                  <Users className="w-6 h-6 text-green-600 mr-2" />
                  <span className="font-bold text-gray-900">Trusted Network</span>
                </div>
                <p className="text-gray-600">500+ satisfied commercial clients across Cincinnati</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
