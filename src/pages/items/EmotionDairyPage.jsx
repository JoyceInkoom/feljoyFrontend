import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSave } from "react-icons/fa";
import Sidebar from "../../layouts/Sidebar";
import Navbar from "../../layouts/Navbar";
import { apiPostMood, apiGetMood } from "../../services/mood";
import { getAllPeerTherapists, getAllProfessionalTherapists } from "../../services/therapists";
import { toast } from "react-toastify";

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

const EmotionDiaryPage = () => {
  const [emotion, setEmotion] = useState("");
  const [entryText, setEntryText] = useState("");
  const [entries, setEntries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showTherapistModal, setShowTherapistModal] = useState(false);
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [therapists, setTherapists] = useState([]);
  const entriesPerPage = 6;

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await apiGetMood();
        const moodEntries = response.userMoodLogs || [];
        setEntries(moodEntries);
      } catch (error) {
        console.error("Error fetching mood entries:", error);
      }
    };

    fetchEntries();

    const fetchTherapists = async () => {
      try {
        const peerResponse = await getAllPeerTherapists();
        const professionalResponse = await getAllProfessionalTherapists();
        setTherapists([...peerResponse, ...professionalResponse]);
      } catch (error) {
        console.error("Error fetching therapists:", error);
      }
    };

    fetchTherapists();
  }, []);

  useEffect(() => {
    if (selectedTherapist) {
      handleSubmitEntry();
    }
  }, [selectedTherapist]);

  const handleEmotionChange = (emoji) => {
    setEmotion(emoji);
  };

  const handleTextChange = (e) => {
    setEntryText(e.target.value);
  };

  const handleSaveEntry = () => {
    if (emotion && entryText) {
      setShowModal(true);
    } else {
      alert("Please select an emotion and write your diary entry.");
    }
  };

  const handleSubmitEntry = async () => {
    const token = localStorage.getItem("authToken");
    const sharedWithId = selectedTherapist?.id || "";
    const payload = {
      emoji: emotion,
      entry: entryText,
      sharedWithId,
    };

    try {
      await apiPostMood(payload);
      const response = await apiGetMood();
      const moodEntries = response.userMoodLogs || [];
      setEntries(moodEntries);
      setShowModal(false);
      setShowTherapistModal(false);
      setEmotion("");
      setEntryText("");
      setSelectedTherapist(null);
    } catch (error) {
      console.error("Error saving mood entry:", error);
    }
  };

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = entries.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(entries.length / entriesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex h-screen">
      <Sidebar className="w-[300px] flex-shrink-0 h-full" />
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center justify-center p-4 text-center h-[calc(100vh-7rem)]">
          <h1 className="text-3xl font-bold mb-6 text-indigo-900">Emotion Diary</h1>

          {/* Emotion Selection */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {emotions.map((emotionOption) => (
              <motion.button
                key={emotionOption.label}
                onClick={() => handleEmotionChange(emotionOption.emoji)}
                className={`relative p-2 rounded-full shadow-md transition ${
                  emotion === emotionOption.emoji
                    ? "bg-indigo-900 text-white"
                    : "bg-white text-indigo-900 border border-indigo-900"
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {emotionOption.emoji}
                {emotion === emotionOption.emoji && (
                  <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-sm text-indigo-900">
                    {emotionOption.label}
                  </span>
                )}
              </motion.button>
            ))}
          </div>

          {/* Diary Entry Text Area */}
          <textarea
            className="w-3/4 p-3 mt-4 border-2 border-indigo-900 rounded-md resize-none"
            rows="4"
            placeholder="Write about your day..."
            value={entryText}
            onChange={handleTextChange}
          ></textarea>

          {/* Save Button */}
          <button
            onClick={handleSaveEntry}
            className="mt-4 bg-indigo-900 text-white p-2 rounded-full hover:bg-indigo-500 transition flex items-center"
          >
            <FaSave className="mr-2" />
            Save Entry
          </button>

          {/* Display Saved Entries with Pagination */}
          <div className="mt-8 w-full">
            <h2 className="text-xl font-semibold text-indigo-900 mb-4">Your Diary Entries</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentEntries.length > 0 ? (
                currentEntries.map((entry, index) => (
                  <motion.div
                    key={entry.id}
                    className="bg-white p-4 rounded-lg shadow-md border border-pink-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-lg font-semibold text-indigo-900">{entry.emoji}</h3>
                    <p className="mt-2 text-gray-600">{entry.entry}</p>
                    <span className="text-sm text-gray-400 block mt-2">
                      {new Date(entry.createdAt).toLocaleString()}
                    </span>
                  </motion.div>
                ))
              ) : (
                <p className="text-center text-gray-500">No entries found.</p>
              )}
            </div>
            <div className="mt-4 flex justify-center">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 mx-1 text-white bg-indigo-900 rounded-full hover:bg-indigo-500 ${
                    currentPage === index + 1 ? "bg-indigo-500" : ""
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* First Modal for Sharing with Therapist */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] sm:w-[400px]">
            <h3 className="text-xl font-semibold mb-4 text-indigo-900">
              Would you like to share this with your therapist?
            </h3>
            <div className="space-y-4">
            <button
                onClick={() => setShowTherapistModal(true)}
                className="w-full bg-indigo-900 text-white p-2 rounded-lg hover:bg-indigo-500"
              >
                Yes, share with my therapist
              </button>
              <button
                onClick={() => {
                  handleSubmitEntry();
                  setShowModal(false);
                }}
                className="w-full bg-gray-400 text-white p-2 rounded-lg hover:bg-gray-300"
              >
                No, keep it private
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Second Modal for Selecting Therapist */}
      {showTherapistModal && therapists.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] sm:w-[600px] h-[80vh] overflow-y-scroll">
            <h3 className="text-xl font-semibold mb-4 text-indigo-900">Select a Therapist</h3>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-indigo-900">Peer Therapists</h4>
              {therapists.filter((therapist) => therapist.role === "peer-therapist").map((therapist) => (
                <button
                  key={therapist.id}
                  onClick={() => setSelectedTherapist(therapist)}
                  className="w-full bg-indigo-900 text-white p-2 rounded-lg hover:bg-indigo-500 mb-2"
                >
                  {therapist.fullName}
                </button>
              ))}
              <h4 className="text-lg font-semibold text-indigo-900 mt-4">Professional Therapists</h4>
              {therapists.filter((therapist) => therapist.role === "professional-therapist").map((therapist) => (
                <button
                  key={therapist.id}
                  onClick={() => setSelectedTherapist(therapist)}
                  className="w-full bg-indigo-900 text-white p-2 rounded-lg hover:bg-indigo-500 mb-2"
                >
                  {therapist.fullName}
                </button>
              ))}
              <button
                onClick={() => setShowTherapistModal(false)}
                className="w-full bg-gray-400 text-white p-2 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showTherapistModal && therapists.length === 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] sm:w-[400px]">
            <h3 className="text-xl font-semibold mb-4 text-indigo-900">
              No therapists available. Please try again later.
            </h3>
            <button
              onClick={() => setShowTherapistModal(false)}
              className="w-full bg-gray-400 text-white p-2 rounded-lg hover:bg-gray-300"
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmotionDiaryPage;