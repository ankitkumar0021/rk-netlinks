'use client';

import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';


const SupportTeamRedesigned = () => {
  const supportOptions = [
    { id: 'phone', icon: <FiPhone className="text-2xl" />, title: 'Phone Support', description: 'Speak directly with our support agents for immediate assistance', details: '+91 1324657980', action: 'Call Now', href: 'tel:+911324657980', gradientFrom: 'from-blue-400', gradientTo: 'to-blue-600' },
    { id: 'email', icon: <FiMail className="text-2xl" />, title: 'Email Support', description: "Send us your queries and we'll respond within 24 hours", details: 'support@rknetlinks.com', action: 'Send Email', href: 'mailto:support@rknetlinks.com', gradientFrom: 'from-purple-400', gradientTo: 'to-pink-500' },
  ];

  const cardMotion = { whileHover: { y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.12)' }, transition: { layout: 'spring', stiffness: 260, damping: 20 } };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="custom_container_padding">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Contact Our Support Team</h2>
          <p className="text-lg text-gray-700">Multiple ways to get in touch with our dedicated support specialists — choose what suits you best.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportOptions.map((opt) => (
            <motion.article key={opt.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={cardMotion.whileHover} transition={cardMotion.transition} className="relative">

              <div className={`rounded-2xl p-1 bg-gradient-to-br ${opt.gradientFrom} ${opt.gradientTo} shadow-lg`}>
                <div className="bg-white/95 rounded-2xl p-6 h-56 flex flex-col justify-between">{/* fixed height for equal cards */}

                  <div className="flex items-start gap-4">
                    <div className={`flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${opt.gradientFrom} ${opt.gradientTo} text-white shadow-md ring-1 ring-white/30`}>{opt.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{opt.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{opt.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{opt.details}</div>
                      <div className="text-xs text-gray-500">Available 24/7</div>
                    </div>

                    <a href={opt.href} aria-label={opt.action} className="inline-flex items-center gap-2 bg-transparent px-4 py-2 rounded-md font-semibold text-white shadow-md border border-gray-200" style={{ backgroundImage: `linear-gradient(90deg, var(--tw-gradient-stops))` }}>
                      <span className="sr-only">{opt.action}</span>
                      <span className="px-3 py-2 rounded-md text-black  bg-white/6 backdrop-blur-sm text-sm">{opt.action}</span>
                      <HiArrowNarrowRight className="text-lg opacity-90" />
                    </a>
                  </div>

                </div>
              </div>

            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportTeamRedesigned;
