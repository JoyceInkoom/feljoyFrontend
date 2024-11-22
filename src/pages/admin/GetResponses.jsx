import React, { useState, useEffect } from "react";
import Sidebar from "../../layouts/Sidebar3";
import Navbar from "../../layouts/Navbar3";
import { getAllResponses } from "../../services/admin";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const GetResponses = () => {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const response = await getAllResponses();
        setResponses(response);
        setLoading(false);
        toast.success("Responses fetched successfully!");
      } catch (error) {
        setError(error.message);
        setLoading(false);
        toast.error("Failed to fetch responses.");
      }
    };
    fetchResponses();
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-64 h-full fixed top-0 left-0 bg-white shadow-md z-10">
        <Sidebar />
      </div>
      <div className="w-full h-full overflow-y-scroll ml-64 p-4">
        <Navbar />
        <h1 className="text-2xl text-center font-bold mb-4 mt-4">
          Assessment Responses
        </h1>
        {loading ? (
          <p className="text-lg text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-lg text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {responses.map((response) => (
              <Link key={response.id} to={`/admin/update-status/${response.id}`}>
                <div className="bg-white rounded shadow-md p-4 hover:shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer">
                  {response.applicant && (
                    <React.Fragment>
                      <h3 className="text-lg font-bold mb-2">
                        Applicant: {response.applicant?.userName || "Not available"}
                      </h3>
                      <p className="text-gray-500">
                        Email: {response.applicant?.email || "Not available"}
                      </p>
                    </React.Fragment>
                  )}
                  <p className="text-gray-500">
                    Response: {response?.response || "Not available"}
                  </p>
                  <p className="text-gray-500">
                    Category: {response?.category || "Not available"}
                  </p>
                  <p className="text-gray-500">
                    Status: {response?.status || "Not available"}
                  </p>
                  <p className="text-gray-500">
                    Created At: {response?.createdAt ? new Date(response.createdAt).toLocaleString() : "Not available"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GetResponses;