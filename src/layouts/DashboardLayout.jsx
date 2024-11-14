import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserAlt, FaSignOutAlt } from "react-icons/fa"; // Import icons

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white min-h-screen">
        <div className="p-6">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
        </div>
        <nav className="mt-6">
          <ul>
            <li>
              <Link to="/userdashboard" className="flex items-center px-6 py-3 text-lg hover:bg-gray-700">
                <FaHome className="mr-3" /> Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className="flex items-center px-6 py-3 text-lg hover:bg-gray-700">
                <FaUserAlt className="mr-3" /> Profile
              </Link>
            </li>
            <li>
              <Link to="/logout" className="flex items-center px-6 py-3 text-lg hover:bg-gray-700">
                <FaSignOutAlt className="mr-3" /> Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-6">
        {children} {/* This is where the content (e.g., UpdateProfile) will be rendered */}
      </div>
    </div>
  );
};

export default DashboardLayout;
