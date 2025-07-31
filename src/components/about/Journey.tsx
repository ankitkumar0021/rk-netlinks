// components/about/Journey.jsx
import React from 'react';
import { FiZap, FiUsers, FiGlobe, FiAward } from 'react-icons/fi';

const Journey = () => {
  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "RK NEtlinks Solutions established with a vision to transform internet services in India",
      icon: <FiZap className="text-2xl text-blue-600" />
    },
    {
      year: "2013",
      title: "First FTTH Deployment",
      description: "Launched our flagship Fiber to the Home service in Bangalore",
      icon: <FiZap className="text-2xl text-blue-600" />
    },
    {
      year: "2016",
      title: "Expansion to 5 Cities",
      description: "Extended our services to Mumbai, Delhi, Chennai, Hyderabad, and Kolkata",
      icon: <FiUsers className="text-2xl text-purple-600" />
    },
    {
      year: "2018",
      title: "Enterprise Solutions Launch",
      description: "Introduced dedicated lease line services for businesses",
      icon: <FiGlobe className="text-2xl text-indigo-600" />
    },
    {
      year: "2020",
      title: "10,000+ Customers",
      description: "Reached the milestone of serving over 10,000 satisfied customers",
      icon: <FiAward className="text-2xl text-blue-600" />
    },
    {
      year: "2023",
      title: "15+ Cities Covered",
      description: "Expanded our network to cover 15+ major cities across India",
      icon: <FiGlobe className="text-2xl text-blue-600" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="custom_container_padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600">
            From a small startup to a leading internet service provider - our growth story
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'ml-0' : 'mr-0'}`}>
                  <div className={`common_border bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        {milestone.icon}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-blue-600">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-800">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;