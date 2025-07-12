import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/homepage');
        setTimeout(() => setLoading(false), 400);
      } catch (error) {
        console.log('Mock API call to /api/homepage');
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
      <div className="flex items-center mb-8">
        <Home className="w-8 h-8 text-violet-400 mr-3" />
        <h1 className="text-3xl font-bold text-white">Homepage Management</h1>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Main Homepage
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Homepage Analytics</h2>
            <div className="space-y-4">
              <div className="bg-gray-700/30 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Visitors</span>
                  <span className="text-white font-semibold">12,847</span>
                </div>
              </div>
              <div className="bg-gray-700/30 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Page Views</span>
                  <span className="text-white font-semibold">45,231</span>
                </div>
              </div>
              <div className="bg-gray-700/30 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Bounce Rate</span>
                  <span className="text-white font-semibold">23.4%</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-gray-700/50 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors text-left">
                Update Hero Section
              </button>
              <button className="w-full bg-gray-700/50 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors text-left">
                Manage Features
              </button>
              <button className="w-full bg-gray-700/50 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors text-left">
                Edit Trust Bar
              </button>
              <button className="w-full bg-gray-700/50 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors text-left">
                Configure Footer
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;