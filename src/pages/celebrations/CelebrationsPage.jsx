import React, { useState, useEffect } from 'react';
import { apiGetCelebrations, apiPostLike } from '../../services/celebration';
import Sidebar from '../../layouts/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import Confetti from 'react-confetti';
import { toast } from 'react-toastify';

const CelebrationsPage = () => {
  const [celebrations, setCelebrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    const fetchCelebrations = async () => {
      try {
        const response = await apiGetCelebrations();
        setCelebrations(response.data);
        setLoading(false);
      } catch (error) {
        toast.error('Failed to fetch celebrations');
        console.error(error);
        setLoading(false);
      }
    };
    fetchCelebrations();
  }, []);

  const handleLike = async (celebrationId) => {
    if (likedPosts.includes(celebrationId)) {
      toast.info('You have already liked this post!');
      return;
    }
    try {
      await apiPostLike(celebrationId);
      const updatedCelebrations = celebrations.map((celebration) => {
        if (celebration.id === celebrationId) {
          return { ...celebration, likes: celebration.likes + 1 };
        }
        return celebration;
      });
      setCelebrations(updatedCelebrations);
      setLikedPosts([...likedPosts, celebrationId]);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    } catch (error) {
      toast.error('You liked this post sometime ago');
      console.error(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen flex">
      <div className="fixed top-0 left-0 w-64 h-screen bg-gray-100 p-4">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-scroll ml-64 p-4 md:p-8">
        <h2 className="text-2xl font-semibold text-center mb-4 text-red-800">Celebrations</h2>
        {celebrations.length === 0 ? (
          <p>No celebrations found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {celebrations.map((celebration) => (
              <div
                key={celebration.id}
                className="bg-white p-6 rounded-lg shadow-md mb-4 md:mb-0"
              >
                <p className="text-lg">{celebration.content}</p>
                <p className="text-sm text-gray-600">
                  Posted by {celebration.postedBy.userName}
                </p>
                <div className="flex justify-between mt-4">
                  <button
                    className={`p-2 rounded-full hover:bg-pink-200 transition duration-200 ${
                      celebration.likes > 0 || likedPosts.includes(celebration.id)
                        ? 'text-red-600'
                        : 'text-gray-600'
                    }`}
                    onClick={() => handleLike(celebration.id)}
                  >
                    <FontAwesomeIcon
                      icon={celebration.likes > 0 || likedPosts.includes(celebration.id)
                        ? faHeart
                        : faHeartBroken}
                      size="lg"
                    />
                    <span className="ml-2">{celebration.likes}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {showConfetti && (
        <Confetti
          count={100}
          size={20}
          gravity={0.1}
          colors={['#FF3737', '#FF6666', '#FF9999', '#FFC0C0', '#E2786F']}
        />
      )}
    </div>
  );
};

export default CelebrationsPage;