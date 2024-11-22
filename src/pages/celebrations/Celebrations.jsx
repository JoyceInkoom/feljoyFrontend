import React, { useState } from 'react';
import { apiCreateCelebration } from '../../services/celebration';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../layouts/Sidebar';
import Confetti from 'react-confetti';

const Celebrations = () => {
  const [celebration, setCelebration] = useState({
    content: '',
  });
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCelebration({
      ...celebration,
      content: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiCreateCelebration(celebration);
      toast.success('Celebration posted successfully!');
      setShowConfetti(true);
      setTimeout(() => {
        setCelebration({
          content: '',
        });
        navigate('/celebrations'); // Redirect to celebrations page
        setShowConfetti(false);
      }, 4000); // Wait 2 seconds before redirecting
    } catch (error) {
      toast.error('Failed to post celebration!');
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      <Sidebar />
      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Post Your Celebration!</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              rows={5}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              name="content"
              value={celebration.content}
              onChange={handleInputChange}
              placeholder="Share your milestone..."
            />
            <button
              type="submit"
              className="bg-indigo-900 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition duration-200"
            >
              Post Celebration
            </button>
          </form>
        </div>
      </div>
      {showConfetti && (
        <Confetti
          count={100}
          size={20}
          gravity={0.1}
          colors={['#FF69B4', '#FFC67D', '#8BC34A', '#03A9F4', '#8B9467']}
        />
      )}
    </div>
  );
};

export default Celebrations;