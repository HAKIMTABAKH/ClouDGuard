import React from 'react';
import { Shield, Cloud, Lock, Zap } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'IoT Security',
      description: 'Comprehensive protection for all your connected devices with real-time monitoring and threat detection.',
      features: ['Device Authentication', 'Firmware Security', 'Network Protection', 'Vulnerability Assessment'],
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      description: 'Enterprise-grade security for your cloud infrastructure and applications.',
      features: ['Access Control', 'Data Encryption', 'Compliance Management', 'Cloud Monitoring'],
    },
    {
      icon: Lock,
      title: 'Behavior Anomaly Detection',
      description: 'AI-powered system to detect and prevent suspicious activities across your network.',
      features: ['Machine Learning', 'Pattern Recognition', 'Automated Response', 'Threat Intelligence'],
    },
    {
      icon: Zap,
      title: 'Risk Management',
      description: 'Proactive risk assessment and management for your entire digital infrastructure.',
      features: ['Risk Assessment', 'Compliance Reporting', 'Security Audits', 'Incident Response'],
    },
  ];

  return (
    <div className="pt-16">
      <Container className="py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive security solutions for your IoT and cloud infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="h-12 w-12 text-sky-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-sky-600 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline">Learn More</Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;