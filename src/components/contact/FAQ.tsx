// components/contact/FAQ.jsx
'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "What are your customer support hours?",
      answer: "Our customer support team is available 24/7 to assist you. You can reach us via phone, email, or live chat at any time."
    },
    {
      question: "How long does it take to get a response to my inquiry?",
      answer: "We strive to respond to all inquiries within 24 hours. For urgent issues, we recommend calling our support line for immediate assistance."
    },
    {
      question: "Do you offer installation services?",
      answer: "Yes, we provide professional installation services for all our internet plans. Our technicians will schedule a convenient time to set up your connection."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, net banking, UPI, and direct bank transfers. You can also pay through our mobile app."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Contact our support team, and they will guide you through the process with no downtime."
    },
    {
      question: "How do I check service availability in my area?",
      answer: "You can use our online coverage checker on our website or contact our sales team directly with your address to confirm service availability."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="custom_container_padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services and support
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="common_border bg-white rounded-xl mb-4 overflow-hidden hover:shadow-md transition-all"
            >
              <button 
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-bold text-gray-800">{faq.question}</h3>
                {activeIndex === index ? (
                  <FiChevronUp className="text-gray-600 text-xl" />
                ) : (
                  <FiChevronDown className="text-gray-600 text-xl" />
                )}
              </button>
              
              {activeIndex === index && (
                <div className="px-6 pb-6 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl text-gray-600 mb-6">
            Still have questions? Our support team is ready to help.
          </p>
          <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all">
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;