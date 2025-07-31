// components/about/WhyChoose.jsx
import React from 'react';
import { FiZap, FiWifi, FiServer, FiUser, FiAward, FiShield } from 'react-icons/fi';

const WhyChoose = () => {
  const reasons = [
    {
      icon: <FiZap className="text-3xl text-blue-600" />,
      title: "Cutting-Edge Technology",
      description: "Our fiber-optic network delivers unparalleled speed and reliability"
    },
    {
      icon: <FiWifi className="text-3xl text-purple-600" />,
      title: "Wide Coverage",
      description: "Serving homes and businesses across 15+ major Indian cities"
    },
    {
      icon: <FiServer className="text-3xl text-indigo-600" />,
      title: "Enterprise Solutions",
      description: "Dedicated bandwidth for businesses with SLA guarantees"
    },
    {
      icon: <FiUser className="text-3xl text-blue-600" />,
      title: "Customer-Centric Approach",
      description: "24/7 support with personalized service for every customer"
    },
    {
      icon: <FiAward className="text-3xl text-purple-600" />,
      title: "Award-Winning Service",
      description: "Recognized as India's most trusted ISP for 3 consecutive years"
    },
    {
      icon: <FiShield className="text-3xl text-indigo-600" />,
      title: "Secure Connectivity",
      description: "Enterprise-grade security protocols to protect your data"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="custom_container_padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose RK Netlinks?
          </h2>
          <p className="text-xl text-gray-600">
            Discover what sets us apart in the competitive telecommunications landscape
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="common_border bg-white rounded-xl p-8 hover:shadow-lg transition-all"
            >
              <div className="mb-5">{reason.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;