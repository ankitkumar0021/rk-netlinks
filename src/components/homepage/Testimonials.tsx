// components/Testimonials.jsx
'use client'
import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Home User, Bangalore",
      content: "Switching to RK Netlinks was the best decision for our family. We can now stream, work, and study online simultaneously without any issues. The 24/7 support is excellent!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Small Business Owner",
      content: "As a small business owner, reliable internet is crucial. RK Netlinks's business plan has eliminated our connectivity issues and improved our productivity significantly.",
      rating: 5
    },
    {
      name: "Vikram Patel",
      role: "IT Manager",
      content: "We switched our entire office to RK Netlinks's leased line service. The symmetrical speeds and dedicated bandwidth have transformed how we collaborate and work.",
      rating: 4
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
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="custom_container_padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Don not just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="common_border bg-white rounded-2xl shadow-lg p-8 relative">
            <div className="absolute top-0 left-8 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full">
              <FiStar className="text-white text-2xl" />
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24" />
              
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;