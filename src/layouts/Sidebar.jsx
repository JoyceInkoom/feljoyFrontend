import React, { useState, useEffect } from "react";
import {
  FaHome, FaChartPie, FaUser, FaCog, FaCheckCircle,
  FaSignOutAlt, FaEdit, FaUserCircle, FaDumbbell,
  FaBookOpen, FaSmile, FaSearch, FaPen
} from "react-icons/fa";
import { apiUserProfile } from "../services/profiles"; // Ensure this service exists

const Sidebar = () => {
  const [userProfile, setUserProfile] = useState(null);

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

  // Get color based on the user role
  const getVerifiedIconColor = (role) => {
    switch (role) {
      case "user":
        return "text-indigo-800";
      case "peer-therapist":
        return "text-blue-800";
      case "professional-therapist":
        return "text-pink-800";
      default:
        return "text-gray-500";
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.assign("/"); // Redirect to home page after logout
  };

  return (
    <aside className=" bg-indigo-200 text-gray-800 flex flex-col h-screen w-[317px] "> {/* Ensures full height */}
      {/* Profile Section */}
      <div className="flex flex-col items-center py-4">
        <h3 className=" text-center font-bold text-lg border-b border-gray-700">Your Mental Health Companion</h3>
        <div className="relative w-24 h-24 mt-4">
          {/* <div className="absolute inset-0 border-t border-gray-700 w-full"></div> Full-width line */}
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
            onClick={() => window.location.assign("/profileupdate")}
          />
          <FaCheckCircle
            className={`absolute top-0 right-0 ${getVerifiedIconColor(userProfile?.role)} text-lg`}
            style={{ transform: "translate(25%, -25%)" }}
          />
        </div>
        <h3 className="mt-4 text-lg font-bold">Welcome!! {userProfile?.userName || "User"}</h3>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-6 py-4 space-y-4">
        <div
          className="flex items-center space-x-2 text-gray-700 hover:text-white cursor-pointer transition duration-200"
          onClick={() => window.location.assign("/userdashboard")}
        >
          <FaHome className="text-xl" />
          <span className="font-bold">Home</span>
        </div>
        <div
          className="flex items-center space-x-2 text-gray-700 hover:text-white cursor-pointer transition duration-200"
          onClick={() => window.location.assign("/resources")}
        >
          <FaChartPie className="text-xl" />
          <span className="font-bold">Resources</span>
        </div>
        <div
          className="flex items-center space-x-2 text-gray-700 hover:text-white cursor-pointer transition duration-200"
          onClick={() => window.location.assign("/peer-therapists")}
        >
          <FaUser className="text-xl" />
          <span className="font-bold">Peer Therapists</span>
        </div>
        <div
          className="flex items-center space-x-2 text-gray-700 hover:text-white cursor-pointer transition duration-200"
          onClick={() => window.location.assign("/professional-therapists")}
        >
          <FaUser className="text-xl" />
          <span className="font-bold">Professional Therapists</span>
        </div>
        <div
          className="flex items-center space-x-2 text-gray-700 hover:text-white cursor-pointer transition duration-200"
          onClick={() => window.location.assign("/assessment")}
        >
          <FaPen className="text-xl" />
          <span className="font-bold">Take Assessment</span>
        </div>
        <div
          className="flex items-center space-x-2 text-gray-700 hover:text-white cursor-pointer transition duration-200"
          onClick={() => window.location.assign("/celebrate")}
        >
          <FaDumbbell className="text-xl" />
          <span className="font-bold">Let's Celebrate with You</span>
        </div>
        <div
          className="flex items-center space-x-2 text-gray-700 hover:text-white cursor-pointer transition duration-200"
          onClick={() => window.location.assign("/events")}
        >
          <FaBookOpen className="text-xl" />
          <span className="font-bold">Events</span>
        </div>
      </nav>

      {/* Logout Button */}
      <div className="px-6 py-4 border-t border-gray-700">
        <button
          className="flex items-center w-full text-red-800 hover:text-red-500"
          onClick={handleLogout}
        >
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
