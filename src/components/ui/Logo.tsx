import React from 'react';
import { Shield } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Shield className="h-8 w-8 text-sky-600" />
      <span className="ml-2 text-xl font-semibold text-gray-900">SecureIoT</span>
    </div>
  );
};

export default Logo;