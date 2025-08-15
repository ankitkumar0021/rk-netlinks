// // components/Services.jsx
// import React from 'react';
// import { FiWifi, FiZap, FiServer, FiSettings } from 'react-icons/fi';

// const services = [
//   {
//     icon: <FiWifi className="text-5xl text-blue-500 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />,
//     title: "FTTH Services",
//     description: "Fiber to the Home with superior carrying capacity for high-demand applications",
//     features: ["Blazing fast speeds", "Low latency", "Future-proof technology"]
//   },
//   {
//     icon: <FiZap className="text-5xl text-purple-500 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />,
//     title: "Broadband Services",
//     description: "High-speed internet with burstable speed for most accessed websites",
//     features: ["Flexible plans", "Unlimited data", "Easy installation"]
//   },
//   {
//     icon: <FiServer className="text-5xl text-indigo-500 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />,
//     title: "Lease Line Services",
//     description: "Dedicated bandwidth for enterprises enabling high-speed communication",
//     features: ["SLA guaranteed", "Symmetrical speeds", "Priority support"]
//   },
//   {
//     icon: <FiSettings className="text-5xl text-green-500 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />,
//     title: "Managed Wi-Fi Solutions",
//     description: "End-to-end Wi-Fi network setup, monitoring and optimisation for businesses and public spaces",
//     features: ["Seamless connectivity", "24/7 monitoring", "Enhanced security"]
//   }
// ];

// const Services = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="custom_container_padding">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Internet Solutions</h2>
//           <p className="text-xl text-gray-600">Tailored services for homes and businesses to experience More Speed, More Entertainment, More Productivity</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="group relative bg-gradient-to-b from-white to-blue-50 rounded-xl overflow-hidden border border-[#00c063]  hover:border-blue-400 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] transform hover:-translate-y-2 transition-all duration-300 ease-out">
//               <div className="p-8">
//                 <div className="mb-6">{service.icon}</div>
//                 <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
//                 <p className="text-gray-600 mb-6">{service.description}</p>

//                 <ul className="space-y-3 mb-8">
//                   {service.features.map((feature, i) => (
//                     <li key={i} className="flex items-start">
//                       <div className="text-green-500 mr-2 mt-1 group-hover:scale-110 transition-transform duration-300">✓</div>
//                       <span className="text-gray-700">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="bg-blue-50 px-8 py-4 border-t border-blue-100">
//                 <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center transition-colors duration-300">
//                   Learn more
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;




import React from 'react';
import { FaWifi, FaBolt, FaServer, FaCogs, FaCheck } from 'react-icons/fa';

const services = [
  { icon: <FaWifi className="h-6 w-6" />, title: 'FTTH Services', subtitle: 'Home Fiber', description: 'Gigabit fiber straight to your door — ideal for UHD streaming, gaming and smart homes.', features: ['Symmetrical speeds', '99.99% uptime', 'Professional installation'], price: '₹499/mo', tag: 'Popular' },
  { icon: <FaBolt className="h-6 w-6" />, title: 'Broadband Services', subtitle: 'Flexible Plans', description: 'Affordable plans with burstable bandwidth for families and light businesses.', features: ['Easy upgrades', 'No long-term lock-in', 'Free modem'], price: '₹399/mo' },
  { icon: <FaServer className="h-6 w-6" />, title: 'Lease Line Services', subtitle: 'Dedicated Link', description: 'Dedicated circuits for enterprises needing guaranteed bandwidth and low jitter.', features: ['SLA-backed', 'Static IPs', '24/7 NOC'], price: 'Contact', tag: 'Enterprise' },
  { icon: <FaCogs className="h-6 w-6" />, title: 'Managed Wi-Fi Solutions', subtitle: 'Business Wi‑Fi', description: 'End-to-end Wi‑Fi with analytics, captive portals and seamless roaming.', features: ['Cloud management', 'Guest portals', 'Bandwidth shaping'], price: 'From ₹1,999' }
];

export default function ServicesUnique() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Solutions That Scale</h2>
          <p className="text-lg text-gray-600">A modern layout with alternating cards, clear hierarchy, and focused CTAs — great for product pages and landing sections.</p>
        </div>

        <div className="space-y-8">
          {services.map((s, idx) => (
            <article key={idx} className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-center group rounded-2xl overflow-hidden border border-gray-100 ${idx % 2 === 0 ? 'lg:bg-white' : 'lg:bg-gradient-to-r lg:from-indigo-50 lg:to-white'}`}>
              {/* Icon column */}
              <div className={`lg:col-span-3 flex items-center justify-center p-6 ${idx % 2 === 0 ? 'bg-white' : 'bg-transparent'}`}>
                <div className={`relative flex items-center justify-center rounded-full w-28 h-28 shadow-md transform transition-transform duration-300 group-hover:scale-105 ${idx % 2 === 0 ? 'bg-gradient-to-br from-blue-50 to-indigo-50' : 'bg-gradient-to-br from-indigo-50 to-blue-50'}`}>
                  <div className="text-indigo-600">{s.icon}</div>
                  {/* floating decorative dot */}
                  <span className="absolute -right-3 -top-3 inline-flex h-3 w-3 rounded-full bg-indigo-500 ring-2 ring-white" aria-hidden></span>
                </div>
              </div>

              {/* Content column */}
              <div className={`lg:col-span-9 p-6 ${idx % 2 === 0 ? 'text-left' : 'text-left lg:pl-10'}`}>
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-semibold text-gray-900">{s.title}</h3>
                      {s.tag && <span className="ml-2 inline-flex items-center rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium px-2 py-1">{s.tag}</span>}
                      <span className="ml-auto text-sm font-semibold text-gray-700">{s.price}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{s.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.features.map((f, i) => (
                        <span key={i} className="inline-flex items-center gap-2 rounded-full border border-gray-100 px-3 py-1 text-sm text-gray-700 bg-white shadow-sm">
                          <FaCheck className="h-3 w-3 text-green-500" />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

