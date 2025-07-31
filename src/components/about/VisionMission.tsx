// components/about/VisionMission.jsx
import React from 'react';
import { FiEye, FiTarget, FiZap } from 'react-icons/fi';

const VisionMission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="custom_container_padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-start mb-10">
              <div className="flex-shrink-0 mr-6">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                  <FiTarget className="text-2xl text-blue-600" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-xl text-gray-600">
                  Enabling Bandwidth for More - To develop innovative products & solutions that help customers 
                  enjoy enhanced user experiences with More Speed, More Entertainment, More Productivity, 
                  More Time, More Fun, More Flexibility, More Devices, and Overall More value.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
                  <FiEye className="text-2xl text-purple-600" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-xl text-gray-600">
                  To improve the quality of internet service by enabling customers to enjoy more. 
                  We strive to be the most trusted and innovative internet service provider in India, 
                  connecting people and businesses to limitless possibilities.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 h-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Core Values</h3>
            
            <div className="space-y-6">
              {[
                {
                  icon: <FiZap className="text-2xl text-blue-600" />,
                  title: "Innovation",
                  description: "Constantly developing new solutions to enhance user experience"
                },
                {
                  icon: <FiZap className="text-2xl text-blue-600" />,
                  title: "Reliability",
                  description: "Providing consistent, high-quality service with 99.9% uptime"
                },
                {
                  icon: <FiZap className="text-2xl text-blue-600" />,
                  title: "Customer Focus",
                  description: "Putting our customers at the center of everything we do"
                },
                {
                  icon: <FiZap className="text-2xl text-blue-600" />,
                  title: "Integrity",
                  description: "Transparent operations and honest communication"
                },
                {
                  icon: <FiZap className="text-2xl text-blue-600" />,
                  title: "Community",
                  description: "Contributing to the digital growth of India"
                }
              ].map((value, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-4">{value.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
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

export default VisionMission;