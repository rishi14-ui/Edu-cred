import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Mock API call
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/about');
        // Simulate API response
        setTimeout(() => {
          setData({
            name: 'QUIN Platform',
            description: 'Advanced blockchain infrastructure for educational credentials',
            version: '2.1.0',
            lastUpdated: new Date().toLocaleDateString()
          });
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.log('Mock API call to /api/about');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
        <div className="flex items-center mb-6">
          <User className="w-8 h-8 text-violet-400 mr-3" />
          <h1 className="text-3xl font-bold text-white">About QUIN</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Platform Information</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-gray-400 w-24">Name:</span>
                <span className="text-white">{data?.name}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 w-24">Version:</span>
                <span className="text-white">{data?.version}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 w-24">Updated:</span>
                <span className="text-white">{data?.lastUpdated}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Description</h2>
            <p className="text-gray-300 leading-relaxed">
              {data?.description}
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-2">Mission Statement</h3>
          <p className="text-gray-300">
            Empowering educational institutions with secure, verifiable, and tamper-proof 
            credential management through blockchain technology.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;