import React from 'react';
import { Shield, Lock, Bell, BarChart, Zap, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Threat Detection',
      description: 'AI-powered system that identifies and blocks sophisticated cyber threats in real-time.',
    },
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'Military-grade encryption for all your data, both in transit and at rest.',
    },
    {
      icon: Bell,
      title: '24/7 Monitoring',
      description: 'Round-the-clock surveillance of your systems with instant alert notifications.',
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive security analytics and reporting for informed decision-making.',
    },
    {
      icon: Zap,
      title: 'Quick Response',
      description: 'Automated incident response system for immediate threat neutralization.',
    },
    {
      icon: Users,
      title: 'Access Control',
      description: 'Granular access management with role-based permissions and authentication.',
    },
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Security Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Protect your digital assets with our suite of advanced security features
            designed for the modern connected world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow flex flex-col items-center text-center "
            >
              <feature.icon className="h-12 w-12 text-sky-600 mb-4 " />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;