// components/MissionVision.jsx
import React from 'react';
import { FiGlobe, FiTarget, FiEye, FiUsers, FiLayers, FiZap, FiWifi } from 'react-icons/fi';

const MissionVision = () => {
  return (
    <section className="space_from_top_large custom_container_padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Mission Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-3 bg-primary/10 text-primary px-5 py-2 rounded-full">
            <FiTarget className="text-xl" />
            <span className="font-medium">Our Purpose</span>
          </div>
          
          <h2 className="extra_large_text text-gray-800">
            Connecting Communities, Empowering Futures
          </h2>
          
          <div className="space-y-6">
            <div className="flex">
              <div className="flex-shrink-0 mr-6">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
                  <FiGlobe className="text-2xl text-primary" />
                </div>
              </div>
              <div>
                <h3 className="large_text text-gray-800 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To deliver reliable, high-speed internet that bridges digital divides and 
                  enables individuals, businesses, and communities to thrive in a connected world.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-6">
                <div className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center">
                  <FiEye className="text-2xl text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="large_text text-gray-800 mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading catalyst for digital transformation, creating opportunities 
                  through innovative connectivity solutions that drive progress and prosperity.
                </p>
              </div>
            </div>
          </div>
          
          <div className="common_border bg-blue-50 rounded-xl p-6 mt-8">
            <div className="flex items-center">
              <div className="mr-4 text-primary">
                <FiZap className="text-3xl" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Network Commitment</h4>
                <p className="text-gray-600">
                  99.9% uptime guarantee with 24/7 monitoring and rapid response support
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Visual Representation */}
        <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 h-full min-h-[400px] flex items-center justify-center">
          <div className="relative z-10 text-center max-w-md">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-8">
              <FiWifi className="text-white text-4xl" />
            </div>
            <h3 className="large_text text-gray-800 mb-4">Fiber-Optic Excellence</h3>
            <p className="text-gray-600">
              Our state-of-the-art fiber network delivers unparalleled speed and reliability
            </p>
          </div>
          
          {/* Floating Stats */}
          <div className="absolute top-8 left-8 bg-white rounded-xl shadow-sm p-4 w-40">
            <div className="flex items-center">
              <div className="mr-3 text-primary">
                <FiUsers className="text-xl" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-800">15K+</div>
                <div className="text-gray-600">Connected</div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 right-8 bg-white rounded-xl shadow-sm p-4 w-40">
            <div className="flex items-center">
              <div className="mr-3 text-secondary">
                <FiLayers className="text-xl" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-800">650+</div>
                <div className="text-gray-600">Network Nodes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Core Values */}
      <div className="space_from_top_normal">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="large_text text-gray-800 mb-4">Our Core Principles</h3>
          <p className="text-gray-600">
            The foundation of everything we do at RK-NetLinks
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Reliability",
              description: "Consistent service you can depend on",
              color: "bg-blue-50",
              icon: <FiZap className="text-blue-500 text-2xl" />
            },
            {
              title: "Innovation",
              description: "Pioneering technologies for tomorrow",
              color: "bg-purple-50",
              icon: <FiLayers className="text-purple-500 text-2xl" />
            },
            {
              title: "Community",
              description: "Investing in the regions we serve",
              color: "bg-pink-50",
              icon: <FiUsers className="text-secondary text-2xl" />
            },
            {
              title: "Integrity",
              description: "Honest communication and transparency",
              color: "bg-indigo-50",
              icon: <FiGlobe className="text-indigo-500 text-2xl" />
            }
          ].map((value, index) => (
            <div 
              key={index} 
              className="common_border bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className={`${value.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Technology Commitment */}
      <div className="common_border bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl mt-16 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div>
            <h3 className="primary_text text-gray-800 mb-4">
              Future-Proof Technology Investment
            </h3>
            <p className="text-gray-600 mb-6">
              We continuously upgrade our infrastructure to deliver cutting-edge fiber-optic 
              solutions that meet tomorrow bandwidth demands today.
            </p>
            
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="common_border bg-white p-4 rounded-lg">
                <div className="text-xl font-bold text-primary">10 Gbps</div>
                <div className="text-gray-600">Future Capacity</div>
              </div>
              <div className="common_border bg-white p-4 rounded-lg">
                <div className="text-xl font-bold text-primary">FTTH</div>
                <div className="text-gray-600">Fiber to Every Home</div>
              </div>
              <div className="common_border bg-white p-4 rounded-lg">
                <div className="text-xl font-bold text-primary">5G Ready</div>
                <div className="text-gray-600">Backhaul Solutions</div>
              </div>
              <div className="common_border bg-white p-4 rounded-lg">
                <div className="text-xl font-bold text-primary">IPv6</div>
                <div className="text-gray-600">Next-Gen Protocol</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                <FiZap className="text-white text-2xl" />
              </div>
              <h4 className="font-bold text-gray-800">Network Expansion</h4>
              <p className="text-gray-600">500+ miles of new fiber in 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;