// components/about/CTA.jsx
import React from 'react';
import { FiPhone, FiWifi } from 'react-icons/fi';

const AboutCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="custom_container_padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <FiWifi className="text-white mr-2" />
            <span className="text-white font-medium">Get Connected Today</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Rk Netlinks Difference?
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying superior internet connectivity across India
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center">
              <FiPhone className="mr-2" /> Call Now: +91 98765 43210
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              View Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;