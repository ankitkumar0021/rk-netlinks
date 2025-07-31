// components/services/Comparison.jsx
import React from 'react';
import { FiHome, FiUser, FiBriefcase, FiZap, FiDollarSign, FiShield } from 'react-icons/fi';

const ServiceComparison = () => {
  const services = [
    {
      name: "FTTH",
      icon: <FiHome className="text-3xl text-blue-600" />,
      speed: "Up to 1 Gbps",
      bestFor: "Homes, Heavy Streaming",
      price: "₹750 - ₹2000/month",
      features: ["Fiber-optic technology", "Symmetrical speeds", "Future-proof", "Whole home coverage"]
    },
    {
      name: "Broadband",
      icon: <FiUser className="text-3xl text-purple-600" />,
      speed: "Up to 100 Mbps",
      bestFor: "Individuals, Families",
      price: "₹500 - ₹1500/month",
      features: ["Coaxial cable technology", "Burst speed technology", "Easy installation", "Cost-effective"]
    },
    {
      name: "Lease Line",
      icon: <FiBriefcase className="text-3xl text-indigo-600" />,
      speed: "Up to 10 Gbps",
      bestFor: "Businesses, Enterprises",
      price: "Custom Pricing",
      features: ["Dedicated bandwidth", "SLA guarantee", "Priority support", "Enhanced security"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="custom_container_padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Service Comparison
          </h2>
          <p className="text-xl text-gray-600">
            Find the perfect internet solution for your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`common_border bg-white rounded-xl overflow-hidden ${
                service.name === "Lease Line" ? 'transform md:-translate-y-4 ring-2 ring-indigo-500' : ''
              }`}
            >
              <div className="p-8 text-center">
                <div className="mb-5">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.name}</h3>
                
                <div className="flex items-center justify-center text-gray-600 mb-4">
                  <FiZap className="mr-2" />
                  <span>{service.speed}</span>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-500">Best for</div>
                  <div className="font-medium">{service.bestFor}</div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-500">Price Range</div>
                  <div className="font-bold text-lg">{service.price}</div>
                </div>
                
                <ul className="space-y-3 mb-8 text-left">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="text-green-500 mr-2 mt-1">✓</div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-bold transition-colors ${
                  service.name === "Lease Line" 
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white' 
                    : 'common_border hover:bg-gray-50'
                }`}>
                  {service.name === "Lease Line" ? "Contact Sales" : "View Plans"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;