import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const DashboardLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black">
      {/* Main Content Area */}
      <div className="pr-80"> {/* Right padding to account for fixed sidebar */}
        <div className="min-h-screen p-8">
          <Outlet />
        </div>
      </div>
      
      {/* Fixed Right Sidebar */}
      <Sidebar />
    </div>
  );
};

export default DashboardLayout;