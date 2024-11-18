import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // Import useLocation for URL tracking
import {
  FaHome,
  FaChartPie,
  FaUser,
  FaCog,
  FaCheckCircle,
  FaSignOutAlt,
  FaEdit,
  FaUserCircle,
  FaDumbbell,
  FaBookOpen,
  FaPen,
  FaChevronLeft,
  FaChevronRight,
  FaVideo,
  FaReadme,
  FaBook,
  
} from "react-icons/fa";
import { apiUserProfile } from "../services/profiles"; // Ensure this service exists

const Sidebar3 = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const location = useLocation(); // Track current location

  // Fetch user profile data
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await apiUserProfile(token); // Assuming your service fetches the profile
        setUserProfile(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchUserProfile();
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.assign("/"); // Redirect to home page after logout
  };

  const navItems = [
    { label: "Home", icon: <FaHome />, path: "/userdashboard" },
    { label: "Post Assessment", icon: <FaBook />, path: "/postassessment" },
    { label: "Add Article", icon: <FaReadme />, path: "/addarticle" },
    { label: "Add Video", icon: <FaVideo /> , path: "/addvideo" },
    { label: "Add EBook", icon: <FaBookOpen />, path: "/addebook" },
    { label: "To Do", icon: <FaPen />, path: "/todo" },
    { label: "Responses", icon: <FaUser />, path: "/responses" },
  ];

  return (
    <aside
      className={`${
        isCollapsed ? "w-16" : "w-64"
      } bg-indigo-900 text-white flex flex-col h-screen transition-all duration-300`}
    >
      {/* Collapse Button */}
      <button
        className="p-2 text-white focus:outline-none flex justify-end"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </button>

      {/* Profile Section */}
      <div className={`flex flex-col items-center py-4 ${isCollapsed && "hidden"}`}>
        <h3 className="text-center font-bold text-lg border-b border-white -mt-8">
          Your Mental Health Companion
        </h3>
        <div className="relative w-24 h-24 mt-4">
          {userProfile?.profilePicture ? (
            <img
              src={`https://savefiles.org/secure/uploads/${userProfile?.profilePicture}?shareable_link=468`}
              alt={userProfile?.userName}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <FaUserCircle className="w-full h-full text-white" />
          )}
          <FaEdit
            className="absolute bottom-0 right-0 bg-white text-gray-500 rounded-full p-1 cursor-pointer"
            style={{ transform: "translate(25%, 25%)" }}
            onClick={() => window.location.assign("/profileupdate")}
          />
          <FaCheckCircle
            className={`absolute top-0 right-0 ${
              userProfile?.role === "peer-therapist"
                ? "text-orange-500"
                : userProfile?.role === "professional-therapist"
                ? "text-pink-500"
                : "text-green-500"
            } text-lg`}
            style={{ transform: "translate(25%, -25%)" }}
          />
        </div>
        <h3 className="mt-4 text-lg font-bold">Welcome, {userProfile?.userName || "User"}</h3>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path} // Use Link from react-router-dom
            className={`flex items-center p-2 rounded-md cursor-pointer transition-all duration-200 ${
              location.pathname === item.path
                ? "bg-indigo-700 text-white"
                : "hover:bg-indigo-800"
            } ${isCollapsed ? "justify-center" : "space-x-4"}`}
          >
            <span className="text-xl">{item.icon}</span>
            {!isCollapsed && <span className="font-bold">{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="px-4 py-4 border-t border-indigo-700">
        <button
          className="flex items-center w-full text-red-500 hover:text-red-700"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          {!isCollapsed && <span className="ml-2">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar3;
