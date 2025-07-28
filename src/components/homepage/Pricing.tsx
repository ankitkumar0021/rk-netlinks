// components/Pricing.jsx
'use client'
import React, { useState } from 'react';
import { FiCheck, FiZap, FiHome, FiBriefcase } from 'react-icons/fi';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  const plans = [
    {
      name: "Essential",
      icon: <FiHome className="text-3xl text-blue-500" />,
      speed: "100 Mbps",
      price: { monthly: "$49.99", annual: "$539.89" },
      description: "Perfect for individuals and small households",
      features: [
        "Unlimited data",
        "Basic WiFi router",
        "Email support",
        "1 email account"
      ],
      popular: false
    },
    {
      name: "Advanced",
      icon: <FiZap className="text-3xl text-purple-500" />,
      speed: "300 Mbps",
      price: { monthly: "$69.99", annual: "$755.89" },
      description: "Ideal for families and remote workers",
      features: [
        "Unlimited data",
        "Advanced WiFi router",
        "Priority support",
        "3 email accounts",
        "Basic security suite"
      ],
      popular: true
    },
    {
      name: "Professional",
      icon: <FiBriefcase className="text-3xl text-primary" />,
      speed: "1 Gbps",
      price: { monthly: "$99.99", annual: "$1079.89" },
      description: "For power users and small businesses",
      features: [
        "Unlimited data",
        "Mesh WiFi system",
        "24/7 priority support",
        "10 email accounts",
        "Advanced security suite",
        "Static IP option"
      ],
      popular: false
    }
  ];

  return (
    <section className="space_from_top_large bg-gray-50 py-20">
      <div className="custom_container_padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="extra_large_text text-gray-800 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            No hidden fees or contracts. Switch or cancel anytime.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="common_border bg-white inline-flex p-1 rounded-lg">
            <button 
              className={`px-6 py-3 rounded-md font-medium ${
                billingCycle === 'monthly' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly Billing
            </button>
            <button 
              className={`px-6 py-3 rounded-md font-medium ${
                billingCycle === 'annual' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual Billing (Save 10%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`common_border bg-white rounded-xl overflow-hidden ${
                plan.popular ? 'ring-2 ring-primary transform md:-translate-y-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center py-2 font-bold">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="mb-2">{plan.icon}</div>
                    <h3 className="large_text text-gray-800">{plan.name}</h3>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-800">
                      {billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual}
                    </div>
                    <div className="text-gray-600">
                      {billingCycle === 'monthly' ? 'per month' : 'per year'}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-primary mb-2">{plan.speed}</div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        index === 0 ? 'bg-blue-500 w-1/3' : 
                        index === 1 ? 'bg-purple-500 w-2/3' : 
                        'bg-primary w-full'
                      }`}
                    ></div>
                  </div>
                </div>
                
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
                    ? 'bg-primary hover:bg-primary/90 text-white' 
                    : 'common_border hover:bg-gray-50 text-gray-800'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Solution */}
        <div className="common_border bg-white rounded-xl mt-16 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="large_text text-gray-800 mb-4">Enterprise Solutions</h3>
              <p className="text-gray-600 mb-6">
                Custom-built networking solutions for large organizations with dedicated fiber connections, multi-gigabit speeds, and enterprise-grade security.
              </p>
              <button className="common_border bg-transparent hover:bg-gray-50 font-bold py-3 px-6 rounded-lg text-gray-800">
                Contact Sales
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary mb-2">10 Gbps+</div>
                <div className="text-gray-700">Dedicated Speeds</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary mb-2">SLA</div>
                <div className="text-gray-700">Service Guarantee</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-700">Dedicated Support</div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary mb-2">Custom</div>
                <div className="text-gray-700">Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;