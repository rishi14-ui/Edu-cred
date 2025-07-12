import React from 'react';

const TrustBar: React.FC = () => {
  const partnerLogos = [
    'LOGOSUM',
    'TECHCORP',
    'BLOCKTEC',
    'CRYPTONET',
    'WEBTHREE',
    'CHAINLINK'
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <p className="text-gray-400 text-lg font-medium mb-12">
          Trusted by worldwide partners and customers
        </p>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6 h-20 flex items-center justify-center hover:bg-gray-700/30 transition-all duration-200 group"
            >
              <span className="text-gray-500 font-semibold text-sm group-hover:text-gray-400 transition-colors duration-200">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;