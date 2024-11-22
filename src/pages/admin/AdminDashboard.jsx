import React from "react";
import Sidebar from "../../layouts/Sidebar3";
import Navbar from "../../layouts/Navbar3";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      <div className="w-64 h-full fixed top-0 left-0 bg-white shadow-md z-10">
        <Sidebar />
      </div>
      <div className="w-full h-full overflow-y-scroll ml-64 p-4">
        <Navbar />
        <h1 className="text-2xl text-center font-bold mb-4 mt-28">
          Admin Dashboard
        </h1>
        <div className="container mx-auto p-4 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="
              bg-white 
              rounded 
              shadow-md 
              p-4 
              hover:shadow-lg 
              hover:bg-gray-100 
              transition 
              duration-300 
              ease-in-out
            ">
              <h2 className="text-lg font-bold mb-2">Total Users</h2>
              <p className="text-3xl">1,234</p>
            </div>
            <div className="
              bg-white 
              rounded 
              shadow-md 
              p-4 
              hover:shadow-lg 
              hover:bg-gray-100 
              transition 
              duration-300 
              ease-in-out
            ">
              <h2 className="text-lg font-bold mb-2">Active Sessions</h2>
              <p className="text-3xl">567</p>
            </div>
            <div className="
              bg-white 
              rounded 
              shadow-md 
              p-4 
              hover:shadow-lg 
              hover:bg-gray-100 
              transition 
              duration-300 
              ease-in-out
            ">
              <h2 className="text-lg font-bold mb-2">Total Therapists</h2>
              <p className="text-3xl">123</p>
            </div>
            <div className="
              bg-white 
              rounded 
              shadow-md 
              p-4 
              hover:shadow-lg 
              hover:bg-gray-100 
              transition 
              duration-300 
              ease-in-out
            ">
              <h2 className="text-lg font-bold mb-2">User Engagement</h2>
              <p className="text-3xl">85%</p>
            </div>
            <div className="
              bg-white 
              rounded 
              shadow-md 
              p-4 
              hover:shadow-lg 
              hover:bg-gray-100 
              transition 
              duration-300 
              ease-in-out
            ">
              <h2 className="text-lg font-bold mb-2">Average Rating</h2>
              <p className="text-3xl">4.5/5</p>
            </div>
            <div className="
              bg-white 
              rounded 
              shadow-md 
              p-4 
              hover:shadow-lg 
              hover:bg-gray-100 
              transition 
              duration-300 
              ease-in-out
            ">
              <h2 className="text-lg font-bold mb-2">Total Reviews</h2>
              <p className="text-3xl">1,200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;