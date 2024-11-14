import React, { useState, useEffect } from "react";
import {
  FaHome, FaChartPie, FaUser, FaCog, FaCheckCircle,
  FaSearch, FaSignOutAlt, FaEdit, FaUserCircle,
  FaDumbbell, FaBookOpen, FaSmile, FaPen
} from "react-icons/fa";
import { apiUserProfile } from "../../services/profiles";

const NavItem = ({ icon, label, onClick }) => (
  <div
    className="flex items-center space-x-2 text-gray-300 hover:text-white cursor-pointer transition duration-200"
    onClick={onClick}
  >
    <span className="text-xl">{icon}</span>
    <span className="text-gray-700 font-bold">{label}</span>
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
    if (role === "user") return "text-indigo-800";
    if (role === "peer therapist") return "text-blue-800";
    if (role === "therapist") return "text-pink-800";
    return "text-gray-500";
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-200 text-gray-800 flex flex-col">
        <div className="pt-4 text-center font-bold text-lg border-b border-gray-700">
          Your Mental Health Companion
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center py-6">
          <div className="relative w-24 h-24">
            {userProfile?.profilePicture ? (
              <img
              src={`https://savefiles.org/secure/uploads/${userProfile?.profilePicture}?shareable_link=468`}
              alt={userProfile?.userName}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <FaUserCircle className="w-full h-full text-gray-500" />
            )}
            <FaEdit
              className="absolute bottom-0 right-0 bg-white text-gray-500 rounded-full p-1 cursor-pointer"
              style={{ transform: "translate(25%, 25%)" }}
              onClick={() => (window.location.href = "/profileupdate")}
            />
            {/* Verified Icon as an Exponent */}
            <FaCheckCircle
              className={`absolute top-0 right-0 ${getVerifiedIconColor(
                userProfile?.role
              )} text-lg`}
              style={{ transform: "translate(25%, -25%)" }}
            />
          </div>
          <h3 className="mt-4 text-lg font-bold">
            Welcome!! {userProfile?.userName || "User"}
          </h3>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-6 py-4 space-y-4">
          <NavItem icon={<FaHome className="text-black" />} label="Home" onClick={() => (window.location.href = "/")} />
          <NavItem icon={<FaChartPie className="text-black" />} label="Resources" onClick={() => (window.location.href = "/")}/>
          <NavItem icon={<FaUser className="text-black" />} label="Peer Therapists" onClick={() => (window.location.href = "/peer-therapists")}/>
          <NavItem icon={<FaUser className="text-black" />} label="Professional Therapists" onClick={() => (window.location.href = "/professional-therapists")}/>
          <NavItem icon={<FaPen className="text-black" />} label="Take Assessment" onClick={() => (window.location.href = "/assessment")}/>
          <NavItem icon={<FaDumbbell className="text-black" />} label="Let's Celebrate with You" onClick={() => (window.location.href = "/")}/>
          <NavItem icon={<FaBookOpen className="text-black" />} label="Events" onClick={() => (window.location.href = "/")}/>
        </nav>
        
        <div className="px-6 py-4 border-t border-gray-700">
        <button
  className="flex items-center w-full text-red-800 hover:text-red-500"
  onClick={() => {
    localStorage.removeItem("authToken"); // Remove authentication token
    window.location.href = "/"; // Redirect to homepage
  }}
>
  <FaSignOutAlt className="mr-2" />
  Logout
</button>

        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between p-4 bg-indigo-200 shadow">
          <div className="flex items-center space-x-2">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-full max-w-xs p-2 border rounded-lg outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="flex items-center space-x-4">
  {/* Navbar icons with tooltips, Apply black color only to navbar items */}
  <NavItem 
    icon={<FaDumbbell className="text-black" />} 
    label="Exercise" 
    onClick={() => (window.location.href = "/exercise")}
    customClass="text-black" // Apply black text only for this nav item
  />
  <NavItem 
    icon={<FaBookOpen className="text-black" />} 
    label="Emotion Diary" 
    onClick={() => (window.location.href = "/emotiondairy")}
    customClass="text-black" 
  />
  <NavItem 
    icon={<FaSmile className="text-black" />} 
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
          <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>

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
              <div className="h-48 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="font-semibold text-lg mb-4">User Activity</h3>
              <div className="h-48 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
