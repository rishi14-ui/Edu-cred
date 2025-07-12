import React from 'react';
import { Shield, Zap, Globe, Code } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade security with advanced cryptographic protocols ensuring your data remains protected.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'High-performance blockchain designed for speed with minimal latency and maximum throughput.'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Distributed worldwide infrastructure providing reliability and accessibility across all regions.'
    },
    {
      icon: Code,
      title: 'Developer Friendly',
      description: 'Comprehensive APIs and SDKs with extensive documentation for seamless integration.'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Quin
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Built for the future of decentralized applications with cutting-edge technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-8 hover:border-violet-500/50 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-violet-600 to-purple-600 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-200">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;