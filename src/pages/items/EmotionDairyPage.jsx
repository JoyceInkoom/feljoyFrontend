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
];

const EmotionDiaryPage = () => {
  const [emotion, setEmotion] = useState("");
  const [entryText, setEntryText] = useState("");
  const [entries, setEntries] = useState([]); // Store diary entries

  // Handle the change in selected emotion
  const handleEmotionChange = (e) => {
    setEmotion(e.target.value);
  };

  // Handle the text input for the diary entry
  const handleTextChange = (e) => {
    setEntryText(e.target.value);
  };

  // Save the entry (simulating a backend save)
  const handleSaveEntry = () => {
    if (emotion && entryText) {
      const newEntry = {
        emotion,
        text: entryText,
        date: new Date().toLocaleDateString(),
      };

      setEntries([newEntry, ...entries]); // Add the new entry at the beginning of the list
      setEmotion(""); // Reset emotion
      setEntryText(""); // Reset entry text
    } else {
      alert("Please select an emotion and write your diary entry.");
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar className="w-[400px] flex-shrink-0 h-full" />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="flex flex-col items-center justify-center p-4 text-center h-[calc(100vh-7rem)]">
          <h1 className="text-2xl font-bold mb-6 text-pink-500"> Emotion Diary</h1>

          {/* Emotion Selection */}
          <div className="flex space-x-4 mb-4">
            {emotions.map((emotionOption) => (
              <motion.button
                key={emotionOption.label}
                onClick={() => setEmotion(emotionOption.label)}
                className={`p-3 rounded-full shadow-md transition ${
                  emotion === emotionOption.label ? "bg-pink-400 text-white" : "bg-white text-pink-400"
                }`}
              >
                {emotionOption.emoji}
              </motion.button>
            ))}
          </div>

          {/* Diary Entry Text Area */}
          <textarea
            className="w-full p-4 mt-4 border-2 border-pink-500 rounded-lg"
            placeholder="Write about your day..."
            value={entryText}
            onChange={handleTextChange}
          ></textarea>

          {/* Save Button */}
          <button
            onClick={handleSaveEntry}
            className="mt-6 bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition flex items-center"
          >
            <FaSave className="mr-2" />
            Save Entry
          </button>

          {/* Display Saved Entries as Book Cards */}
          <div className="mt-8 w-full">
            <h2 className="text-xl font-semibold text-pink-600 mb-4">Your Diary Entries</h2>
            {entries.length > 0 ? (
              entries.map((entry, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-bold text-pink-500">{entry.emotion}</h3>
                  <p className="mt-2 text-gray-600">{entry.text}</p>
                  <div className="mt-2 text-sm text-gray-500">{entry.date}</div>
                </motion.div>
              ))
            ) : (
              <p>No entries yet! Start writing your feelings today.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionDiaryPage;
