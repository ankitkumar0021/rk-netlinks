'use client';

import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { FiWifi, FiZap, FiUpload, FiServer, FiPlay, FiDollarSign } from 'react-icons/fi';

/**
 * FeaturesNew — v5 (Removed visible white inner box)
 * - Inner card now transparent so the outer gradient shows through — removes the white box look.
 * - Tag pill made subtle (no solid white). Divider uses subtle transparency instead of solid white.
 * - Keep equal heights (h-80) and single-line class attributes.
 */

const FeaturesNew = () => {
  const colorPalettes = [
    { from: 'from-pink-300', to: 'to-rose-300', accent: 'text-pink-600', glow: 'shadow-pink-300/30' },
    { from: 'from-indigo-300', to: 'to-violet-300', accent: 'text-indigo-600', glow: 'shadow-indigo-300/30' },
    { from: 'from-cyan-200', to: 'to-sky-300', accent: 'text-cyan-600', glow: 'shadow-cyan-300/30' },
    { from: 'from-lime-200', to: 'to-emerald-300', accent: 'text-emerald-600', glow: 'shadow-emerald-300/30' },
    { from: 'from-yellow-200', to: 'to-orange-300', accent: 'text-orange-600', glow: 'shadow-yellow-300/30' },
    { from: 'from-fuchsia-200', to: 'to-purple-300', accent: 'text-fuchsia-600', glow: 'shadow-fuchsia-300/30' },
  ];

  const features = [
    { icon: <FiWifi className="text-3xl" />, title: 'UNLIMITED INTERNET', tag: 'Home', tagline: 'Truly unlimited — stream, browse and download without caps', description: "No data caps or hidden limits. Whether you're streaming HD video, video-calling your family, or backing up large files to the cloud, enjoy predictable performance with unlimited usage and fair-access policies that prioritise experience.", bullets: ['Perfect for households with many devices', 'Consistent speeds during peak hours'], footer: ['24/7 Support', 'Multiple devices'] },
    { icon: <FiZap className="text-3xl" />, title: 'SUPER SPEED', tag: 'Gaming', tagline: 'Latency-focused performance for gaming & streaming', description: 'Blazing fast symmetrical speeds and low latency engineered for modern applications. Ideal for gamers, streamers, and remote workers who need instant responsiveness and uninterrupted sessions.', bullets: ['Optimized routing for gaming servers', 'Adaptive bandwidth for HD/4K streaming'], footer: ['Low Latency', 'Optimized Routing'] },
    { icon: <FiUpload className="text-3xl" />, title: 'SIMILAR UPLOAD & DOWNLOAD', tag: 'Creators', tagline: 'Symmetrical bandwidth so uploads are as fast as downloads', description: 'Symmetrical upload and download speeds make video conferencing, cloud backups, and remote desktop work smooth and reliable. No more slow uploads when sending large files or hosting meetings.', bullets: ['Great for creators & businesses', 'Reliable video calls and cloud syncs'], footer: ['Symmetrical Speeds', 'Fast Uploads'] },
    { icon: <FiServer className="text-3xl" />, title: 'INTERNET LEASED LINE', tag: 'Business', tagline: 'Dedicated enterprise-grade connectivity with SLA', description: 'Dedicated bandwidth with guaranteed SLAs for businesses that cannot afford downtime. Comes with priority routing, fixed IP options, and proactive monitoring to keep critical services online.', bullets: ['SLA-backed uptime', 'Dedicated support & custom SLAs'], footer: ['SLA Backed', 'Fixed IP Option'] },
    { icon: <FiPlay className="text-3xl" />, title: 'NO BUFFERING', tag: 'Entertainment', tagline: 'Seamless playback across multiple devices', description: 'Intelligent traffic shaping and CDN-friendly routing ensure video and audio streams remain smooth — even when multiple users are watching different high-resolution content at the same time.', bullets: ['Adaptive streaming support', 'Smart QoS for entertainment'], footer: ['Adaptive Streaming', 'Smart QoS'] },
    { icon: <FiDollarSign className="text-3xl" />, title: 'COST EFFECTIVE', tag: 'Value', tagline: 'Premium value without surprise fees', description: 'Transparent pricing with no hidden charges and flexible plans to suit homes and businesses. Get enterprise features at competitive rates and optional add-ons only when you need them.', bullets: ['Clear billing, no surprise fees', 'Optional add-ons like static IP & managed Wi-Fi'], footer: ['Transparent Pricing', 'Optional Add-ons'] },
  ];

  const cardVariants = {
    offscreen: { opacity: 0, y: 36 },
    onscreen: { opacity: 1, y: 0, transition: { type: "spring" as const, bounce: 0.22, duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Choose RK Netlinks?</h2>
          <p className="text-lg text-gray-700">Experience the difference — colourful, fast and customer-focused internet solutions with lively micro-interactions.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {features && features?.length>=0 && features?.map((f, idx) => {
            const palette = colorPalettes[idx % colorPalettes.length];
            return (
              <motion.div key={idx} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.25 }} variants={cardVariants} className="relative">
                {/* Equal height: h-80; inner card made transparent to remove white box */}
                <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={true} glareMaxOpacity={0.06} className={`rounded-3xl p-px bg-gradient-to-br ${palette.from} ${palette.to} shadow-2xl transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="bg-transparent rounded-3xl p-6 h-80 flex flex-col justify-between overflow-hidden relative">

                    {/* left-accent bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl ${palette.from} ${palette.to} opacity-95`}></div>

                    <div className="flex items-start justify-between z-10">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 flex items-center justify-center border rounded-xl bg-gradient-to-br ${palette.from} ${palette.to} text-white ${palette.glow} ring-0 shadow-lg`}>{/* big colorful icon */}
                          <motion.div whileHover={{ scale: 1.14, rotate: 8 }} transition={{ type: 'spring', stiffness: 280 }}>{f.icon}</motion.div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                          <p className="text-sm text-gray-700 mt-1">{f.tagline}</p>
                        </div>
                      </div>
                      <div className={`text-xs font-semibold ${palette.accent} bg-transparent/50 px-3 py-1 rounded-full transform rotate-1 select-none`}>{f.tag}</div>
                    </div>

                    {/* gradient divider - subtle and not solid white */}
                    <div className="mt-4 h-0.5 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-60"></div>

                    {/* description area - consistent truncated view (no button) */}
                    <div className="mt-4 relative z-10 flex-grow overflow-hidden">
                      <p className="text-gray-800 text-sm leading-relaxed line-clamp-4">{f.description}</p>

                      {/* bullets tucked inside the area */}
                      {/* <ul className="mt-3 space-y-2">
                        {f?.bullets?.map((b, i) => (
                          <li key={i} className="flex items-start text-gray-800"><span className={`mt-1 mr-3 inline-block ${palette.accent}`}>●</span><span className="text-sm">{b}</span></li>
                        ))}
                      </ul> */}
                    </div>

                    {/* footer area reserved */}
                    <div className="mt-5 pt-3 border-t border-white/10 h-14 flex items-center justify-between z-10">
                      <div className="flex gap-3 items-center">
                        {f.footer.map((ft, i) => (
                          <span key={i} className="text-xs bg-white px-3 py-1 rounded-full font-medium text-gray-900">{ft}</span>
                        ))}
                      </div>

                      {/* static CTA */}
                      <div>
                        <button className={`text-sm font-semibold px-4 py-2 rounded-lg shadow-lg border text-white ${palette.from} ${palette.to} hover:translate-y-[-2px] transition-transform`}>Get Started</button>
                      </div>
                    </div>

                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* small custom css utilities */}
      <style jsx>{`@keyframes pulse-slow {0%{opacity:0.6}50%{opacity:1}100%{opacity:0.6}} .animate-pulse-slow{animation:pulse-slow 3.5s ease-in-out infinite} .line-clamp-4{display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}`}</style>
    </section>
  );
};

export default FeaturesNew;
