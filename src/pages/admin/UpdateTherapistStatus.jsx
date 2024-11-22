import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateCertificateStatus } from "../../services/admin";
import { toast } from "react-toastify";
import Sidebar from "../../layouts/Sidebar3";
import Navbar from "../../layouts/Navbar3";
import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "2rem",
    border: "none",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
};

const UpdateTherapistStatus = () => {
  const { id } = useParams();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    // Fetch therapist details using the id
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateCertificateStatus(id, status);
      toast.success("Therapist status updated successfully!");
      setLoading(false);
      if (status === "approved") {
        setModalIsOpen(true);
      } else {
        window.location.href = "/certificates";
      }
    } catch (error) {
      toast.error("Failed to update therapist status.");
      setLoading(false);
    }
  };

  const handleSendMessage = async () => {
    // API call to send message to therapist
    try {
      // Send message logic here
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send message.");
    } finally {
      setModalIsOpen(false);
      window.location.href = "/certificates";
    }
  };

  const handleNo = () => {
    setModalIsOpen(false);
    window.location.href = "/certificates";
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 h-full fixed top-0 left-0 bg-white shadow-md z-10">
        <Sidebar />
      </div>
      <div className="w-full h-full overflow-y-scroll ml-64 p-4">
        <Navbar />
        <h1 className="text-2xl text-indigo-900 text-center font-bold mb-4 mt-56">
          Update Therapist Status
        </h1>
        {loading ? (
          <p className="text-lg text-gray-500">Loading...</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <label className="block mb-2">
              Status:
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="block w-full pl-10 pr-10 py-2 text-gray-700 rounded-lg"
              >
                <option value="">Select Status</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
              </select>
            </label>
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Update Status
              </button>
              <button
                onClick={() => window.location.href = "/certificates"}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
        <ReactModal
          isOpen={modalIsOpen}
          style={customStyles}
          contentLabel="Send Message Modal"
        >
          <h2 className="text-lg font-bold mb-2">Send Message to Therapist?</h2>
          <p className="text-gray-500 mb-4">
            Do you want to send a message to the therapist to update their profile?
          </p>
          <div className="flex justify-between">
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Yes
            </button>
            <button
              onClick={handleNo}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              No
            </button>
          </div>
        </ReactModal>
        </div>
    </div>
  );
};

export default UpdateTherapistStatus;