// components/about/Hero.jsx
import Image from 'next/image';
import React from 'react';
import { FiTarget } from 'react-icons/fi';

const AboutHero = () => {
  return (
    <section className="pt-28 md:pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="custom_container_padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-3 bg-white text-blue-600 px-5 py-2 rounded-full shadow-sm">
              <FiTarget className="text-xl" />
              <span className="font-medium">Our Story</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Connecting India to the <span className="text-blue-600">Digital Future</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl">
              At Rk Netlinks, we are on a mission to transform how India experiences the internet. 
              Founded with a vision to bridge digital divides, we have grown to become a leading provider 
              of innovative internet solutions.
            </p>
            
            <div className="flex items-center space-x-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-gray-600">Cities Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className='w-auto h-80 lg:h-96'>
              <Image
              src="/images/about.jpg"
              alt="Banner"
              className="w-full h-full object-cover rounded-2xl"
              height={1000}
              width={1000}
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;