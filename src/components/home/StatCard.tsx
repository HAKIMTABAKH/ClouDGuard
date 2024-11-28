import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {number}
      </div>
      <div className="text-sky-100 text-lg">{label}</div>
    </div>
  );
};

export default StatCard;