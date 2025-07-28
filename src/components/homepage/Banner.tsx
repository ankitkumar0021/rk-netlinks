// components/Banner.jsx
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Banner = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient and abstract shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-secondary opacity-95"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-white/5"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-white/5"></div>
      </div>
      
      {/* Content */}
      <div className="custom_container_padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-white font-medium">Connecting 10,000+ customers</span>
            </div>
            
            <h1 className="primary_text_xl max-w-2xl">
              Ultra-Fast Fiber Internet for Homes & Businesses
            </h1>
            
            <p className="text-xl text-white/90 max-w-xl">
              Experience blazing-fast speeds with 99.9% uptime. RK-NetLinks delivers reliable, high-performance internet solutions tailored to your needs.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <button>
                Get Started <FiArrowRight className="ml-2" />
              </button>
              <button className="common_border bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-[12px] transition-all">
                View Plans
              </button>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="common_border bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">1 Gbps</div>
              <div className="text-white/80">Maximum Speed</div>
            </div>
            <div className="common_border bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-white/80">Uptime Guarantee</div>
            </div>
            <div className="common_border bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Customer Support</div>
            </div>
            <div className="common_border bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">$49</div>
              <div className="text-white/80">Starting Price</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent opacity-10"></div>
    </section>
  );
};

export default Banner;