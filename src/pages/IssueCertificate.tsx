import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, User, Calendar, BookOpen } from 'lucide-react';

const IssueCertificate: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/issue-certificate');
        setTimeout(() => setLoading(false), 600);
      } catch (error) {
        console.log('Mock API call to /api/issue-certificate');
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
        <Award className="w-8 h-8 text-violet-400 mr-3" />
        <h1 className="text-3xl font-bold text-white">Issue Certificate</h1>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Student Name
              </label>
              <input
                type="text"
                placeholder="Enter student's full name"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-violet-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="student@example.com"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-violet-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                <BookOpen className="w-4 h-4 inline mr-2" />
                Course Name
              </label>
              <input
                type="text"
                placeholder="Enter course name"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-violet-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Completion Date
              </label>
              <input
                type="date"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Grade/Score
              </label>
              <select className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500">
                <option value="">Select Grade</option>
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Institution
              </label>
              <input
                type="text"
                placeholder="Institution name"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-violet-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Additional Notes
            </label>
            <textarea
              rows={3}
              placeholder="Any additional information or notes"
              className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 resize-none"
            ></textarea>
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Issue Certificate
            </button>
            <button
              type="button"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Save as Draft
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default IssueCertificate;