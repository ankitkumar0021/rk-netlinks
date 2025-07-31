// components/services/FTTH.jsx
import React from 'react';
import { FiWifi, FiZap, FiDownload, FiPlay, FiTv } from 'react-icons/fi';

const FTTH = () => {
  const features = [
    { icon: <FiZap className="text-2xl text-blue-600" />, title: "Up to 1 Gbps", description: "Blazing fast speeds for all your needs" },
    { icon: <FiDownload className="text-2xl text-blue-600" />, title: "Symmetrical Speeds", description: "Equal upload and download speeds" },
    { icon: <FiPlay className="text-2xl text-blue-600" />, title: "Buffer-Free Streaming", description: "4K streaming without interruptions" },
    { icon: <FiTv className="text-2xl text-blue-600" />, title: "IPTV Ready", description: "Support for television services over fiber" },
    { icon: <FiWifi className="text-2xl text-blue-600" />, title: "Whole Home Coverage", description: "Mesh WiFi solutions available" },
    { icon: <FiZap className="text-2xl text-blue-600" />, title: "Future-Proof", description: "Scalable for future bandwidth needs" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="custom_container_padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              <span className="text-blue-600">Fiber to the Home</span> Services
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Experience the future of home internet with our FTTH service. Our fiber-optic network 
              delivers superior carrying capacity for high-demand applications like 4K streaming, 
              online gaming, and smart home connectivity.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                    <FiZap className="text-2xl text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Unmatched Speed & Reliability</h3>
                  <p className="text-gray-600">
                    Fiber technology provides significantly faster speeds and more reliable connections 
                    compared to traditional copper-based internet.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
                    <FiWifi className="text-2xl text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Future-Ready Infrastructure</h3>
                  <p className="text-gray-600">
                    Our fiber network is designed to meet tomorrow&apos;s bandwidth demands, ensuring your 
                    connection remains relevant for years to come.
                  </p>
                </div>
              </div>
            </div>
            
            <button className="mt-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all">
              View FTTH Plans
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">FTTH Features</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="common_border bg-white rounded-xl p-6 hover:shadow-md transition-all"
                >
                  <div className="flex items-start">
                    <div className="mt-1 mr-4">{feature.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FTTH;