import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Sidebar from '../../layouts/Sidebar';

import { getAllPeerTherapists } from '../../services/therapists';

const PeerTherapistsList = () => {
  const [therapists, setTherapists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const data = await getAllPeerTherapists();
        if (data && data.length > 0) {
          setTherapists(data);
          toast.success("Peer Therapists loaded successfully");
        } else {
          toast.info("No Peer therapists available at this time");
        }
      } catch (error) {
        console.error("Error fetching Peer therapists:", error);
        toast.error("Failed to load Peer therapists. Please try again.");
      }
    };

    fetchTherapists();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Fixed Sidebar */}
      <Sidebar className="w-64 flex-shrink-0 bg-gray-800 text-white h-full" />

      {/* Scrollable Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Peer Therapists</h1>

          {/* New description added below the title */}
          <div className="flex items-center justify-center ml-20 mb-6">
            <img
              src="https://i.pinimg.com/236x/b6/de/0b/b6de0b58607cbd7c92017cd316cbb39a.jpg"
              alt="Compassionate Care"
              className="w-64 h-64 object-cover rounded-lg shadow-md"
            />
            <div className="ml-6 max-w-2xl">
              <p className="text-gray-700">
                Our Peer Therapists are compassionate individuals trained <br /> to offer support, understanding,
                and guidance. <br />
                They are here to listen, connect, and help you navigate <br /> challenging moments. With shared
                experiences and a caring approach, <br />they create a safe space for you to open up, feel heard, and
                find comfort. <br /> Explore our list of peer therapists below to connect with someone who
                understands.
              </p>
            </div>
          </div>

          {/* Therapists List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-24">
            {therapists.map((therapist) => (
              <div
                key={therapist.id}
                className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition cursor-pointer"
                onClick={() => navigate(`/peer-therapist/${therapist.id}`)}
              >
                <img
                  src={`https://savefiles.org/${therapist.profilePicture}?shareable_link=468` || 'default-image-url.jpg'}
                  alt={therapist.fullName}
                  className="w-full h-32 object-cover rounded-md"
                />
                <h2 className="mt-3 text-lg font-semibold text-gray-800">{therapist.fullName}</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {therapist.bio ? `${therapist.bio.substring(0, 80)}...` : "Bio not available"}
                </p>
              </div>
            ))}
          </div>

          {/* Back to Dashboard Button at the Bottom */}
          {/* <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate('/userdashboard')}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Back to Dashboard
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PeerTherapistsList;
