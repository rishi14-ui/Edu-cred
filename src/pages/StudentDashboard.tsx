import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wallet, 
  User, 
  Award, 
  BookOpen, 
  TrendingUp, 
  Shield, 
  Copy, 
  ExternalLink,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Globe,
  Zap
} from 'lucide-react';
import { useMetaMask } from '../hooks/useMetaMask';

const StudentDashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [studentData, setStudentData] = useState<any>(null);
  const [copied, setCopied] = useState(false);
  
  const {
    isConnected,
    account,
    balance,
    chainId,
    networkName,
    isLoading: walletLoading,
    error: walletError,
    connect,
    disconnect,
    switchNetwork
  } = useMetaMask();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/student-dashboard');
        setTimeout(() => {
          setStudentData({
            name: 'Alex Johnson',
            studentId: 'STU-2024-001',
            email: 'alex.johnson@university.edu',
            enrollmentDate: '2024-01-15',
            program: 'Computer Science',
            year: 'Junior',
            gpa: '3.85',
            completedCourses: 24,
            activeCertificates: 8,
            skillsVerified: 12,
            achievements: [
              'Dean\'s List - Fall 2023',
              'Blockchain Developer Certified',
              'Smart Contract Specialist',
              'Web3 Security Expert'
            ]
          });
          setLoading(false);
        }, 800);
      } catch (error) {
        console.log('Mock API call to /api/student-dashboard');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

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
      className="max-w-7xl mx-auto space-y-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <User className="w-8 h-8 text-violet-400 mr-3" />
          <h1 className="text-3xl font-bold text-white">Student Dashboard</h1>
        </div>
        
        {/* MetaMask Connection */}
        <div className="flex items-center space-x-4">
          {!isConnected ? (
            <button
              onClick={connect}
              disabled={walletLoading}
              className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50"
            >
              {walletLoading ? (
                <RefreshCw className="w-5 h-5 animate-spin" />
              ) : (
                <Wallet className="w-5 h-5" />
              )}
              <span>{walletLoading ? 'Connecting...' : 'Connect MetaMask'}</span>
            </button>
          ) : (
            <div className="flex items-center space-x-3">
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                Connected
              </div>
              <button
                onClick={disconnect}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Disconnect
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Error Display */}
      {walletError && (
        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 flex items-center">
          <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
          <span className="text-red-300">{walletError}</span>
        </div>
      )}

      {/* MetaMask Wallet Information */}
      {isConnected && (
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Wallet className="w-6 h-6 text-orange-400 mr-3" />
            <h2 className="text-xl font-semibold text-white">MetaMask Wallet Information</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Wallet Address */}
            <div className="bg-gray-700/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Wallet Address</span>
                <button
                  onClick={() => copyToClipboard(account || '')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <div className="text-white font-mono text-sm">
                {account ? formatAddress(account) : 'Not connected'}
              </div>
              {copied && (
                <div className="text-green-400 text-xs mt-1">Copied!</div>
              )}
            </div>

            {/* Balance */}
            <div className="bg-gray-700/30 rounded-lg p-4">
              <div className="text-gray-400 text-sm mb-2">Balance</div>
              <div className="text-white font-semibold">
                {balance ? `${balance} ETH` : '0.0000 ETH'}
              </div>
            </div>

            {/* Network */}
            <div className="bg-gray-700/30 rounded-lg p-4">
              <div className="text-gray-400 text-sm mb-2">Network</div>
              <div className="text-white font-semibold flex items-center">
                <Globe className="w-4 h-4 mr-2 text-blue-400" />
                {networkName || 'Unknown'}
              </div>
            </div>

            {/* Chain ID */}
            <div className="bg-gray-700/30 rounded-lg p-4">
              <div className="text-gray-400 text-sm mb-2">Chain ID</div>
              <div className="text-white font-semibold">
                {chainId || 'N/A'}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 flex space-x-4">
            <button
              onClick={() => window.open(`https://etherscan.io/address/${account}`, '_blank')}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View on Etherscan</span>
            </button>
            <button
              onClick={() => switchNetwork('0x1')}
              className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Zap className="w-4 h-4" />
              <span>Switch to Mainnet</span>
            </button>
          </div>
        </div>
      )}

      {/* Student Profile Information */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{studentData?.name}</h3>
              <p className="text-gray-400">{studentData?.program}</p>
              <p className="text-gray-500 text-sm">ID: {studentData?.studentId}</p>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-gray-400 text-sm">Email</span>
                <p className="text-white">{studentData?.email}</p>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Academic Year</span>
                <p className="text-white">{studentData?.year}</p>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Enrollment Date</span>
                <p className="text-white">{studentData?.enrollmentDate}</p>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Current GPA</span>
                <p className="text-white font-semibold">{studentData?.gpa}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats and Progress */}
        <div className="lg:col-span-2 space-y-6">
          {/* Academic Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Completed Courses</p>
                  <p className="text-2xl font-bold text-white">{studentData?.completedCourses}</p>
                </div>
                <BookOpen className="w-8 h-8 text-blue-400" />
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Active Certificates</p>
                  <p className="text-2xl font-bold text-white">{studentData?.activeCertificates}</p>
                </div>
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Skills Verified</p>
                  <p className="text-2xl font-bold text-white">{studentData?.skillsVerified}</p>
                </div>
                <Shield className="w-8 h-8 text-green-400" />
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Recent Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {studentData?.achievements.map((achievement: string, index: number) => (
                <div key={index} className="bg-gray-700/30 rounded-lg p-4 flex items-center">
                  <Award className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-white">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blockchain Integration Status */}
      {isConnected && (
        <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-xl p-8">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 text-violet-400 mr-3" />
            <h3 className="text-lg font-semibold text-white">Blockchain Integration Status</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
              <span className="text-gray-300">Wallet Connected</span>
              <span className="text-green-400 font-semibold flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                Active
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
              <span className="text-gray-300">Credentials Verified</span>
              <span className="text-green-400 font-semibold flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                On-Chain
              </span>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default StudentDashboard;