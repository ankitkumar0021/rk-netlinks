// components/Hero.jsx
import Image from 'next/image';
import React from 'react';
import { FiWifi, FiChevronRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="custom_container_padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-3 bg-white text-blue-600 px-5 py-2 rounded-full shadow-sm">
              <FiWifi className="text-xl" />
              {/* <span className="font-medium">Enabling Bandwidth for More</span> */}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Connect to the <span className="text-blue-600">Connected World</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl">
              Experience More Speed, More Entertainment, More Productivity with our 
              innovative internet solutions designed for modern India.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all flex items-center">
                View Plans <FiChevronRight className="ml-2" />
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-lg border border-gray-300 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className='w-auto h-80 lg:h-96'>
              <Image
              src="/images/banner.avif"
              alt="Banner"
              className="w-full h-full object-cover rounded-2xl"
              height={1000}
              width={1000}
            />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 w-64">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FiWifi className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-800">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;