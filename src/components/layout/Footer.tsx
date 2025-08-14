// components/Footer.jsx
import Link from 'next/link';
import React from 'react';
import { 
  FiMapPin, FiPhone, FiMail, FiClock, 
  FiFacebook, FiTwitter, FiInstagram, FiLinkedin,
  FiWifi
} from 'react-icons/fi';

 const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" }
  ];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="custom_container_padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <FiWifi className="text-white text-2xl" />
              </div>
              <h2 className="text-2xl font-bold">
                <span className="text-blue-400">RK</span>
                <span className="text-white"> Netlinks</span>
              </h2>
            </div>
            <p className="text-gray-300 mb-6">
              Enabling Bandwidth for More - providing More Speed, More Entertainment, 
              More Productivity and More Value to our customers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors">
                <FiFacebook className="text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-400 p-2 rounded-full transition-colors">
                <FiTwitter className="text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-pink-600 p-2 rounded-full transition-colors">
                <FiInstagram className="text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <FiLinkedin className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
      <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {['FTTH Services', 'Broadband Services', 'Lease Line Services', 'Dedicated Internet', 'Business Solutions'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="text-blue-400 mt-1 mr-3" />
                <span className="text-gray-300">Corporate Office, Tech Park, Bangalore, India</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="text-blue-400 mr-3" />
                <span className="text-gray-300">+91 5646545644 </span>
              </li>
              <li className="flex items-center">
                <FiMail className="text-blue-400 mr-3" />
                <span className="text-gray-300">support@rknetlinks.com</span>
              </li>
              <li className="flex items-center">
                <FiClock className="text-blue-400 mr-3" />
                <span className="text-gray-300">24/7 Customer Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} RK Netlinks Solutions. All rights reserved.
          </p>
          {/* <div className="flex justify-center space-x-6 mt-2">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Sitemap</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;