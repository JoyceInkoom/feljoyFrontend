import React, { useEffect, useState } from 'react';
import { apiUserProfile, apiUpdateProfile } from '../../services/profiles';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; 
import Sidebar from '../../layouts/Sidebar';
import Navbar from '../../layouts/Navbar';

const UpdateProfile = () => {
  const [userProfile, setUserProfile] = useState({
    userName: '',
    fullName: '',
    phone: '',
    // password: '',
    profilePicture: ''
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await apiUserProfile();
        setUserProfile({
          userName: response.data.userName,
          fullName: response.data.fullName,
          phone: response.data.phone,
          // password: '',
          profilePicture: response.data.profilePicture || ''
        });
        setPreview(response.data.profilePicture); 
      } catch (error) {
        console.error('Error fetching user profile:', error);
        toast.error('Could not load profile information');
      }
    };
    fetchUserProfile();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleInputChange = (e) => {
    setUserProfile({
      ...userProfile,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userName", userProfile.userName);
    formData.append("fullName", userProfile.fullName);
    formData.append("phone", userProfile.phone);
    // formData.append("password", userProfile.password);

    if (file) {
      formData.append("profilePicture", file);
    }

    try {
      const response = await apiUpdateProfile(formData);
      if (response.status === 200) {
        toast.success('Profile updated successfully!');
        navigate('/userdashboard');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Profile update failed!');
    }
  };

  const handleCancel = () => {
    navigate('/userdashboard');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 mt-16">
        {/* <Navbar /> */}
        <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Update Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Profile Picture */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden mb-4">
                {preview ? (
                  <img src={preview} alt="Profile Preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">No Image</div>
                )}
              </div>
              <input
                type="file"
                onChange={handleFileChange}
                className="text-sm text-gray-700 file:border file:border-gray-300 file:rounded-md file:px-3 file:py-2 file:bg-gray-50 file:text-gray-700 file:hover:bg-gray-100"
              />
            </div>

            {/* Username and Full Name in same row */}
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  name="userName"
                  value={userProfile.userName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={userProfile.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Phone and Password in same row */}
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={userProfile.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* <div className="flex-1">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={userProfile.password}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div> */}
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-400 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
