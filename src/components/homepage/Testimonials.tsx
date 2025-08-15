'use client'
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Home User, Bangalore",
    content: "Switching to RK Netlinks was the best decision for our family. We can now stream, work, and study online simultaneously without any issues. The 24/7 support is excellent!",
    rating: 5
  },
  {
    name: "Priya Chauhan",
    role: "Small Business Owner",
    content: "As a small business owner, reliable internet is crucial. RK Netlinks's business plan has eliminated our connectivity issues and improved our productivity significantly.",
    rating: 5
  },
  {
    name: "Vikram Patel",
    role: "IT Manager",
    content: "We switched our entire office to RK Netlinks's leased line service. The symmetrical speeds and dedicated bandwidth have transformed how we collaborate and work.",
    rating: 4
  },
  {
    name: "Anita Sharma",
    role: "Freelancer, Mumbai",
    content: "RK Netlinks provides seamless connectivity for my remote work. The speed and reliability help me meet deadlines without any hassle.",
    rating: 5
  },
  {
    name: "Suresh Menon",
    role: "Student",
    content: "The high-speed internet from RK Netlinks makes online classes and research so much easier. No buffering, just smooth performance!",
    rating: 4
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Hear from our satisfied customers about their experience with RK Netlinks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg p-8 border border-gray-100 
                         hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 
                                 flex items-center justify-center text-white text-2xl font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-xl ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-lg text-gray-700 italic mb-6 leading-relaxed text-center">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 space-x-4">
          <button
            onClick={prevTestimonial}
            className="bg-white hover:bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center 
                       border border-gray-200 hover:border-blue-500 shadow-sm hover:shadow-md 
                       transition-all duration-300"
          >
            <FaChevronLeft className="text-xl text-gray-700" />
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-white hover:bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center 
                       border border-gray-200 hover:border-blue-500 shadow-sm hover:shadow-md 
                       transition-all duration-300"
          >
            <FaChevronRight className="text-xl text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;