import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AlignCenterVertical as Certificate, Download, Eye, Share } from 'lucide-react';

const MyCertificate: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [certificates, setCertificates] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/my-certificate');
        setTimeout(() => {
          setCertificates([
            {
              id: 1,
              courseName: 'Blockchain Fundamentals',
              institution: 'QUIN Academy',
              issueDate: '2024-01-15',
              grade: 'A+',
              status: 'Verified'
            },
            {
              id: 2,
              courseName: 'Smart Contract Development',
              institution: 'QUIN Academy',
              issueDate: '2024-02-20',
              grade: 'A',
              status: 'Verified'
            },
            {
              id: 3,
              courseName: 'Cryptocurrency Economics',
              institution: 'QUIN Academy',
              issueDate: '2024-03-10',
              grade: 'B+',
              status: 'Pending'
            }
          ]);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.log('Mock API call to /api/my-certificate');
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
      className="max-w-6xl mx-auto"
    >
      <div className="flex items-center mb-8">
        <Certificate className="w-8 h-8 text-violet-400 mr-3" />
        <h1 className="text-3xl font-bold text-white">My Certificates</h1>
      </div>

      <div className="grid gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-semibold text-white mr-4">{cert.courseName}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === 'Verified' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {cert.status}
                  </span>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Institution:</span>
                    <p className="text-white">{cert.institution}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Issue Date:</span>
                    <p className="text-white">{cert.issueDate}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Grade:</span>
                    <p className="text-white">{cert.grade}</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2 ml-6">
                <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                  <Eye className="w-5 h-5 text-gray-300" />
                </button>
                <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                  <Download className="w-5 h-5 text-gray-300" />
                </button>
                <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                  <Share className="w-5 h-5 text-gray-300" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {certificates.length === 0 && (
        <div className="text-center py-12">
          <Certificate className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">No Certificates Found</h3>
          <p className="text-gray-500">You haven't received any certificates yet.</p>
        </div>
      )}
    </motion.div>
  );
};

export default MyCertificate;