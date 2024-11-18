import React from "react";
import {
  FaSearch,
  FaDumbbell,
  FaBookOpen,
  FaSmile,
  FaUserCircle,
  FaHandHoldingMedical,
} from "react-icons/fa";

const Navbar3 = ({ userProfile }) => (
  <header className="flex items-center justify-between p-4 bg-indigo-900 shadow fixed top-0 left-[256px] w-[calc(100%-256px)] z-50">
    <div className="flex items-center space-x-2">
      <FaSearch className="text-white" />
      <input
        type="text"
        placeholder="Search"
        className="w-full max-w-xs p-2 border rounded-lg outline-none focus:ring focus:ring-blue-200"
      />
    </div>
    <div className="flex items-center space-x-4">
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => (window.location.href = "/interactions")}
      >
        <FaHandHoldingMedical className="text-white" />
        <span className="text-white">Certifications</span>
      </div>
      {/* <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => (window.location.href = "/emotiondairy")}
      >
        <FaBookOpen className="text-white" />
        <span className="text-white">Emotion Diary</span>
      </div> */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => (window.location.href = "/getallusers")}
      >
        <FaSmile className="text-white" />
        <span className="text-white">All Users</span>
      </div>
      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
        {userProfile?.profilePicture ? (
          <img
            src={`https://savefiles.org/${userProfile?.profilePicture}?shareable_link=468`}
            alt={userProfile?.userName}
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <FaUserCircle className="w-full h-full text-black" />
        )}
      </div>
    </div>
  </header>
);

export default Navbar3;
