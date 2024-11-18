import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "../../../layouts/Sidebar";

import { getAllProfessionalTherapists } from "../../../services/therapists";

const ProfessionalTherapistsList = () => {
  const [therapists, setTherapists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const data = await getAllProfessionalTherapists();
        if (data && data.length > 0) {
          setTherapists(data);
          toast.success("Professional Therapists loaded successfully");
        } else {
          toast.info("No Professional therapists available at this time");
        }
      } catch (error) {
        console.error("Error fetching Professional therapists:", error);
        toast.error(
          "Failed to load Professional therapists. Please try again."
        );
      }
    };

    fetchTherapists();
  }, []);

  return (
    <div className="flex">
      {/* Sidebar: Fixed Position */}
      <div className="w-64 fixed top-0 bottom-0 left-0 bg-gray-100">
        <Sidebar />
      </div>

      {/* Main Content: Scrollable */}
      <div className="flex-1 ml-64 overflow-y-auto">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center mb-6">
            Professional Therapists
          </h1>

          {/* Description Section */}
          <div className="flex items-center justify-center ml-20 mb-6">
            <img
              src="https://i.pinimg.com/236x/b6/de/0b/b6de0b58607cbd7c92017cd316cbb39a.jpg"
              alt="Compassionate Care"
              className="w-64 h-64 object-cover rounded-lg shadow-md"
            />
            <div className="ml-6 max-w-2xl">
              <p className="text-center text-gray-700 mb-6 max-w-2xl mx-auto">
                Our Professional Therapists are highly trained and experienced
                to provide expert guidance and support for individuals facing a
                wide range of mental health challenges. Whether you're dealing
                with stress, anxiety, or emotional difficulties, our
                professionals are here to help. Explore the list of qualified
                professionals below and find the right therapist for you.
              </p>
            </div>
          </div>

          {/* Therapists List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-24">
            {therapists.map((therapist) => (
              <div
                key={therapist.id}
                className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition cursor-pointer"
                onClick={() =>
                  navigate(`/professional-therapist/${therapist.id}`)
                }
              >
                <img
                  src={therapist.profilePicture || "default-image-url.jpg"}
                  alt={therapist.fullName}
                  className="w-full h-32 object-cover rounded-md"
                />
                <h2 className="mt-3 text-lg font-semibold text-gray-800">
                  {therapist.fullName}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {therapist.bio
                    ? `${therapist.bio.substring(0, 80)}...`
                    : "Bio not available"}
                </p>
              </div>
            ))}
          </div>

          {/* Back to Dashboard Button */}
          {/* <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate("/userdashboard")}
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

export default ProfessionalTherapistsList;
