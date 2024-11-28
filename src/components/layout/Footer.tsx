import {  Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
            <img src="/images/logo.png" alt="CloudGuard Logo" className="h-10 w-10" />
              <span className="ml-2 text-xl font-semibold text-white">CloudGuard</span>
            </div>
            <p className="text-sm">
              Leading provider of IoT and cloud security solutions, protecting your digital assets
              24/7 with advanced AI-powered security.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Services', 'Solutions', 'Technology', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-sky-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'IoT Security',
                'Cloud Protection',
                'Threat Detection',
                'Compliance',
                'Consulting',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-sky-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:contact@secureiot.com" className="hover:text-sky-500">
                  contact@cloudguard.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+1234567890" className="hover:text-sky-500">
                  +216 23 170 693 / 75 225 224
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Gabes</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>© {currentYear} CloudGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;