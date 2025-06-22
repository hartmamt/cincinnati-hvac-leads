import { Shield, Clock, CheckCircle, Users, Award, Phone } from 'lucide-react';

export default function TrustSection() {
  const guarantees = [
    {
      icon: Shield,
      title: "Licensed & Insured Only",
      description: "All our partner contractors are fully licensed, bonded, and carry comprehensive insurance for your protection."
    },
    {
      icon: Clock,
      title: "24-Hour Response",
      description: "Get connected with qualified contractors within 24 hours, with emergency services available for urgent needs."
    },
    {
      icon: CheckCircle,
      title: "No Obligation Quotes",
      description: "Receive free, detailed estimates with no commitment. Compare options and choose what&apos;s best for your business."
    },
    {
      icon: Users,
      title: "Pre-Screened Partners",
      description: "Every contractor in our network has been vetted for quality, reliability, and customer service excellence."
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "We only work with contractors who maintain high standards and positive track records in commercial HVAC."
    },
    {
      icon: Phone,
      title: "Local Cincinnati Focus",
      description: "All contractors are based in Greater Cincinnati and understand local building codes and climate needs."
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Submit Your Request",
      description: "Fill out our quick form with your HVAC needs and business details."
    },
    {
      step: "2",
      title: "Get Matched",
      description: "We connect you with up to 3 qualified contractors in your area."
    },
    {
      step: "3",
      title: "Compare & Choose",
      description: "Review quotes and select the contractor that best fits your needs."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service Guarantees */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Service Guarantees
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We&apos;re committed to connecting Cincinnati businesses with the highest quality HVAC contractors. 
            Here&apos;s what you can expect when you work with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => {
            const IconComponent = guarantee.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-gray-900">
                    {guarantee.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {guarantee.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* How It Works Process */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Getting connected with quality HVAC contractors is simple and fast.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Industry Stats */}
        <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">Why Choose Professional HVAC Maintenance?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">40%</div>
              <p className="text-blue-100">Average savings on energy costs with regular maintenance</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">85%</div>
              <p className="text-blue-100">Reduction in emergency breakdowns with preventive care</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
              <p className="text-blue-100">Years extended equipment lifespan with proper maintenance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
