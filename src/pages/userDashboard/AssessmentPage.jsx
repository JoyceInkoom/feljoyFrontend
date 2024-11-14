import React, { useState, useEffect } from "react";
import { apiUserGetAssessment, apiUserPostResponse } from "../../services/assessment";
import Navbar from "../../layouts/Navbar";
import Sidebar from "../../layouts/Sidebar";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from 'react-toastify'; // Import toast for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import the Toastify styles

const AssessmentPage = () => {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 3;

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
      toast.info('Loading assessment questions...');
    }

    if (error) {
      toast.error('Failed to load assessment questions. Please try again.');
    }
  }, [loading, error]);

  // Handle input change for responses
  const handleInputChange = (questionId, value) => {
    setResponses({
      ...responses,
      [questionId]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiUserPostResponse(responses);
      toast.success("Your responses have been submitted successfully.");
    } catch (err) {
      toast.error("Failed to submit your responses. Please try again.");
    }
  };

  // Pagination logic
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  // Pagination handlers
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Determine if the current page is the last page
  const isLastPage = currentPage === Math.ceil(questions.length / questionsPerPage);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="p-6 flex flex-col items-center">
          <h1 className="text-2xl font-bold text-center pt-16 ">Assessment Questions</h1>
          <h5>For people who want to volunteer as peer therapists. Responses will be reviewed and user status will automatically change when passed.</h5>

          <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
            {currentQuestions.map((question) => (
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

            {/* Conditionally render the Submit button only on the last page */}
            {isLastPage && (
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-blue-600 flex items-center shadow-md transition-all"
                >
                  <FaPaperPlane className="mr-2" /> Submit Responses
                </button>
              </div>
            )}
          </form>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-6 w-full max-w-2xl">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-indigo-500 text-white p-2 rounded-md disabled:bg-gray-300"
            >
              Previous
            </button>
            <span className="text-lg">
              Page {currentPage} of {Math.ceil(questions.length / questionsPerPage)}
            </span>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(questions.length / questionsPerPage)}
              className="bg-indigo-500 text-white p-2 rounded-md disabled:bg-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentPage;
