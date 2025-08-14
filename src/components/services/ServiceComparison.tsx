import React from 'react';
import { FiHome, FiUser, FiBriefcase, FiZap, FiCheckCircle } from 'react-icons/fi';

const ServiceComparison = () => {
  const services = [
    {
      name: "FTTH",
      icon: <FiHome className="text-4xl text-blue-600 transition-transform duration-300 group-hover:scale-110" />,
      speed: "Up to 1 Gbps",
      bestFor: "Homes, Heavy Streaming",
      price: "₹750 - ₹2000/month",
      features: ["Fiber-optic technology", "Symmetrical speeds", "Future-proof", "Whole home coverage"]
    },
    {
      name: "Broadband",
      icon: <FiUser className="text-4xl text-purple-600 transition-transform duration-300 group-hover:scale-110" />,
      speed: "Up to 100 Mbps",
      bestFor: "Individuals, Families",
      price: "₹500 - ₹1500/month",
      features: ["Coaxial cable technology", "Burst speed technology", "Easy installation", "Cost-effective"]
    },
    {
      name: "Lease Line",
      icon: <FiBriefcase className="text-4xl text-indigo-600 transition-transform duration-300 group-hover:scale-110" />,
      speed: "Up to 10 Gbps",
      bestFor: "Businesses, Enterprises",
      price: "Custom Pricing",
      features: ["Dedicated bandwidth", "SLA guarantee", "Priority support", "Enhanced security"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="custom_container_padding">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Service Comparison
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Find the perfect internet solution for your needs
          </p>
        </div>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200"
            >
              <div className="p-8 flex flex-col items-center h-full">
                
                {/* Icon */}
                <div className="mb-5">{service.icon}</div>
                
                {/* Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                
                {/* Speed */}
                <div className="flex items-center text-gray-800 font-medium mb-4">
                  <FiZap className="mr-2 text-yellow-500" />
                  <span>{service.speed}</span>
                </div>
                
                {/* Best For */}
                <div className="mb-6 text-center">
                  <div className="text-sm text-gray-500">Best for</div>
                  <div className="font-medium text-gray-800">{service.bestFor}</div>
                </div>
                
                {/* Price */}
                <div className="mb-6 text-center">
                  <div className="text-sm text-gray-500">Price Range</div>
                  <div className="font-bold text-lg text-gray-900">{service.price}</div>
                </div>
                
                {/* Features */}
                <ul className="space-y-3 mb-8 max-w-xs">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <FiCheckCircle className="flex-shrink-0 w-5 h-5 text-green-600 mr-2" />
                      <span className="text-gray-700 text-left">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Button */}
                <button className="w-full max-w-xs py-3 rounded-lg font-bold transition-all duration-300 border border-gray-300 hover:bg-gray-100 text-gray-800">
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