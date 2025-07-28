// components/Coverage.jsx
'use client'
import React, { useState } from 'react';
import { FiMapPin, FiSearch, FiWifi, FiClock, FiZap } from 'react-icons/fi';

const Coverage = () => {
  const [activeTab, setActiveTab] = useState('residential');
  const [address, setAddress] = useState('');
  
  const coverageAreas = [
    { city: "San Francisco", status: "available", speed: "1 Gbps" },
    { city: "San Jose", status: "available", speed: "500 Mbps" },
    { city: "Oakland", status: "available", speed: "300 Mbps" },
    { city: "Palo Alto", status: "expanding", speed: "Coming Soon" },
    { city: "Mountain View", status: "expanding", speed: "Coming Soon" },
    { city: "Berkeley", status: "available", speed: "1 Gbps" },
    { city: "Sunnyvale", status: "available", speed: "500 Mbps" },
    { city: "Santa Clara", status: "expanding", speed: "Coming Soon" },
    { city: "Redwood City", status: "coming soon", speed: "Early 2024" },
    { city: "Fremont", status: "available", speed: "300 Mbps" },
    { city: "Hayward", status: "coming soon", speed: "Mid 2024" },
    { city: "Concord", status: "coming soon", speed: "Late 2024" },
  ];

  const checkAvailability = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, this would call an API
    alert(`Checking availability for: ${address}`);
  };

  return (
    <section className="space_from_top_large custom_container_padding">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="extra_large_text text-gray-800 mb-6">
          Our Fiber Network Coverage
        </h2>
        <p className="text-xl text-gray-600">
          Discover our expanding fiber-optic network and check availability in your area
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Network Map Visualization */}
        <div className="common_border bg-white rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">Fiber Network Map</h3>
            <div className="flex space-x-3">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm text-gray-600">Available</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <span className="text-sm text-gray-600">Expanding</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-gray-400 mr-2"></div>
                <span className="text-sm text-gray-600">Coming Soon</span>
              </div>
            </div>
          </div>
          
          {/* Network Map */}
          <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl overflow-hidden h-96 border border-gray-200 flex items-center justify-center">
            <div className="text-center px-4">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-6">
                <FiWifi className="text-white text-3xl" />
              </div>
              <h4 className="font-bold text-gray-800 text-xl mb-2">RK-NetLinks Fiber Network</h4>
              <p className="text-gray-600">Continuously expanding to serve more communities</p>
              
              {/* Network Nodes */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-green-500"></div>
              <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-green-500"></div>
              <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="absolute bottom-1/4 right-1/3 w-3 h-3 rounded-full bg-gray-400"></div>
            </div>
          </div>
          
          <div className="mt-6 flex items-center text-gray-600">
            <FiZap className="text-yellow-500 mr-2" />
            <span>Over 500 miles of fiber deployed and counting</span>
          </div>
        </div>
        
        {/* Coverage Details */}
        <div>
          {/* Service Checker */}
          <div className="common_border bg-white rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Check Your Address</h3>
            
            <form onSubmit={checkAvailability}>
              <div className="relative mb-4">
                <input 
                  type="text" 
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your street address" 
                  className="w-full px-4 py-3 pl-12 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              </div>
              
              <button 
                type="submit"
                className="w-full primary_text bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-colors"
              >
                Check Availability
              </button>
            </form>
            
            <div className="mt-6 flex items-center text-gray-600">
              <FiClock className="text-gray-500 mr-2" />
              <span>Get instant results about service availability</span>
            </div>
          </div>
          
          {/* Coverage List */}
          <div className="common_border bg-white rounded-xl p-6">
            <div className="flex border-b border-gray-200 mb-6">
              <button 
                className={`pb-3 px-4 font-medium ${
                  activeTab === 'residential' 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setActiveTab('residential')}
              >
                Residential Coverage
              </button>
              <button 
                className={`pb-3 px-4 font-medium ${
                  activeTab === 'business' 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setActiveTab('business')}
              >
                Business Coverage
              </button>
            </div>
            
            <div className="overflow-y-auto max-h-96 pr-2">
              {coverageAreas.map((area, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 mb-3 bg-gray-50 rounded-lg hover:bg-white transition-colors"
                >
                  <div className="flex items-center">
                    <FiMapPin className="text-gray-500 mr-3" />
                    <span className="font-medium">{area.city}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-700 font-medium mr-3">{area.speed}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      area.status === 'available' ? 'bg-green-100 text-green-800' :
                      area.status === 'expanding' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {area.status.charAt(0).toUpperCase() + area.status.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Expansion Section */}
      <div className="common_border bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl mt-16 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="primary_text text-gray-800 mb-4">
              Bringing High-Speed Internet to More Communities
            </h3>
            <p className="text-gray-600 mb-6">
              We are expanding our fiber network to new areas. Register your interest to help bring RK-NetLinks to your neighborhood.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="common_border bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Request Service Expansion
              </button>
              <button className="common_border bg-white hover:bg-gray-50 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors">
                View Expansion Plans
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="flex justify-center space-x-4 mb-6">
                {[1, 2, 3].map((quarter) => (
                  <div key={quarter} className="relative">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <span className="font-bold text-gray-800">Q{quarter}</span>
                    </div>
                    {quarter < 3 && (
                      <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-gray-300"></div>
                    )}
                  </div>
                ))}
              </div>
              <h4 className="font-bold text-gray-800 text-lg">2024 Expansion Timeline</h4>
              <p className="text-gray-600">Adding 15+ new communities this year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;