import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { UserCircle, Mail, Calendar, MapPin, Award } from 'lucide-react';

const PublicProfile: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/public-profile');
        setTimeout(() => {
          setProfile({
            name: 'John Doe',
            email: 'john.doe@example.com',
            joinDate: '2023-09-15',
            location: 'San Francisco, CA',
            bio: 'Passionate blockchain developer and educator with expertise in smart contracts and decentralized applications.',
            achievements: [
              'Blockchain Fundamentals Certified',
              'Smart Contract Developer',
              'DeFi Specialist',
              'Web3 Security Expert'
            ],
            stats: {
              certificatesEarned: 12,
              coursesCompleted: 8,
              skillsVerified: 15
            }
          });
          setLoading(false);
        }, 700);
      } catch (error) {
        console.log('Mock API call to /api/public-profile');
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
        <UserCircle className="w-8 h-8 text-violet-400 mr-3" />
        <h1 className="text-3xl font-bold text-white">Public Profile</h1>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
        {/* Profile Header */}
        <div className="flex items-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center mr-6">
            <UserCircle className="w-16 h-16 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{profile?.name}</h2>
            <div className="flex items-center space-x-4 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>{profile?.email}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Joined {profile?.joinDate}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{profile?.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-3">About</h3>
          <p className="text-gray-300 leading-relaxed">{profile?.bio}</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-700/30 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-violet-400 mb-2">{profile?.stats.certificatesEarned}</div>
            <div className="text-gray-300">Certificates Earned</div>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-violet-400 mb-2">{profile?.stats.coursesCompleted}</div>
            <div className="text-gray-300">Courses Completed</div>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-violet-400 mb-2">{profile?.stats.skillsVerified}</div>
            <div className="text-gray-300">Skills Verified</div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Award className="w-5 h-5 mr-2" />
            Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {profile?.achievements.map((achievement: string, index: number) => (
              <div key={index} className="bg-gray-700/30 rounded-lg p-4 flex items-center">
                <Award className="w-5 h-5 text-yellow-400 mr-3" />
                <span className="text-white">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PublicProfile;