// components/Features.jsx
import React from 'react';
import { FiWifi, FiZap, FiUpload, FiServer, FiPlay, FiDollarSign } from 'react-icons/fi';

const Features = () => {
  const features = [
    {
      icon: <FiWifi className="text-4xl text-blue-500" />,
      title: "UNLIMITED INTERNET",
      description: "No data caps or restrictions on your internet usage"
    },
    {
      icon: <FiZap className="text-4xl text-purple-500" />,
      title: "SUPER SPEED",
      description: "Blazing fast internet for streaming, gaming and working"
    },
    {
      icon: <FiUpload className="text-4xl text-indigo-500" />,
      title: "SIMILAR UPLOAD & DOWNLOAD",
      description: "Symmetrical speeds for seamless video calls and cloud backups"
    },
    {
      icon: <FiServer className="text-4xl text-blue-600" />,
      title: "INTERNET LEASED LINE",
      description: "Dedicated bandwidth for enterprises with SLA guarantees"
    },
    {
      icon: <FiPlay className="text-4xl text-purple-600" />,
      title: "NO BUFFERING",
      description: "Smooth streaming without interruptions or quality drops"
    },
    {
      icon: <FiDollarSign className="text-4xl text-indigo-600" />,
      title: "COST EFFECTIVE",
      description: "Premium services at affordable prices with no hidden costs"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="custom_container_padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose RK Netlinks?
          </h2>
          <p className="text-xl text-gray-600">
            Experience the difference with our customer-focused internet solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 hover:shadow-lg transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;