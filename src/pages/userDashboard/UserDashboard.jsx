import React from 'react';
import { FaHome, FaChartPie, FaUser, FaCog, FaBell, FaSearch, FaSignOutAlt } from 'react-icons/fa';

const UserDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1E293B] text-white flex flex-col">
        <div className="py-4 text-center font-bold text-2xl border-b border-gray-700">
          Dashboard
        </div>
        <nav className="flex-1 px-6 py-4 space-y-4">
          <NavItem icon={<FaHome />} label="Home" />
          <NavItem icon={<FaChartPie />} label="Analytics" />
          <NavItem icon={<FaUser />} label="Users" />
          <NavItem icon={<FaCog />} label="Settings" />
        </nav>
        <div className="px-6 py-4 border-t border-gray-700">
          <button className="flex items-center w-full text-red-400 hover:text-red-500">
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between p-4 bg-white shadow">
          <div className="flex items-center space-x-2">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-full max-w-xs p-2 border rounded-lg outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="flex items-center space-x-4">
            <FaBell className="text-gray-500 hover:text-blue-500 cursor-pointer" />
            <div className="w-10 h-10 rounded-full bg-gray-300"></div> {/* Profile Image Placeholder */}
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatsCard title="Total Users" value="1,254" />
            <StatsCard title="Revenue" value="$32,700" />
            <StatsCard title="New Signups" value="172" />
            <StatsCard title="Support Tickets" value="56" />
          </div>

          {/* Charts or Other Components Placeholder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Sales Analytics</h3>
              <div className="h-48 bg-gray-200 rounded-lg"></div> {/* Chart Placeholder */}
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="font-semibold text-lg mb-4">User Activity</h3>
              <div className="h-48 bg-gray-200 rounded-lg"></div> {/* Chart Placeholder */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Reusable NavItem component
const NavItem = ({ icon, label }) => (
  <div className="flex items-center space-x-2 text-gray-300 hover:text-white cursor-pointer">
    <span className="text-xl">{icon}</span>
    <span>{label}</span>
  </div>
);

// Reusable StatsCard component
const StatsCard = ({ title, value }) => (
  <div className="p-4 bg-white shadow rounded-lg">
    <h4 className="text-gray-500">{title}</h4>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default UserDashboard;
