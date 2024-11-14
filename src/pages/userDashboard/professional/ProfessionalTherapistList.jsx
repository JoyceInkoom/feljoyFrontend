import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "../../../layouts/Sidebar";

import { getAllProfessionalTherapists } from "../../../services/therapists";

const ProfessionalTherapistsList = () => {
  const [therapists, setTherapists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
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

  const handlePageChange = (newPage) => setCurrentPage(newPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTherapists = therapists.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center mb-6">
            Professional Therapists
          </h1>

          {/* New description added below the title */}
          <p className="text-center text-gray-700 mb-6 max-w-2xl mx-auto">
            Our Professional Therapists are highly trained and experienced to
            provide expert guidance and support for individuals facing a wide
            range of mental health challenges. Whether you're dealing with
            stress, anxiety, or emotional difficulties, our professionals are
            here to help. Explore the list of qualified professionals below and
            find the right therapist for you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {currentTherapists.map((therapist) => (
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

          {/* Pagination */}
          <div className="flex justify-center items-center mt-6 space-x-2">
            {Array.from(
              { length: Math.ceil(therapists.length / itemsPerPage) },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-3 py-1 rounded-full ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>

          {/* Back to Dashboard Button at the Bottom */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate("/userdashboard")}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTherapistsList;
