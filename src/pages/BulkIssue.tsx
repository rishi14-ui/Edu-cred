import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Upload, Download } from 'lucide-react';

const BulkIssue: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/bulk-issue');
        setTimeout(() => setLoading(false), 600);
      } catch (error) {
        console.log('Mock API call to /api/bulk-issue');
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
        <FileText className="w-8 h-8 text-violet-400 mr-3" />
        <h1 className="text-3xl font-bold text-white">Bulk Issue Certificates</h1>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-lg p-8 mb-6">
            <Upload className="w-16 h-16 text-violet-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Upload CSV File</h2>
            <p className="text-gray-300">Upload a CSV file containing student information to issue certificates in bulk</p>
          </div>

          <button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
            Choose File
          </button>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <h3 className="text-lg font-semibold text-white mb-4">CSV Format Requirements</h3>
          <div className="bg-gray-700/30 rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm">
              student_name,email,course,completion_date,grade
            </code>
          </div>
          <div className="flex items-center space-x-4">
            <Download className="w-5 h-5 text-gray-400" />
            <a href="#" className="text-violet-400 hover:text-violet-300 transition-colors">
              Download Sample CSV Template
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BulkIssue;