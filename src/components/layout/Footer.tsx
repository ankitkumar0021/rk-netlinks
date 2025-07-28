// components/Footer.jsx
import React from 'react';
import { 
  FiFacebook, FiTwitter, FiInstagram, FiLinkedin,
  FiMapPin, FiPhone, FiMail, FiClock, 
  FiWifi
} from 'react-icons/fi';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Home Internet', href: '#' },
        { name: 'Business Solutions', href: '#' },
        { name: 'Enterprise Networking', href: '#' },
        { name: 'Cloud Services', href: '#' },
        { name: 'VoIP Solutions', href: '#' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Our Team', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'News & Press', href: '#' },
        { name: 'Partnerships', href: '#' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Service Status', href: '#' },
        { name: 'Contact Support', href: '#' },
        { name: 'Community Forum', href: '#' },
        { name: 'Resources', href: '#' },
      ]
    },
  ];

  const contactInfo = [
    { icon: <FiMapPin />, text: '123 Tech Park, Silicon Valley, CA 94043' },
    { icon: <FiPhone />, text: '+1 (800) 555-0123' },
    { icon: <FiMail />, text: 'info@rk-netlinks.com' },
    { icon: <FiClock />, text: 'Mon-Fri: 8AM - 8PM, Sat: 9AM - 5PM' },
  ];

  const socialLinks = [
    { icon: <FiFacebook />, href: '#', label: 'Facebook' },
    { icon: <FiTwitter />, href: '#', label: 'Twitter' },
    { icon: <FiInstagram />, href: '#', label: 'Instagram' },
    { icon: <FiLinkedin />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="custom_container_padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <FiWifi className="text-white text-2xl" />
              </div>
              <h2 className="text-2xl font-bold">
                <span className="text-primary">RK</span>
                <span className="text-white">-NetLinks</span>
              </h2>
            </div>
            <p className="text-gray-300 mb-6">
              Providing high-speed, reliable internet solutions for homes and businesses since 2010. 
              Connecting communities with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="large_text mb-4 font-bold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="large_text mb-4 font-bold">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="text-primary mt-1">{info.icon}</div>
                  <span className="text-gray-300">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="common_border bg-gray-800 rounded-xl p-6 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="large_text mb-2">Stay Connected</h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for the latest updates, offers, and tech tips.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="primary_text bg-primary hover:bg-primary/90 px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RK-NetLinks. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;