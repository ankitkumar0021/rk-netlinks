// components/Testimonials.jsx
'use client'
import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "Switching to RK-NetLinks was the best decision for my business. Our productivity has increased by 40% thanks to their reliable high-speed internet.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Remote Software Engineer",
      content: "As someone who works from home, I need rock-solid internet. RK-NetLinks delivers consistent 500Mbps speeds even during peak hours. Customer service is top-notch too!",
      rating: 5
    },
    {
      name: "Jennifer Kim",
      role: "Home User",
      content: "Our family streams, games, and works from home simultaneously with no issues. The installation was quick and professional. Highly recommend!",
      rating: 4
    },
    {
      name: "David Thompson",
      role: "IT Manager",
      content: "We switched our entire office to RK-NetLinks and couldn't be happier. The dedicated business line has eliminated our connectivity issues.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="space_from_top_large custom_container_padding bg-gray-50 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="extra_large_text text-gray-800 mb-6">
          What Our Customers Say
        </h2>
        <p className="text-xl text-gray-600">
          Don not just take our word for it - hear from businesses and families who have experienced the RK-NetLinks difference.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Testimonial Card */}
        <div className="common_border bg-white rounded-2xl shadow-lg p-8 relative">
          <div className="absolute top-0 left-8 -translate-y-1/2 bg-primary p-4 rounded-full">
            <FiStar className="text-white text-2xl" />
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 md:w-24 md:h-24" />
            
            <div className="flex-grow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={`text-xl ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-xl text-gray-700 italic mb-6">
                {testimonials[currentIndex].content}
              </p>
              
              <div>
                <h4 className="text-xl font-bold text-gray-800">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-center mt-10 space-x-4">
          <button 
            onClick={prevTestimonial}
            className="common_border bg-white hover:bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center"
          >
            <FiChevronLeft className="text-xl text-gray-700" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="common_border bg-white hover:bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center"
          >
            <FiChevronRight className="text-xl text-gray-700" />
          </button>
        </div>
        
        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;