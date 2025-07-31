// components/contact/SupportTeam.jsx
import React from 'react';
import { FiPhone, FiMail, FiMessageSquare } from 'react-icons/fi';

const SupportTeam = () => {
  const supportOptions = [
    {
      icon: <FiPhone className="text-3xl text-blue-600" />,
      title: "Phone Support",
      description: "Speak directly with our support agents for immediate assistance",
      details: "+91 1324657980",
      action: "Call Now"
    },
    {
      icon: <FiMail className="text-3xl text-purple-600" />,
      title: "Email Support",
      description: "Send us your queries and we'll respond within 24 hours",
      details: "support@rknetlinks.com",
      action: "Send Email"
    },
    {
      icon: <FiMessageSquare className="text-3xl text-indigo-600" />,
      title: "Live Chat",
      description: "Instant messaging support through our website",
      details: "Available 24/7",
      action: "Start Chat"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="custom_container_padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact Our Support Team
          </h2>
          <p className="text-xl text-gray-600">
            Multiple ways to get in touch with our dedicated support specialists
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <div 
              key={index} 
              className="common_border bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all"
            >
              <div className="mb-5">{option.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{option.title}</h3>
              <p className="text-gray-600 mb-6">{option.description}</p>
              
              <div className="text-lg font-medium text-gray-800 mb-6">{option.details}</div>
              
              <button className="w-full common_border bg-white hover:bg-gray-50 text-gray-800 font-bold py-3 px-8 rounded-lg transition-colors">
                {option.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportTeam;