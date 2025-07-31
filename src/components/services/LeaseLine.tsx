// components/services/LeaseLine.jsx
import React from 'react';
import { FiServer, FiShield, FiBarChart, FiGlobe, FiUpload, FiDownload } from 'react-icons/fi';

const LeaseLine = () => {
  const features = [
    { icon: <FiBarChart className="text-2xl text-indigo-600" />, title: "Dedicated Bandwidth", description: "Guaranteed speeds not shared with other users" },
    { icon: <FiShield className="text-2xl text-indigo-600" />, title: "SLA Guarantee", description: "99.9% uptime with service level agreements" },
    { icon: <FiGlobe className="text-2xl text-indigo-600" />, title: "Symmetrical Speeds", description: "Equal upload and download speeds" },
    { icon: <FiUpload className="text-2xl text-indigo-600" />, title: "Priority Support", description: "24/7 dedicated technical assistance" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="custom_container_padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Enterprise <span className="text-indigo-600">Lease Line</span> Services
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Our lease line services enable high-speed communication and collaboration for 
              businesses with dedicated bandwidth. Ideal for enterprises that require reliable, 
              symmetrical internet connectivity for critical operations.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center">
                    <FiServer className="text-2xl text-indigo-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Business-Grade Reliability</h3>
                  <p className="text-gray-600">
                    Ensure uninterrupted operations with our SLA-backed connectivity solutions 
                    designed for mission-critical applications.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                    <FiShield className="text-2xl text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Enhanced Security</h3>
                  <p className="text-gray-600">
                    Benefit from enterprise-grade security protocols to protect your business data 
                    and communications.
                  </p>
                </div>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all">
              Request a Business Quote
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Lease Line Advantages</h3>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="common_border bg-white rounded-xl p-6 hover:shadow-md transition-all"
                >
                  <div className="flex items-start">
                    <div className="mt-1 mr-4">{feature.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-indigo-50 rounded-xl">
              <div className="flex items-center">
                <FiGlobe className="text-indigo-600 text-2xl mr-3" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Global Connectivity</h4>
                  <p className="text-gray-600">
                    Seamless connectivity to global offices and cloud services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaseLine;