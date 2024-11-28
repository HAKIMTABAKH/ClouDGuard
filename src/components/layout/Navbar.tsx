import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Technology', href: '/technology' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              <img src="/images/logo.png" alt="CloudGuard Logo" className="h-10 w-10" />
              <span className="ml-2 text-xl font-semibold text-gray-900">CloudGuard</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 hover:text-sky-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            {/* Updated Contact Us button */}
            <Link
              to="/contact-us" // Navigate to the Contact Us page
              className="bg-sky-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-sky-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-sky-600"
              >
                {item.name}
              </Link>
            ))}
            {/* Updated Contact Us button for mobile */}
            <Link
              to="/contact-us" // Navigate to the Contact Us page
              className="w-full mt-2 bg-sky-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-sky-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
