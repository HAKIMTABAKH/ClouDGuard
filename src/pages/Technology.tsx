import React from 'react';
import Container from '../components/ui/Container';
import { Brain, Shield, Lock, Zap } from 'lucide-react';

const Technology = () => {
  const technologies = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Advanced AI algorithms for threat detection and prevention',
      details: [
        'Machine Learning Models',
        'Pattern Recognition',
        'Behavioral Analysis',
        'Predictive Security',
      ],
    },
    {
      icon: Shield,
      title: 'Advanced Encryption',
      description: 'Military-grade encryption for data protection',
      details: [
        'End-to-End Encryption',
        'Quantum-Ready Protocols',
        'Secure Key Management',
        'Zero-Knowledge Architecture',
      ],
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Sophisticated access management system',
      details: [
        'Multi-Factor Authentication',
        'Role-Based Access',
        'Biometric Security',
        'Single Sign-On',
      ],
    },
    {
      icon: Zap,
      title: 'Real-Time Monitoring',
      description: '24/7 system monitoring and instant alerts',
      details: [
        'Network Monitoring',
        'Threat Detection',
        'Performance Analytics',
        'Automated Response',
      ],
    },
  ];

  return (
    <div className="pt-16">
      <Container className="py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Technology</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cutting-edge security technologies protecting your digital assets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <tech.icon className="h-12 w-12 text-sky-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{tech.title}</h2>
              <p className="text-gray-600 mb-6">{tech.description}</p>
              <ul className="space-y-3">
                {tech.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-sky-600 rounded-full mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Technology;