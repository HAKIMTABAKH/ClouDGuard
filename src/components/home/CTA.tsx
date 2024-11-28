import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Use for navigation

const CTA = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Secure Your Digital Future?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of companies that trust us with their IoT and cloud security.
            Get started with a free security assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-started">
              <button 
                className="bg-sky-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-sky-700 transition-colors inline-flex items-center justify-center"
                aria-label="Get Started with Free Security Assessment"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
            <Link to="/contact-us">
              <button 
                className="border-2 border-sky-600 text-sky-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-sky-50 transition-colors"
                aria-label="Contact Sales"
              >
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
