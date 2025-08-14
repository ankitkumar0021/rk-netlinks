// components/services/Hero.jsx
import React from 'react';
import { FiWifi, FiZap, FiServer } from 'react-icons/fi';

const ServicesHero = () => {
  return (
    <section className="pt-28 md:pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="custom_container_padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-3 bg-white text-blue-600 px-5 py-2 rounded-full shadow-sm">
              <FiZap className="text-xl" />
              <span className="font-medium">Our Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Internet Solutions for <span className="text-blue-600">Homes & Businesses</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl">
              Experience More Speed, More Reliability, and More Value with our cutting-edge 
              internet services designed for modern India.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-8 mt-8 space-y-6 sm:space-y-0">
            {/* FTTH */}
            <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left">
              <FiWifi className="text-blue-600 mb-2 sm:mb-0 sm:mr-2 text-3xl" />
              <div>
                <div className="text-xl font-bold text-gray-800">FTTH</div>
                <div className="text-gray-600">Fiber to Home</div>
              </div>
            </div>

            {/* Broadband */}
            <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left">
              <FiZap className="text-purple-600 mb-2 sm:mb-0 sm:mr-2 text-3xl" />
              <div>
                <div className="text-xl font-bold text-gray-800">Broadband</div>
                <div className="text-gray-600">High Speed</div>
              </div>
            </div>

            {/* Lease Line */}
            <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left">
              <FiServer className="text-indigo-600 mb-2 sm:mb-0 sm:mr-2 text-3xl" />
              <div>
                <div className="text-xl font-bold text-gray-800">Lease Line</div>
                <div className="text-gray-600">Dedicated</div>
              </div>
            </div>
          </div>
          </div>
          
          <div className="relative">
  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl w-full h-auto py-10 flex items-center justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 w-full h-36 sm:h-40 flex flex-col items-center justify-center">
        <FiWifi className="text-white text-3xl mb-3" />
        <span className="text-white font-medium">FTTH</span>
      </div>
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 w-full h-36 sm:h-40 flex flex-col items-center justify-center">
        <FiZap className="text-white text-3xl mb-3" />
        <span className="text-white font-medium">Broadband</span>
      </div>
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 w-full h-36 sm:h-40 flex flex-col items-center justify-center">
        <FiServer className="text-white text-3xl mb-3" />
        <span className="text-white font-medium">Lease Line</span>
      </div>
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 w-full h-36 sm:h-40 flex flex-col items-center justify-center">
        <div className="text-2xl font-bold text-white">24/7</div>
        <span className="text-white font-medium">Support</span>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default ServicesHero;