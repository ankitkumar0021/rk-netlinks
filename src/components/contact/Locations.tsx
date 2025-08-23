// components/contact/Locations.jsx
import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const Locations = () => {
  const offices = [
    {
      city: "Bangalore",
      address: "123 Tech Park, Koramangala, Bangalore 560034",
      phone: "+91 80 1234 5678",
      email: "bangalore@rknetlinks.com",
      hours: "Mon-Fri: 9AM - 6PM, Sat: 10AM - 4PM"
    },
    // {
    //   city: "Mumbai",
    //   address: "456 Business Tower, Bandra Kurla Complex, Mumbai 400051",
    //   phone: "+91 22 2345 6789",
    //   email: "mumbai@rknetlinks.com",
    //   hours: "Mon-Fri: 9AM - 6PM, Sat: 10AM - 4PM"
    // },
    // {
    //   city: "Delhi",
    //   address: "789 Corporate Plaza, Connaught Place, New Delhi 110001",
    //   phone: "+91 11 3456 7890",
    //   email: "delhi@rknetlinks.com",
    //   hours: "Mon-Fri: 9AM - 6PM, Sat: 10AM - 4PM"
    // }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="custom_container_padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Office Locations
          </h2>
          <p className="text-xl text-gray-600">
            Visit us at one of our offices across India for personalized assistance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices && offices?.length >=0 && offices?.map((office, index) => (
            <div 
              key={index} 
              className="common_border bg-gradient-to-b from-white to-blue-50 rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{office?.city} Office</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FiMapPin className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{office?.address}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <FiPhone className="text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{office?.phone}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <FiMail className="text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{office?.email}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <FiClock className="text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{office?.hours}</span>
                  </div>
                </div>
                
                <button className="mt-6 w-full common_border bg-white hover:bg-gray-50 text-gray-800 font-bold py-3 px-8 rounded-lg transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;