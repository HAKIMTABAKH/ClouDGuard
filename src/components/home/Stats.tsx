import React from 'react';

const Stats = () => {
  const stats = [
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Monitoring' },
    { number: '500+', label: 'Clients' },
    { number: '50M+', label: 'Threats Blocked' },
  ];

  return (
    <div className="bg-sky-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sky-100 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;