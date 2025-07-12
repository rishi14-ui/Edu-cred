import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/loading');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient Portal Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-violet-900/20 via-purple-900/10 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-violet-500/30 via-purple-600/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-white/10 via-violet-400/20 to-transparent rounded-full blur-2xl"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Welcome Text */}
        <p className="text-gray-400 text-sm uppercase tracking-widest font-medium mb-6 opacity-80">
          Welcome to Quin
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Blockchain Built for{' '}
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            Utility
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 leading-relaxed max-w-3xl mx-auto">
          Blockchain infrastructure designed for reliability, efficiency, and real-world impact.
        </p>

        {/* CTA Button */}
        <button 
          onClick={handleGetStarted}
          className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-2xl text-lg"
        >
          Get Started
        </button>
      </div>

      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-400 rounded-full animate-ping opacity-75"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;