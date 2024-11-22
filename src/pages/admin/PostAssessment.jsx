import React, { useState } from "react";
import Sidebar from "../../layouts/Sidebar3";
import Navbar from "../../layouts/Navbar3";
import { apiPostAssessment } from "../../services/admin";
import { toast } from "react-toastify";

const PostAssessment = () => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = { question };
      const response = await apiPostAssessment(formData);
      toast.success(response.data.message);
      setQuestion("");
      setLoading(false);
    } catch (error) {
      toast.error("Failed to post assessment.");
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 h-full fixed top-0 left-0 bg-white shadow-md z-10">
        <Sidebar />
      </div>
      <div className="w-full h-full overflow-y-scroll ml-64 p-4">
        <Navbar />
        <h1 className="text-2xl text-indigo-900 text-center mt-48 font-bold mb-4">
          Post Assessment
        </h1>
        <div className="bg-gray-100 backdrop-filter backdrop-blur-md bg-opacity-50 rounded-2xl shadow-md p-4 w-1/2 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label className="text-lg text-indigo-900" htmlFor="question">
                Question
              </label>
              <textarea
                className="w-full p-2 border rounded"
                id="question"
                rows={5}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-900 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-500"
              disabled={loading}
            >
              {loading ? "Posting..." : "Post Assessment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostAssessment;