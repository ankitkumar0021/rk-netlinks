// components/about/Journey.jsx
import React from 'react';
import { FiZap, FiUsers, FiGlobe, FiAward } from 'react-icons/fi';

const Journey = () => {
  const milestones = [
    { year: '2010', title: 'Company Founded', description: 'RK Netlinks Solutions established with a vision to transform internet services in India', icon: <FiZap className="text-4xl text-blue-600" /> },
    { year: '2013', title: 'First FTTH Deployment', description: 'Launched our flagship Fiber to the Home service in Bangalore', icon: <FiZap className="text-4xl text-blue-600" /> },
    { year: '2016', title: 'Expansion to 5 Cities', description: 'Extended our services to Mumbai, Delhi, Chennai, Hyderabad, and Kolkata', icon: <FiUsers className="text-4xl text-purple-600" /> },
    { year: '2018', title: 'Enterprise Solutions Launch', description: 'Introduced dedicated lease line services for businesses', icon: <FiGlobe className="text-4xl text-indigo-600" /> },
    { year: '2020', title: '10,000+ Customers', description: 'Reached the milestone of serving over 10,000 customers', icon: <FiAward className="text-4xl text-blue-600" /> },
    { year: '2023', title: '15+ Cities Covered', description: 'Expanded our network to cover 15+ major cities across India', icon: <FiGlobe className="text-4xl text-blue-600" /> },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="custom_container_padding">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600">From a small startup to a leading internet service provider — here’s how we grew</p>
        </div>

        {/* Cards: horizontal scroll on mobile, equal-sized grid on lg+ */}
        <div className="flex gap-6 overflow-x-auto snap-x pb-4 lg:grid lg:grid-cols-3 lg:gap-6 lg:items-stretch">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative flex-shrink-0 snap-start lg:flex-1">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 text-center relative z-10 min-w-[260px] lg:min-w-0 h-full flex flex-col">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white to-blue-50 flex items-center justify-center ring-1 ring-gray-100 shadow-sm">
                    {milestone.icon}
                  </div>
                </div>

                <div className="text-sm font-bold text-blue-600">{milestone.year}</div>
                <h3 className="text-lg font-semibold text-gray-800 mt-2">{milestone.title}</h3>
                <p className="text-gray-600 text-sm mt-3 flex-grow">{milestone.description}</p>

                <div className="mt-4">
                  <span className="inline-block px-3 py-1 text-xs text-gray-600 bg-gray-100 rounded-full">Milestone</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
