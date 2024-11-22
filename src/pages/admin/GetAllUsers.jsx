import React, { useState, useEffect } from "react";
import Sidebar from "../../layouts/Sidebar3";
import Navbar from "../../layouts/Navbar3";
import { getAllUsers } from "../../services/admin";
import { toast } from "react-toastify";

const GetAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        setUsers(response);
        setLoading(false);
        toast.success("Users fetched successfully!");
      } catch (error) {
        setLoading(false);
        toast.error("Failed to load users.");
      }
    };
    fetchUsers();
  }, []);

  const groupUsersByRole = (users) => {
    const groupedUsers = {};
    users.forEach((user) => {
      if (!groupedUsers[user.role]) {
        groupedUsers[user.role] = [];
      }
      groupedUsers[user.role].push(user);
    });
    return groupedUsers;
  };

  const groupedUsers = groupUsersByRole(users);

  return (
    <div className="flex h-screen">
      <div className="w-64 h-full fixed top-0 left-0 bg-white shadow-md z-10">
        <Sidebar />
      </div>
      <div className="w-full h-full overflow-y-scroll ml-64 p-4">
        <Navbar />
        <h1 className="text-2xl text-center font-bold mb-4 mt-4">
          All Users
        </h1>
        {loading ? (
  <p className="text-lg text-gray-500">Loading...</p>
) : (
  <div>
    {Object.keys(groupedUsers).map((role) => (
              <div key={role}>
                <h2 className="text-xl font-bold mb-2">{role.charAt(0).toUpperCase() + role.slice(1)}s</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupedUsers[role].map((user) => (
                    <div
                      key={user.id}
                      className="bg-white rounded shadow-md p-4 hover:shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out"
                    >
                      <h3 className="text-lg font-bold mb-2">{user.fullName}</h3>
                      <p className="text-gray-500">Username: {user.userName}</p>
                      <p className="text-gray-500">Email: {user.email}</p>
                      <p className="text-gray-500">Phone: {user.phone}</p>
                      <p className="text-gray-500">Approved: {user.isApproved ? "Yes" : "No"}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GetAllUsers;