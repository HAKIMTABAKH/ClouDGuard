import React, { useState } from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { ArrowRight, Check } from 'lucide-react';

const Solutions = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('healthcare');

  const industries = [
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'smart-homes', name: 'Smart Homes' },
    { id: 'retail', name: 'Retail' },
  ];

  const solutions = {
    healthcare: {
      title: 'Healthcare IoT Security',
      description: 'Protect patient data and medical devices with our specialized healthcare security solutions.',
      features: [
        'Medical Device Security',
        'HIPAA Compliance',
        'Patient Data Protection',
        'Real-time Monitoring',
      ],
    },
    manufacturing: {
      title: 'Industrial IoT Security',
      description: 'Secure your industrial IoT devices and maintain operational efficiency.',
      features: [
        'Industrial Control Systems',
        'Supply Chain Security',
        'OT Network Protection',
        'Predictive Maintenance',
      ],
    },
    'smart-homes': {
      title: 'Smart Home Security',
      description: 'Comprehensive protection for connected home devices and systems.',
      features: [
        'Device Authentication',
        'Network Security',
        'Privacy Protection',
        'Remote Monitoring',
      ],
    },
    retail: {
      title: 'Retail IoT Security',
      description: 'Secure your retail operations and protect customer data.',
      features: [
        'POS Security',
        'Inventory Tracking',
        'Customer Data Protection',
        'Payment Security',
      ],
    },
  };

  return (
    <div className="pt-16">
      <Container className="py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Industry Solutions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored security solutions for your specific industry needs
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setSelectedIndustry(industry.id)}
              className={`px-6 py-2 rounded-full ${
                selectedIndustry === industry.id
                  ? 'bg-sky-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {industry.name}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {solutions[selectedIndustry].title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {solutions[selectedIndustry].description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {solutions[selectedIndustry].features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-sky-600" />
                </div>
                <p className="ml-4 text-lg text-gray-700">{feature}</p>
              </div>
            ))}
          </div>

          <Button icon={ArrowRight}>Get Started</Button>
        </div>
      </Container>
    </div>
  );
};

export default Solutions;