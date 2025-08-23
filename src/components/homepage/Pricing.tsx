'use client';

import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';



const PricingRedesigned = () => {
  const plans = [
    { name: 'Essential', speed: 'UP TO 10 MBPS', price: '₹ 750', period: '/month', features: ['Unlimited data usage', 'Unlimited bandwidth', 'Cell Phone Connection', 'No Hidden Charge', '24/7 SUPPORT'], popular: false, accent: 'from-blue-400 to-blue-600' },
    { name: 'Advanced', speed: 'UP TO 15 MBPS', price: '₹ 1000', period: '/month', features: ['Unlimited data usage', 'Unlimited bandwidth', 'Cell Phone Connection', 'No Hidden Charge', '24/7 SUPPORT', 'Free Router'], popular: true, accent: 'from-purple-500 to-pink-500' },
    { name: 'Premium', speed: 'UP TO 20 MBPS', price: '₹ 1500', period: '/month', features: ['Unlimited data usage', 'Unlimited bandwidth', 'Cell Phone Connection', 'No Hidden Charge', '24/7 SUPPORT', 'Free Router', 'Priority Support'], popular: false, accent: 'from-amber-400 to-orange-500' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Affordable Internet Plans</h2>
          <p className="text-lg text-gray-600">Choose the perfect plan for your needs — more speed, more entertainment, more value.</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full bg-white/70 p-1 ring-1 ring-gray-200">{/* visual toggle placeholder */}
            <button className="px-4 py-2 rounded-full text-sm font-medium text-gray-800">Monthly</button>
            <button className="px-4 py-2 rounded-full bg-transparent text-sm font-medium text-gray-500">Yearly</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.article key={idx} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }} className="relative">

              {/* card outer gradient border */}
              <div className={`rounded-2xl p-1 bg-gradient-to-br ${plan.accent} shadow-lg`}> 
                {/* inner surface with soft glass effect */}
                <div className={`${plan.popular ? 'bg-white/95' : 'bg-white/90'} rounded-2xl p-6 h-80 flex flex-col justify-between`}>

                  {/* header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{plan.speed}</p>
                    </div>

                    {plan.popular && (<div className="text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 px-3 py-1 rounded-full shadow-sm">MOST POPULAR</div>)}
                  </div>

                  {/* price */}
                  <div className="flex items-baseline gap-3">
                    <div className="text-3xl md:text-4xl font-extrabold text-gray-900">{plan.price}</div>
                    <div className="text-sm text-gray-500">{plan.period}</div>
                  </div>

                  {/* features - constrained to avoid overflow */}
                  <ul className="grid gap-3 my-2 text-sm text-gray-700 overflow-auto max-h-28 pr-2">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 text-green-500"><FiCheck /></span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* small footer: keep badges only, no per-card CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                      {/* place optional small badges here */}
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded-full font-medium text-gray-700">No Setup Fee</span>
                    </div>
                    <div className="text-xs text-gray-500">T&amp;C apply</div>
                  </div>

                </div>
              </div>

            </motion.article>
          ))}
        </div>

        {/* Common Contact CTA for all plans */}
        <div className="mt-8 flex justify-center">
          <a href="mailto:support@rknetlinks.com" className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:scale-[1.02] transition-transform">Contact Us</a>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">* Prices are indicative. Taxes & installation charges may apply.</div>
      </div>
    </section>
  );
};

export default PricingRedesigned;
