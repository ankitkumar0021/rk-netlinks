'use client';

import React, { useState } from 'react';
import { FiWifi, FiZap, FiUpload, FiServer, FiPlay, FiDollarSign } from 'react-icons/fi';

interface Feature {
icon: React.ReactNode;
  title: string;
  tag: string;
  tagline: string;
  description: string;
  bullets: string[];
  footer: string[];
}

const Features: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const features: Feature[] = [
    {
      icon: <FiWifi className="text-4xl text-blue-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />,
      title: 'UNLIMITED INTERNET',
      tag: 'Home',
      tagline: 'Truly unlimited — stream, browse and download without caps',
      description:
        "No data caps or hidden limits. Whether you're streaming HD video, video-calling your family, or backing up large files to the cloud, enjoy predictable performance with unlimited usage and fair-access policies that prioritise experience.",
      bullets: ['Perfect for households with many devices', 'Consistent speeds during peak hours'],
      footer: ['24/7 Support', 'Multiple devices'],
    },
    {
      icon: <FiZap className="text-4xl text-purple-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />,
      title: 'SUPER SPEED',
      tag: 'Gaming',
      tagline: 'Latency-focused performance for gaming & streaming',
      description:
        'Blazing fast symmetrical speeds and low latency engineered for modern applications. Ideal for gamers, streamers, and remote workers who need instant responsiveness and uninterrupted sessions.',
      bullets: ['Optimized routing for gaming servers', 'Adaptive bandwidth for HD/4K streaming'],
      footer: ['Low Latency', 'Optimized Routing'],
    },
    {
      icon: <FiUpload className="text-4xl text-indigo-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />,
      title: 'SIMILAR UPLOAD & DOWNLOAD',
      tag: 'Creators',
      tagline: 'Symmetrical bandwidth so uploads are as fast as downloads',
      description:
        'Symmetrical upload and download speeds make video conferencing, cloud backups, and remote desktop work smooth and reliable. No more slow uploads when sending large files or hosting meetings.',
      bullets: ['Great for creators & businesses', 'Reliable video calls and cloud syncs'],
      footer: ['Symmetrical Speeds', 'Fast Uploads'],
    },
    {
      icon: <FiServer className="text-4xl text-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />,
      title: 'INTERNET LEASED LINE',
      tag: 'Business',
      tagline: 'Dedicated enterprise-grade connectivity with SLA',
      description:
        'Dedicated bandwidth with guaranteed SLAs for businesses that cannot afford downtime. Comes with priority routing, fixed IP options, and proactive monitoring to keep critical services online.',
      bullets: ['SLA-backed uptime', 'Dedicated support & custom SLAs'],
      footer: ['SLA Backed', 'Fixed IP Option'],
    },
    {
      icon: <FiPlay className="text-4xl text-purple-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />,
      title: 'NO BUFFERING',
      tag: 'Entertainment',
      tagline: 'Seamless playback across multiple devices',
      description:
        'Intelligent traffic shaping and CDN-friendly routing ensure video and audio streams remain smooth — even when multiple users are watching different high-resolution content at the same time.',
      bullets: ['Adaptive streaming support', 'Smart QoS for entertainment'],
      footer: ['Adaptive Streaming', 'Smart QoS'],
    },
    {
      icon: <FiDollarSign className="text-4xl text-indigo-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />,
      title: 'COST EFFECTIVE',
      tag: 'Value',
      tagline: 'Premium value without surprise fees',
      description:
        'Transparent pricing with no hidden charges and flexible plans to suit homes and businesses. Get enterprise features at competitive rates and optional add-ons only when you need them.',
      bullets: ['Clear billing, no surprise fees', 'Optional add-ons like static IP & managed Wi-Fi'],
      footer: ['Transparent Pricing', 'Optional Add-ons'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="custom_container_padding">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose RK Netlinks?
          </h2>
          <p className="text-xl text-gray-600">
            Experience the difference with our customer-focused internet solutions — built for speed,
            reliability and value.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const isExpanded = expandedIndex === index;
            const shortText =
              feature.description.length > 90
                ? feature.description.slice(0, 90) + '...'
                : feature.description;

            return (
              <article
                key={index}
                aria-label={feature.title}
                style={{ transitionDelay: `${index * 60}ms` }}
                className="group relative rounded-xl p-px bg-gradient-to-br from-blue-50 via-white to-purple-50 hover:shadow-[0_18px_50px_rgba(99,102,241,0.08)] transition-all duration-300"
              >
                <div className="bg-white rounded-lg p-8 h-full flex flex-col transform transition-transform duration-300 group-hover:-translate-y-3 shadow-sm hover:shadow-lg">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 flex items-center justify-center rounded-md bg-gradient-to-br from-white to-blue-50 ring-1 ring-gray-100 shadow-sm transition-transform duration-300 group-hover:scale-105">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-800">{feature.title}</h3>
                        <div className="text-sm text-gray-500 mt-1">{feature.tagline}</div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full">
                      {feature.tag}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4">
                    {isExpanded ? feature.description : shortText}{' '}
                    {feature.description.length > 90 && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-indigo-600 hover:underline text-sm focus:outline-none"
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? 'Less' : 'More'}
                      </button>
                    )}
                  </p>

                  {/* Bullets */}
                  <ul className="mb-6 space-y-2">
                    {feature.bullets.map((b, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="mt-1 mr-3 inline-block text-green-500">✓</span>
                        <span className="text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
