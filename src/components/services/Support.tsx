// components/services/Support.jsx
import React from 'react';
import { FiPhone, FiTool, FiClock } from 'react-icons/fi';

const Support = () => {
  const supportOptions = [
    {
      icon: <FiPhone className="text-3xl text-blue-600" />,
      title: "24/7 Phone Support",
      description: "Immediate assistance from our technical experts",
      contact: "+91 98765 43210"
    },
    // {
    //   icon: <FiMessageSquare className="text-3xl text-purple-600" />,
    //   title: "Live Chat",
    //   description: "Instant messaging support through our website",
    //   contact: "Chat Now"
    // },
    {
      icon: <FiTool className="text-3xl text-indigo-600" />,
      title: "On-Site Support",
      description: "Technical assistance at your premises",
      contact: "Schedule Visit"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="custom_container_padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Unmatched <span className="text-blue-600">Customer Support</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Our 24/7 customer support ensures you get the most out of your internet service. 
              Whether you need technical assistance, billing help, or service information, 
              our dedicated team is always ready to help.
            </p>
            
            <div className="flex items-center bg-blue-50 rounded-xl p-6 mb-8">
              <FiClock className="text-blue-600 text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">24/7 Availability</h3>
                <p className="text-gray-600">
                  Our support team is available round the clock, 365 days a year
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">15 min</div>
                <div className="text-gray-600">Average Response Time</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Support Options</h3>
            
            <div className="space-y-6">
              {supportOptions.map((option, index) => (
                <div 
                  key={index} 
                  className="common_border bg-white rounded-xl p-6 hover:shadow-md transition-all"
                >
                  <div className="flex items-start">
                    <div className="mt-1 mr-4">{option.icon}</div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{option.title}</h4>
                      <p className="text-gray-600 mb-4">{option.description}</p>
                      <button className="text-blue-600 font-semibold flex items-center">
                        {option.contact}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
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

export default Support;