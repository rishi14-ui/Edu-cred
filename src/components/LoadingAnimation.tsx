import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-b from-gray-900 via-purple-900 to-black flex items-center justify-center z-50"
    >
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white tracking-wider">QUIN</h1>
        </motion.div>

        {/* Loading Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-violet-600 border-t-transparent rounded-full mx-auto mb-6"
        />

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 text-lg"
        >
          Initializing Dashboard...
        </motion.p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto mt-6 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;