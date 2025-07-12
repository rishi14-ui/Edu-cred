import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Users, FileText, Activity } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/admin-dashboard');
        setTimeout(() => {
          setStats({
            totalUsers: 1247,
            activeCertificates: 3456,
            pendingRequests: 23,
            systemHealth: 98.5
          });
          setLoading(false);
        }, 800);
      } catch (error) {
        console.log('Mock API call to /api/admin-dashboard');
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
        <Settings className="w-8 h-8 text-violet-400 mr-3" />
        <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Users</p>
              <p className="text-2xl font-bold text-white">{stats?.totalUsers}</p>
            </div>
            <Users className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Active Certificates</p>
              <p className="text-2xl font-bold text-white">{stats?.activeCertificates}</p>
            </div>
            <FileText className="w-8 h-8 text-green-400" />
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Pending Requests</p>
              <p className="text-2xl font-bold text-white">{stats?.pendingRequests}</p>
            </div>
            <Activity className="w-8 h-8 text-yellow-400" />
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">System Health</p>
              <p className="text-2xl font-bold text-white">{stats?.systemHealth}%</p>
            </div>
            <Activity className="w-8 h-8 text-violet-400" />
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
        <h2 className="text-xl font-semibold text-white mb-6">System Overview</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-gray-700/30 rounded-lg">
            <span className="text-gray-300">Database Status</span>
            <span className="text-green-400 font-semibold">Online</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-700/30 rounded-lg">
            <span className="text-gray-300">Blockchain Network</span>
            <span className="text-green-400 font-semibold">Connected</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-700/30 rounded-lg">
            <span className="text-gray-300">API Services</span>
            <span className="text-green-400 font-semibold">Operational</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;