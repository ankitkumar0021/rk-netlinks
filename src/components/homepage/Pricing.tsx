// components/Plans.jsx
import React from 'react';
import { FiWifi, FiCheck } from 'react-icons/fi';

const Pricing = () => {
  const plans = [
    {
      name: "Essential",
      speed: "UP TO 10 MBPS SPEED",
      price: "₹ 750* /Month",
      features: [
        "Unlimited data usages",
        "Unlimited bandwidth",
        "Cell Phone Connection",
        "No Hidden Charge",
        "24/7 SUPPORT"
      ],
      cta: "Contact Us",
      popular: false
    },
    {
      name: "Advanced",
      speed: "UP TO 15 MBPS SPEED",
      price: "₹ 1000* /Month",
      features: [
        "Unlimited data usages",
        "Unlimited bandwidth",
        "Cell Phone Connection",
        "No Hidden Charge",
        "24/7 SUPPORT",
        "Free Router"
      ],
      cta: "View Plans",
      popular: true
    },
    {
      name: "Premium",
      speed: "UP TO 20 MBPS SPEED",
      price: "₹ 1500* /Month",
      features: [
        "Unlimited data usages",
        "Unlimited bandwidth",
        "Cell Phone Connection",
        "No Hidden Charge",
        "24/7 SUPPORT",
        "Free Router",
        "Priority Support"
      ],
      cta: "View Plans",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="custom_container_padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Affordable Internet Plans
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your needs with More Speed, More Entertainment, More Value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden shadow-lg ${
                plan.popular ? 'ring-2 ring-blue-500 transform md:-translate-y-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 font-bold">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="flex items-center text-blue-600 font-bold">
                    <FiWifi className="mr-2" />
                    {plan.speed}
                  </div>
                </div>
                
                <div className="text-3xl font-bold text-gray-800 mb-8">{plan.price}</div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-bold transition-colors ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90' 
                    : 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-50'
                }`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;