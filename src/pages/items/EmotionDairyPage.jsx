import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSave } from "react-icons/fa";
import Sidebar from "../../layouts/Sidebar";
import Navbar from "../../layouts/Navbar";

// Available emotions with emojis for the user to select
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
  const [entries, setEntries] = useState([]); // Store diary entries
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [shareWithTherapist, setShareWithTherapist] = useState(null);
  const entriesPerPage = 6;

  // Handle the change in selected emotion
  const handleEmotionChange = (emotionLabel) => {
    setEmotion(emotionLabel);
  };

  // Handle the text input for the diary entry
  const handleTextChange = (e) => {
    setEntryText(e.target.value);
  };

  // Handle save and open the modal for therapist sharing permission
  const handleSaveEntry = () => {
    if (emotion && entryText) {
      setShowModal(true); // Open the modal for sharing permission
    } else {
      alert("Please select an emotion and write your diary entry.");
    }
  };

  // Confirm or deny therapist access to emotion
  const handleTherapistPermission = (allow) => {
    const newEntry = {
      emotion,
      text: entryText,
      date: new Date().toLocaleDateString(),
      therapistCanSee: allow, // Set the flag based on user selection
    };

    setEntries([newEntry, ...entries]); // Add the new entry at the beginning of the list
    setShowModal(false); // Close the modal after decision
    setEmotion(""); // Reset emotion
    setEntryText(""); // Reset entry text
  };

  // Pagination logic
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
                onClick={() => handleEmotionChange(emotionOption.label)}
                className={`relative p-2 rounded-full shadow-md transition ${
                  emotion === emotionOption.label
                    ? "bg-indigo-900 text-white"
                    : "bg-white text-indigo-900 border border-indigo-900"
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {emotionOption.emoji}
                {emotion === emotionOption.label && (
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
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md border border-pink-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-lg font-bold text-indigo-900">{entry.emotion}</h3>
                    <p className="mt-2 text-gray-600 text-sm">{entry.text}</p>
                    <div className="mt-2 text-xs text-gray-500">{entry.date}</div>
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-600">No entries yet! Start writing your feelings today.</p>
              )}
            </div>

            {/* Pagination Controls */}
            {entries.length > entriesPerPage && (
              <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 rounded ${
                      currentPage === page
                        ? "bg-indigo-900 text-white"
                        : "bg-white border border-indigo-900 text-indigo-900"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Therapist Permission */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h3 className="text-xl font-semibold mb-4">Permission to Share with Therapist</h3>
            <p className="text-sm mb-4">
              Would you like to allow your therapist to see your emotion? Your diary entry is confidential and safe.
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => handleTherapistPermission(true)}
                className="bg-indigo-900 text-white p-2 rounded-md hover:bg-indigo-500"
              >
                Allow
              </button>
              <button
                onClick={() => handleTherapistPermission(false)}
                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
              >
                Disallow
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmotionDiaryPage;
