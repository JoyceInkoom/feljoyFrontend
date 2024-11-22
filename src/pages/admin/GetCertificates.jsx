import React, { useState, useEffect } from "react";
import { getCertificate } from "../../services/admin";
import { Link } from "react-router-dom";
import Sidebar from "../../layouts/Sidebar3";
import Navbar from "../../layouts/Navbar3";

const GetCertificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await getCertificate();
        setCertificates(response);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchCertificates();
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-64 h-full fixed top-0 left-0 bg-white shadow-md z-10">
        <Sidebar />
      </div>
      <div className="w-full h-full overflow-y-scroll ml-64 p-4">
        <Navbar />
        <h1 className="text-2xl text-center font-bold mb-4 mt-4">
          Therapist Certificates
        </h1>
        {loading ? (
          <p className="text-lg text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-lg text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((certificate) => (
              <Link
                key={certificate.id}
                to={`/admin/update/certificate-status/${certificate.id}`}
              >
                <div className="bg-white rounded shadow-md p-4 hover:shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer">
                  <h3 className="text-lg font-bold mb-2">
                    Therapist: {certificate.user}
                  </h3>
                  <p className="text-gray-500">
                    Certificates: {certificate.certificates}
                  </p>
                  <p className="text-gray-500">
                    Years of Practice: {certificate.yearsOfPractice}
                  </p>
                  <p className="text-gray-500">
                    Category: {certificate.category.join(", ")}
                  </p>
                  <p className="text-gray-500">
                    Status: {certificate.status}
                  </p>
                  <p className="text-gray-500">
                    Created At: {new Date(certificate.createdAt).toLocaleString()}
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

export default GetCertificates;