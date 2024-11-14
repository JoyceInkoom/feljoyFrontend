import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPeerTherapistById } from '../../services/therapists';
import Sidebar from '../../layouts/Sidebar';

import { HiMail, HiPhone, HiCheckCircle, HiXCircle, HiClock } from 'react-icons/hi'; // Icons

const PeerTherapistDetail = () => {
  const { id } = useParams();
  const [therapist, setTherapist] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTherapist = async () => {
      try {
        const data = await getPeerTherapistById(id);
        setTherapist(data);
      } catch (error) {
        console.error("Error fetching therapist:", error.response || error);
      }
    };

    fetchTherapist();
  }, [id]);

  if (!therapist) return null;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-6">
        {/* Navbar */}
        {/* <Navbar /> */}

        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6 max-h-[500px] overflow-auto">

          {/* Profile Section */}
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={therapist.profilePicture || 'default-profile-image.jpg'}
              alt={therapist.fullName}
              className="w-32 h-32 object-cover rounded-full border-4 border-blue-500 shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-semibold text-gray-800">{therapist.fullName}</h1>
              <p className="text-gray-500 text-lg">{therapist.userName}</p>
            </div>
          </div>

          {/* Therapist Details */}
          <div className="space-y-2 text-lg text-gray-700">
            {/* Email */}
            <div className="flex items-center space-x-2">
              <HiMail className="text-blue-600" size={24} />
              <a href={`mailto:${therapist.email}`} className="text-blue-600 hover:underline">
                {therapist.email}
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-2">
              <HiPhone className="text-green-600" size={24} />
              <p>{therapist.phone}</p>
            </div>

            {/* Role */}
            <div className="flex items-center space-x-2">
              <HiCheckCircle className="text-yellow-500" size={24} />
              <p>{therapist.role}</p>
            </div>

            {/* Approval Status */}
            <div className="flex items-center space-x-2">
              {therapist.isApproved ? (
                <HiCheckCircle className="text-green-600" size={24} />
              ) : (
                <HiXCircle className="text-red-600" size={24} />
              )}
              <p>{therapist.isApproved ? "Approved" : "Not Approved"}</p>
            </div>

            {/* Created and Updated Dates */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="flex items-center space-x-2">
                <HiClock className="text-gray-500" size={20} />
                <p>Created: {new Date(therapist.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center space-x-2">
                <HiClock className="text-gray-500" size={20} />
                <p>Updated: {new Date(therapist.updatedAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* Connect Button */}
          <div className="flex justify-center mt-4">
            <a
              href={`mailto:${therapist.email}`}
              className="flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            >
              <HiMail className="mr-3" size={24} />
              Connect with Therapist
            </a>
          </div>

          {/* Back Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 bg-gray-200 text-gray-800 text-sm font-semibold rounded-lg hover:bg-gray-300 transition duration-300"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeerTherapistDetail;
