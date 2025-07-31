// components/contact/Map.jsx
import React from 'react';
import { FiMapPin, FiNavigation } from 'react-icons/fi';

const ContactMap = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="custom_container_padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Find Us on the Map
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Our headquarters is conveniently located in Bangalore tech hub, easily accessible from all parts of the city.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <FiMapPin className="text-xl text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Headquarters Address</h3>
                  <p className="text-gray-600">123 Tech Park, Koramangala, Bangalore 560034</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <FiNavigation className="text-xl text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Directions</h3>
                  <p className="text-gray-600">
                    5 minutes from Koramangala Water Tank, near Forum Mall
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Security Access</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">200+</div>
                <div className="text-gray-600">Parking Spaces</div>
              </div>
            </div>
          </div>
          
          <div className="common_border bg-white rounded-2xl overflow-hidden h-96">
            <div className="w-full h-full bg-gray-200 border-2 border-dashed flex items-center justify-center">
              <div className="text-center">
                <FiMapPin className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800">RK Netlinks Headquarters</h3>
                <p className="text-gray-600">123 Tech Park, Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;