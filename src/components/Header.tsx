import React from 'react';
import { ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative z-50 w-full px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white tracking-wider">QUIN</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#about" 
            className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
          >
            About Quin
          </a>
          <a 
            href="#solutions" 
            className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
          >
            Solutions
          </a>
          <a 
            href="#why-choose" 
            className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
          >
            Why Choose Quin
          </a>
          <a 
            href="#faq" 
            className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
          >
            FAQ
          </a>
          <a 
            href="#blog" 
            className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
          >
            Blog
          </a>
        </nav>

        {/* Language Selector & CTA */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-2 text-gray-300 cursor-pointer hover:text-white transition-colors duration-200">
            <span className="font-medium">EN</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          
          <button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold px-6 py-2.5 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
            Join Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;