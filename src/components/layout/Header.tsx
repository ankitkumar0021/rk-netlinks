'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import ImageComponent from '../ui/ImageComponent';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="custom_container_space">
        <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 w-28 h-12 overflow-hidden">
              <Link href={`/`} className="relative block w-full h-full" aria-label={`Open ${`RK Netlinks`}`}>
                  <ImageComponent url={`/images/logo.png`} img_title={`logo`} object_cover={true} />
              </Link>
            </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                {item.name}
              </a>
            ))}
            <a href="tel:+911234567890">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-lg transition-all flex items-center justify-center cursor-pointer">
                <FiPhone className="mr-2" /> Call us
              </button>
            </a>

          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-2xl text-gray-700 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden mt-2 bg-white rounded-lg shadow-lg p-4 space-y-3">
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className="block text-gray-800 font-medium py-2">
                {item.name}
              </a>
            ))}
            <a href="tel:+911234567890">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-lg transition-all flex items-center justify-center cursor-pointer">
                <FiPhone className="mr-2" /> Call us
              </button>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
