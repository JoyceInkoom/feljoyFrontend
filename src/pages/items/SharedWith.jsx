

import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../layouts/Navbar2";
import Sidebar from "../../layouts/Sidebar2";

const emotions = [
  { label: "Happy", emoji: "😊" },
  { label: "Sad", emoji: "😢" },
  { label: "Angry", emoji: "😡" },
  { label: "Excited", emoji: "😆" },
  { label: "Bored", emoji: "😴" },
  { label: "Confused", emoji: "🤔" },
  { label: "Calm", emoji: "😌" },
  { label: "Stressed", emoji: "😫" },
  { label: "Grateful", emoji: "🙏" },
  { label: "Surprised", emoji: "😲" },
  { label: "Anxious", emoji: "😨" },
  { label: "Loved", emoji: "❤️" },
  { label: "Mixed", emoji: "😕🤔😌" },
  { label: "Hopeful", emoji: "🤞" },
  { label: "Proud", emoji: "😌" },
  { label: "Lonely", emoji: "😔" },
  { label: "Fearful", emoji: "😱" },
  { label: "Silly", emoji: "🤪" },
  { label: "Disappointed", emoji: "😞" },
  { label: "Embarrassed", emoji: "😳" },
  { label: "Relieved", emoji: "😅" },
  { label: "Jealous", emoji: "😒" },
];

const getEmotionLabel = (emoji) => {
  const emotion = emotions.find((e) => e.emoji === emoji);
  return emotion ? emotion.label : "Unknown";
};

const SharedWith = () => {
  const [sharedMoods, setSharedMoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("authToken");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  useEffect(() => {
    const fetchSharedMoods = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://mental-support-api.onrender.com/moods/shared", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSharedMoods(response.data.sharedMoods);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSharedMoods();
  }, [token]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sharedMoods && sharedMoods.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="h-screen">
        <Sidebar className="fixed top-0 left-0 h-screen w-64 z-10" />
        <div className=" overflow-y-auto flex-1">
          <h1 className="text-2xl font-bold mb-4">Shared Emotions</h1>
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen">
        <Sidebar className="fixed top-0 left-0 h-screen w-64 z-10" />
        <div className=" overflow-y-auto flex-1">
          <h1 className="text-2xl font-bold mb-4">Shared Emotions</h1>
          <div>Error: {error}</div>
        </div>
      </div>
    );
  }

  if (!sharedMoods || sharedMoods.length === 0) {
    return (
      <div className="h-screen flex">
        <Sidebar className="fixed top-0 left-0 h-screen w-64 z-10" />
        <div className="flex-1 overflow-y-auto ml-64 p-4 md:p-8">
          <h1 className="text-2xl font-bold mb-4">Shared Emotions</h1>
          <div>No one has shared emotions with you yet.</div>
        </div>
      </div>
    );
  }
  return (
    <div className="h-screen flex">
      <Sidebar className="fixed top-0 left-0 h-screen w-64 z-10" />
      <div className="flex-1  p-4 overflow-y-auto">
        <Navbar className="fixed top-0 left-64 right-0 z-10" />
        <h1 className="text-2xl text-center font-bold mt-20 mb-4">Shared Emotions</h1>
        {currentItems && currentItems.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {currentItems.map((mood) => (
              <div key={mood.id} className="bg-gray-100 p-2 rounded shadow-sm">
                <h2 className="text-2xl font-semibold">
                  {mood.emoji} {mood.entry} ({getEmotionLabel(mood.emoji)})
                </h2>
                <p className="text-sm">Posted by: {mood.postedBy.userName}</p>
                <p className="text-sm">Created at: {mood.createdAt}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>No shared emotions found.</div>
        )}
        <div className="flex justify-center w-full mt-4">
          {Array.from(
            Array(Math.ceil(sharedMoods.length / itemsPerPage)),
            (e, i) => {
              return (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`px-2 py-1 mx-1 rounded-lg ${
                    currentPage === i + 1 ? "bg-blue-500 text-white" : ""
                  }`}
                >
                  {i + 1}
                </button>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default SharedWith;