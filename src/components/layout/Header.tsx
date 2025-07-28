'use client'
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiWifi, FiChevronDown } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Solutions', href: '#', subItems: ['Residential', 'Business', 'Enterprise'] },
    { name: 'Coverage', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Support', href: '#' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="custom_container_space">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary p-2 rounded-lg">
              <FiWifi className="text-white text-2xl" />
            </div>
            <h1 className="text-2xl font-bold">
              <span className="text-primary">RK</span>
              <span className={scrolled ? 'text-gray-800' : 'text-white'}>-NetLinks</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <a 
                  href={item.href} 
                  className={`flex items-center ${scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-secondary'} font-medium transition-colors`}
                >
                  {item.name}
                  {item.subItems && <FiChevronDown className="ml-1" />}
                </a>
                
                {item.subItems && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.subItems.map((subItem, subIndex) => (
                      <a 
                        key={subIndex} 
                        href="#" 
                        className="block px-4 py-2 text-gray-800 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FiX className={scrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <FiMenu className={scrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            {navItems.map((item, index) => (
              <div key={index} className="mb-3">
                <a 
                  href={item.href} 
                  className="block text-gray-800 font-medium py-2"
                >
                  {item.name}
                </a>
                {item.subItems && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <a 
                        key={subIndex} 
                        href="#" 
                        className="block text-gray-600 hover:text-primary transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="w-full primary_text bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-lg transition-colors">
              Sign In
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;