import React, { useState } from 'react';
import { ArrowRight, Shield, Cloud, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state for video
  
  // Open and close the modal
  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Secure Your IoT and Cloud
            <span className="block text-sky-600">Infrastructure</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Protect your connected devices and cloud systems with advanced security solutions
            powered by AI and machine learning.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate('/solutions')} // Navigate to the Solutions page
              className="bg-sky-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-sky-700 transition-colors inline-flex items-center"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={handleModalOpen} // Open the modal on click
              className="border-2 border-sky-600 text-sky-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-sky-50 transition-colors"
            >
              Schedule Demo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 ">
            {[ 
              {
                icon: Shield,
                title: 'IoT Security',
                description:
                  'Protect your connected devices with real-time monitoring and threat detection',
              },
              {
                icon: Cloud,
                title: 'Cloud Protection',
                description:
                  'Secure your cloud infrastructure with advanced encryption and access controls',
              },
              {
                icon: Database,
                title: 'Data Security',
                description:
                  'Keep your sensitive data safe with state-of-the-art encryption and compliance',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
              >
                <feature.icon className="h-12 w-12 text-sky-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-8 rounded-lg max-w-4xl w-full">
            <button
              onClick={handleModalClose} // Close the modal
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              ✖
            </button>
            <iframe
            src="https://drive.google.com/file/d/1PueECkvQxkdh2s_sqc8GyDOmGK5QRNQL/preview?usp=sharing"
            width="100%"
            height="480"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="rounded-lg"
            style={{ display: 'block', margin: '0 auto' }}
            onContextMenu={(e) => e.preventDefault()} // Disable right-click
          ></iframe>


          </div>
        </div>
      )}

      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-sky-100 to-transparent opacity-50 transform rotate-12" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-sky-100 to-transparent opacity-50 transform -rotate-12" />
      </div>
    </div>
  );
};

export default Hero;
