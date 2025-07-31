// components/services/Broadband.jsx
import React from 'react';
import { FiWifi, FiZap, FiDownload, FiUser, FiHome, FiDollarSign } from 'react-icons/fi';

const Broadband = () => {
  const benefits = [
    { icon: <FiZap className="text-2xl text-purple-600" />, title: "High-Speed Connectivity", description: "Fast internet for browsing, streaming, and working" },
    { icon: <FiHome className="text-2xl text-purple-600" />, title: "Easy Installation", description: "Quick setup with minimal disruption" },
    { icon: <FiDollarSign className="text-2xl text-purple-600" />, title: "Cost-Effective", description: "Affordable plans for every budget" },
    { icon: <FiUser className="text-2xl text-purple-600" />, title: "Flexible Plans", description: "Options to suit different usage needs" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="custom_container_padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Broadband Features</h3>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start"
                  >
                    <div className="mt-1 mr-4">{benefit.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <div className="flex items-center">
                  <FiZap className="text-blue-600 text-2xl mr-3" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Burst Speed Technology</h4>
                    <p className="text-gray-600">
                      Extra speed boost for your most accessed websites and applications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              High-Speed <span className="text-purple-600">Broadband</span> Services
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Our broadband services provide burstable speed in each subscription for the most 
              accessible websites. Enjoy reliable connectivity for everyday internet needs at 
              competitive prices.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <FiDownload className="text-xl text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Perfect for Home Use</h3>
                  <p className="text-gray-600">
                    Ideal for streaming, browsing, working from home, and online learning
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <FiWifi className="text-xl text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Easy to Install</h3>
                  <p className="text-gray-600">
                    Quick installation process with minimal disruption to your home
                  </p>
                </div>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-all">
              View Broadband Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Broadband;