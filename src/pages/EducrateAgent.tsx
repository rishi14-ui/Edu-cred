import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageCircle, Zap } from 'lucide-react';

const EducrateAgent: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/educrate-agent');
        setTimeout(() => setLoading(false), 700);
      } catch (error) {
        console.log('Mock API call to /api/educrate-agent');
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
        <Bot className="w-8 h-8 text-violet-400 mr-3" />
        <h1 className="text-3xl font-bold text-white">Educrate Agent</h1>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <Bot className="w-12 h-12 text-violet-400" />
          </div>
          <h2 className="text-2xl font-semibold text-white mb-4">AI-Powered Education Assistant</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Your intelligent companion for managing educational credentials, answering questions, 
            and providing insights about the blockchain certification process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-gray-700/30 rounded-lg">
            <MessageCircle className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Smart Conversations</h3>
            <p className="text-gray-400 text-sm">Natural language processing for intuitive interactions</p>
          </div>

          <div className="text-center p-6 bg-gray-700/30 rounded-lg">
            <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Instant Responses</h3>
            <p className="text-gray-400 text-sm">Get immediate answers to your certification queries</p>
          </div>

          <div className="text-center p-6 bg-gray-700/30 rounded-lg">
            <Bot className="w-8 h-8 text-violet-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">24/7 Availability</h3>
            <p className="text-gray-400 text-sm">Always ready to assist with your educational needs</p>
          </div>
        </div>

        <div className="bg-gray-700/30 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Chat Interface</h3>
            <span className="bg-green-500 w-3 h-3 rounded-full"></span>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4 h-64 flex items-center justify-center">
            <p className="text-gray-400">Chat interface will be loaded here...</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EducrateAgent;