import React, { useState, useEffect } from "react";
import { apiUserGetAssessment, apiUserPostResponse } from "../../services/assessment";
import Navbar from "../../layouts/Navbar";
import Sidebar from "../../layouts/Sidebar";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // For navigation
import "react-toastify/dist/ReactToastify.css";

const AssessmentPage = () => {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState(""); // Category state
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const navigate = useNavigate(); // To redirect to user dashboard

  // Fetch all assessment questions
  useEffect(() => {
    const fetchAssessment = async () => {
      try {
        const response = await apiUserGetAssessment();
        setQuestions(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch assessment questions.");
        setLoading(false);
      }
    };

    fetchAssessment();
  }, []);

  useEffect(() => {
    if (loading) {
      toast.info("Loading assessment questions...");
    }

    if (error) {
      toast.error("Failed to load assessment questions. Please try again.");
    }
  }, [loading, error]);

  // Handle input change for responses
  const handleInputChange = (questionId, value) => {
    setResponses({
      ...responses,
      [questionId]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!category) {
      toast.error("Please select a category before submitting.");
      return;
    }
  
    // Prepare individual payloads in the correct format (with keys and values properly quoted)
    const payloads = Object.keys(responses).map((questionId) => ({
      question: questionId,     // The questionId should be a string (MongoDB ID or unique identifier)
      response: responses[questionId], // The user's response, which will be a string
      category,  // The category selected by the user
    }));
  
    try {
      // Post each payload individually
      await Promise.all(
        payloads.map((payload) =>
          apiUserPostResponse(payload)  // The payload sent to the server
        )
      );
      toast.success("All responses submitted successfully.");
      setIsModalOpen(true); // Open modal on successful submission
    } catch (err) {
      toast.error("Error submitting responses. Please try again.");
      console.error(err);  // Log the error for debugging
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Fixed Sidebar */}
      <Sidebar className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg z-10" />

      <div className="flex flex-col w-full  overflow-y-auto  "> {/* Add margin-left for the sidebar */}
        {/* <Navbar /> */}
        <div className="p-6 flex flex-col items-center">
          <h1 className="text-2xl font-bold text-center pt-16">Assessment Questions</h1>
          <h5>
            For people who want to volunteer as peer therapists. Responses will
            be reviewed and user status will automatically change when passed.
          </h5>

          {/* Category Selection */}
          <div className="w-full max-w-2xl mb-6">
            <label htmlFor="category" className="block text-lg font-medium mb-2">
              Select a Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Choose a category --</option>
              <option value="depression">Depression</option>
              <option value="anxiety">Anxiety</option>
              <option value="marriage">Marriage</option>
              <option value="stress">Stress</option>
              <option value="mindfulness">Mindfulness</option>
            </select>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
            {questions.map((question) => (
              <div key={question.id} className="space-y-2">
                <div className="text-lg font-semibold">{question.question}</div>
                <textarea
                  className="w-full h-14 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Your answer..."
                  value={responses[question.id] || ""}
                  onChange={(e) => handleInputChange(question.id, e.target.value)}
                />
              </div>
            ))}

            {/* Submit button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-blue-600 flex items-center shadow-md transition-all"
              >
                <FaPaperPlane className="mr-2" /> Submit Responses
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold text-center mb-4">
              Response Submitted
            </h2>
            <p className="text-center mb-4">
              Your response has been submitted to the admin for review.
              Please check your dashboard frequently for approval and be patient while the review is in progress.
            </p>
            <div className="flex justify-center">
              <button
                className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => {
                  setIsModalOpen(false); // Close the modal
                  navigate("/userdashboard"); // Redirect to user dashboard
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssessmentPage;
