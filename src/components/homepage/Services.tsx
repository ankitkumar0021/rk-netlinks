// components/Services.jsx
import React from 'react';
import { FiWifi, FiShield, FiTool, FiGlobe, FiHeadphones } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiWifi className="text-4xl text-primary" />,
      title: "High-Speed Internet",
      description: "Fiber-optic connections with speeds up to 1 Gbps for seamless streaming, gaming, and working.",
      features: ["Unlimited data", "No throttling", "24/7 support"]
    },
    {
      icon: <FiShield className="text-4xl text-primary" />,
      title: "Business Solutions",
      description: "Dedicated connections with SLA guarantees, static IPs, and enhanced security for your business.",
      features: ["99.9% uptime", "Priority support", "Advanced security"]
    },
    {
      icon: <FiTool className="text-4xl text-primary" />,
      title: "Home Networking",
      description: "Complete home WiFi solutions with mesh networks and smart home integration.",
      features: ["Whole-home coverage", "Parental controls", "Seamless roaming"]
    },
    {
      icon: <FiGlobe className="text-4xl text-primary" />,
      title: "Managed Services",
      description: "Comprehensive IT solutions including cloud services, cybersecurity, and VoIP.",
      features: ["24/7 monitoring", "Proactive maintenance", "Expert technicians"]
    }
  ];

  return (
    <section className="space_from_top_large custom_container_padding">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="extra_large_text text-gray-800 mb-6">
          Our Internet Services
        </h2>
        <p className="text-xl text-gray-600">
          Cutting-edge solutions designed for homes and businesses of all sizes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="common_border bg-white hover:shadow-xl transition-all rounded-xl overflow-hidden"
          >
            <div className="p-6">
              <div className="mb-4">{service.icon}</div>
              <h3 className="large_text text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="text-green-500 mr-2 mt-1">✓</div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
              <button className="text-primary font-semibold hover:text-primary/80 flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Support Section */}
      <div className="common_border bg-gradient-to-r from-primary to-secondary rounded-2xl mt-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="p-8 lg:p-12">
            <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FiHeadphones className="text-white" />
              <span className="text-white font-medium">24/7 Support</span>
            </div>
            
            <h3 className="primary_text text-white mb-4">
              Expert Support When You Need It
            </h3>
            <p className="text-white/90 mb-6">
              Our team of networking experts is available around the clock to resolve any issues and answer your questions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Contact Support
              </button>
              <button className="bg-transparent border border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors">
                Community Forum
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block relative h-full">
            <div className="absolute inset-0 bg-gradient-to-l from-primary/30 to-secondary/30"></div>
            <div className="h-full w-full bg-gray-200 border-2 border-dashed" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;