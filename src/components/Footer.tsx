import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Cincinnati Commercial HVAC</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connecting Cincinnati businesses with trusted, licensed HVAC contractors for maintenance, repairs, and installations.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>(513) 555-HVAC</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@cincycommercialhvac.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Preventive Maintenance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Emergency Repairs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">System Installation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Equipment Replacement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Energy Audits</a></li>
            </ul>
          </div>

          {/* Coverage Areas */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Coverage Areas</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Downtown Cincinnati</li>
              <li>Covington, KY</li>
              <li>Newport, KY</li>
              <li>Florence, KY</li>
              <li>Mason, OH</li>
              <li>West Chester, OH</li>
              <li>Hamilton, OH</li>
              <li>Fairfield, OH</li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Business Hours</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <div>
                  <div>Mon-Fri: 7:00 AM - 6:00 PM</div>
                  <div>Sat: 8:00 AM - 4:00 PM</div>
                  <div>Sun: Emergency Only</div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <div className="text-yellow-400 font-semibold text-sm">24/7 Emergency Service</div>
              <div className="text-gray-300 text-xs">Available for urgent HVAC issues</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-sm text-gray-400">
              © 2024 Cincinnati Commercial HVAC. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400 md:justify-end">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          {/* License Info */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center">
              All contractors in our network are independently licensed and insured. 
              Cincinnati Commercial HVAC acts as a lead generation service and is not responsible for the work performed by individual contractors.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
