// components/Services.jsx
import React from 'react';
import { FiWifi, FiZap, FiServer } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiWifi className="text-4xl text-blue-500" />,
      title: "FTTH Services",
      description: "Fiber to the Home with superior carrying capacity for high-demand applications",
      features: ["Blazing fast speeds", "Low latency", "Future-proof technology"]
    },
    {
      icon: <FiZap className="text-4xl text-purple-500" />,
      title: "Broadband Services",
      description: "High-speed internet with burstable speed for most accessed websites",
      features: ["Flexible plans", "Unlimited data", "Easy installation"]
    },
    {
      icon: <FiServer className="text-4xl text-indigo-500" />,
      title: "Lease Line Services",
      description: "Dedicated bandwidth for enterprises enabling high-speed communication",
      features: ["SLA guaranteed", "Symmetrical speeds", "Priority support"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="custom_container_padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Internet Solutions
          </h2>
          <p className="text-xl text-gray-600">
            Tailored services for homes and businesses to experience More Speed, More Entertainment, More Productivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="common_border bg-gradient-to-b from-white to-blue-50 rounded-xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="p-8">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="text-green-500 mr-2 mt-1">✓</div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 px-8 py-4 border-t border-blue-100">
                <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;