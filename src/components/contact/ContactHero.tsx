// components/contact/Hero.jsx
import React from 'react';
import { FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';

const ContactHero = () => {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="custom_container_padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-3 bg-white text-blue-600 px-5 py-2 rounded-full shadow-sm">
              <FiMessageSquare className="text-xl" />
              <span className="font-medium">Get in Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              We are Here to <span className="text-blue-600">Help You</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl">
              Have questions about our services, plans, or coverage? Our support team is ready to assist you with any inquiries.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <FiPhone className="text-xl text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Call Us</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <FiMail className="text-xl text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Email Us</h3>
                  <p className="text-gray-600">support@rknetlinks.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <FiMessageSquare className="text-xl text-indigo-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Live Chat</h3>
                  <p className="text-gray-600">Available 24/7 on our website</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="common_border bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="feedback">Feedback/Suggestion</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                //   rows="5"
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;