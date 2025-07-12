import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, FileText, Phone, Bot, Globe, Award, AlignCenterVertical as Certificate, UserCircle, Settings } from 'lucide-react';

const Sidebar: React.FC = () => {
  const menuItems = [
    { name: 'About', path: '/dashboard/about', icon: User },
    { name: 'Admin Dashboard', path: '/dashboard/admin', icon: Settings },
    { name: 'Bulk Issue', path: '/dashboard/bulk-issue', icon: FileText },
    { name: 'Contact', path: '/dashboard/contact', icon: Phone },
    { name: 'Educrate Agent', path: '/dashboard/educrate-agent', icon: Bot },
    { name: 'Homepage', path: '/dashboard/homepage', icon: Home },
    { name: 'Issue Certificate', path: '/dashboard/issue-certificate', icon: Award },
    { name: 'My Certificate', path: '/dashboard/my-certificate', icon: Certificate },
    { name: 'Student Dashboard', path: '/dashboard/student-dashboard', icon: UserCircle },
  ];

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-gray-900 border-l border-gray-800 shadow-2xl z-40">
      {/* Sidebar Header */}
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-xl font-bold text-white mb-2">Dashboard Menu</h2>
        <p className="text-gray-400 text-sm">Navigate through your workspace</p>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                isActive
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Sidebar Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
        <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-lg p-4">
          <p className="text-white font-semibold text-sm mb-1">QUIN Dashboard</p>
          <p className="text-gray-400 text-xs">Blockchain Built for Utility</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;