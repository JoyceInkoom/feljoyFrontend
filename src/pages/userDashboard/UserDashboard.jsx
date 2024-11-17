// components/UserDashboard.jsx

import React, { useState, useEffect } from "react";
import Sidebar from "../../layouts/Sidebar"; 
import {
  FaSearch,
  FaUserCircle,
  FaBookOpen,
  FaSmile,
  FaPray,
} from "react-icons/fa";
import { apiUserProfile } from "../../services/profiles";

const NavItem = ({ icon, label, onClick, customClass }) => (
  <div
    className={`flex items-center space-x-2 text-gray-300 hover:text-white cursor-pointer transition duration-200 ${customClass}`}
    onClick={onClick}
  >
    <span className="text-xl">{icon}</span>
    <span className="text-white font-bold">{label}</span>
  </div>
);

const StatsCard = ({ title, value }) => (
  <div className="p-4 bg-white shadow-md rounded-lg transition duration-200 transform hover:scale-105">
    <h4 className="text-gray-500">{title}</h4>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const UserDashboard = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await apiUserProfile(token);
        setUserProfile(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchUserProfile();
  }, []);

  const getVerifiedIconColor = (role) => {
    if (role === "user") return "text-green-500";
    if (role === "peer-therapist") return "text-orange-500";
    if (role === "professional-therapist") return "text-pink-500";
    return "text-gray-500";
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between p-4 bg-indigo-900 shadow">
          <div className="flex items-center space-x-2">
            <FaSearch className="text-white" />
            <input
              type="text"
              placeholder="Search"
              className="w-full max-w-xs p-2 border rounded-lg outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="flex items-center space-x-4">
            {/* Navbar icons with tooltips, Apply black color only to navbar items */}
            <NavItem
              icon={<FaPray className="text-white" />}
              label="Meditation"
              onClick={() => (window.location.href = "/meditation")}
              customClass="text-black"
            />
            <NavItem
              icon={<FaBookOpen className="text-white" />}
              label="Emotion Diary"
              onClick={() => (window.location.href = "/emotiondairy")}
              customClass="text-black"
            />
            <NavItem
              icon={<FaSmile className="text-white" />}
              label="Stress Ball"
              onClick={() => (window.location.href = "/stressball")}
              customClass="text-black"
            />

            {/* Profile Avatar */}
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              {userProfile?.profilePicture ? (
                <img
                  src={`https://savefiles.org/secure/uploads/${userProfile?.profilePicture}?shareable_link=468`}
                  alt={userProfile?.userName}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <FaUserCircle className="w-full h-full text-black" />
              )}
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">Welcome To Your Mental Health Companion Dashboard</h2>

          {/* Flow Chart */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-6 flex flex-row justify-center items-center">
            <div className="flowchart-step bg-blue-500 text-white rounded-lg px-4 py-2">
              <h4 className="text-lg">Start</h4>
            </div>
            <div className="flowchart-arrow border-t-2 border-gray-300 mx-4"></div>
            <div className="flowchart-step bg-orange-500 text-white rounded-lg px-4 py-2">
              <h4 className="text-lg">Find Support</h4>
              <ul className="text-sm text-gray-200">
                <li>Peer Therapists</li>
                <li>Professional Therapists</li>
            </ul>
          </div>
          <div className="flowchart-arrow border-t-2 border-gray-300 mx-4"></div>
          <div className="flowchart-step bg-green-500 text-white rounded-lg px-4 py-2">
            <h4 className="text-lg">Manage Stress</h4>
            <ul className="text-sm text-gray-200">
              <li>Stress Ball</li>
              <li>Meditation</li>
            </ul>
          </div>
          <div className="flowchart-arrow border-t-2 border-gray-300 mx-4"></div>
          <div className="flowchart-step bg-purple-500 text-white rounded-lg px-4 py-2">
            <h4 className="text-lg">Track Progress</h4>
            <ul className="text-sm text-gray-200">
              <li>Emotion Diary</li>
              <li>Log Milestones</li>
            </ul>
          </div>
          <div className="flowchart-arrow border-t-2 border-gray-300 mx-4"></div>
          <div className="flowchart-step bg-red-500 text-white rounded-lg px-4 py-2">
            <h4 className="text-lg">Resources</h4>
            <ul className="text-sm text-gray-200">
              <li>Access Resources</li>
              <li>Learn More</li>
            </ul>
          </div>
          <div className="flowchart-arrow border-t-2 border-gray-300 mx-4"></div>
          <div className="flowchart-step bg-blue-500 text-white rounded-lg px-4 py-2">
            <h4 className="text-lg">Finish</h4>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatsCard title="Total Interactions" value="1,254" />
          <StatsCard title="Engaged Resources" value="$32,700" />
          <StatsCard title="Note To Self" value="172" />
          <StatsCard title="Support" value="56" />
        </div>

        {/* Charts or Other Components */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="font-semibold text-lg mb-4">Mental State Analytics</h3>
            <div className="h-20 bg-gray-200 rounded-lg"></div>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="font-semibold text-lg mb-4">User Activity</h3>
            <div className="h-20 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </main>
    </div>
  </div>
);
};
export default UserDashboard;