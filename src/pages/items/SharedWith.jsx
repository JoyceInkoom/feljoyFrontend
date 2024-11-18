import React, { useState, useEffect } from "react";
import { getLoggedInTherapistId } from "../../services/mood";
import { getEmotionsSharedWithTherapist } from "../../services/mood";
import Sidebar from "../../layouts/Sidebar2";
import Navbar2 from "../../layouts/Navbar2";


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


const SharedWith = () => {
  const [emotionsShared, setEmotionsShared] = useState([]);
  const [therapistId, setTherapistId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTherapistId = async () => {
      try {
        const id = await getLoggedInTherapistId();
        console.log(id);
        setTherapistId(id);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTherapistId();
  }, []);

  useEffect(() => {
    const fetchEmotions = async () => {
      if (!therapistId) return;
      try {
        const response = await getEmotionsSharedWithTherapist(therapistId);
        console.log(response);
        setEmotionsShared(response || []);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchEmotions();
  }, [therapistId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="h-screen flex">
      <div className="w-64 h-screen fixed top-0 left-0 bg-white shadow-md z-10">
        <Sidebar />
      </div>
      <div className="w-full h-full overflow-y-scroll ml-64 mt-16 p-4">
        <h1 className="text-2xl text-center font-bold mb-4">Emotions Shared with Me</h1>
        {emotionsShared && emotionsShared.length > 0 ? (
          <ul>
            {emotionsShared.map((emotion) => (
              <li
                key={emotion.id}
                className="flex items-center mb-2 p-2 bg-gray-100 rounded"
              >
                <span className="mr-2 text-2xl">{emotion.emoji}</span>
                <span className="text-gray-500 hover:text-gray-900">
                  {emotions.find((e) => e.emoji === emotion.emoji)?.label}
                </span>
                <span className="mx-2">|</span>
                <span>
                  Shared by:{" "}
                  <span className="font-bold">{emotion.postedBy?.userName}</span>
                </span>
                <span className="ml-2 text-sm text-gray-400">
                  {new Date(emotion.createdAt).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No emotions shared.</p>
        )}
      </div>
    </div>
  );
};

export default SharedWith;