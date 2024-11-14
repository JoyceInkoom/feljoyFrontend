import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRedo } from "react-icons/fa";
import Confetti from "react-confetti";
import Sidebar from "../../layouts/Sidebar";
import Navbar from "../../layouts/Navbar";


const stressBalls = [
  { id: 1, name: "🔵", color: "#007BFF" },
  { id: 2, name: "🟢", color: "#28A745" },
  { id: 3, name: "🟡", color: "#FFC107" },
  { id: 4, name: "🔴", color: "#DC3545" },
  { id: 5, name: "🟣", color: "#6F42C1" },
  { id: 6, name: "🟠", color: "#FD7E14" },
  { id: 7, name: "🔵 Textured", color: "#007BFF", texture: "dotted" },
  { id: 8, name: "🟢 Soft", color: "#28A745", texture: "soft" },
];

const StressBallPage = () => {
  const [selectedBall, setSelectedBall] = useState(null);
  const [isHit, setIsHit] = useState(false);
  const [message, setMessage] = useState("");
  const [hitCount, setHitCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [volume, setVolume] = useState(1); // Volume state (default 1)

  useEffect(() => {
    if (isHit) {
      setTimeout(() => setIsHit(false), 500);
    }

    if (hitCount > 0 && hitCount % 10 === 0) {
      triggerConfetti();
    }
  }, [isHit, hitCount]);

  const handleReset = () => {
    setSelectedBall(null);
    setMessage("");
    setHitCount(0);
    setShowConfetti(false);
  };

  const handleInteraction = (type) => {
    setIsHit(true);
    setHitCount(hitCount + 1);
    setMessage(type === "hit" ? "You hit the stress ball!" : "You slapped the stress ball!");
    playSound(type);
  };

  const playSound = (action) => {
    const sound = new Audio(`/sounds/${action}.mp3`);
    sound.volume = volume; // Set the volume based on the volume state
    sound.play();
  };

  const triggerConfetti = () => {
    setMessage("Great job! Keep relieving that stress!");
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // Hide confetti after 3 seconds
  };

  return (
    <div className="flex h-screen">
      <Sidebar className="w-[400px] flex-shrink-0 h-full" />  {/* Adjust sidebar width */}
      <div className="flex flex-col w-full">
        {/* <Navbar /> */}

        <div className="flex flex-col items-center justify-center p-4 text-center h-[calc(100vh-7rem)]">
          <h1 className="text-2xl font-bold mb-6">Choose Your Stress Ball</h1>

          <div className="flex space-x-4 mb-8">
            {stressBalls.map((ball) => (
              <button
                key={ball.id}
                onClick={() => setSelectedBall(ball)}
                className="p-3 rounded-full shadow-md transition transform hover:scale-110"
              >
                {ball.name}
              </button>
            ))}
          </div>

          {selectedBall && (
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold mb-4">
                {selectedBall.name} Stress Ball
              </h2>
              <motion.div
                animate={{ scale: isHit ? 0.6 : 1 }}
                transition={{ type: "spring", stiffness: 150, damping: 5 }}
                className="w-32 h-32 rounded-full bg-cover bg-center relative"
                style={{ backgroundColor: selectedBall.color }}
              >
                <AnimatePresence>
                  {isHit && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 0.8, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute splash"
                    />
                  )}
                </AnimatePresence>
              </motion.div>

              <div className="flex space-x-8 mt-6">
                <motion.button
                  onClick={() => handleInteraction("hit")}
                  whileTap={{ scale: 1.5 }}
                  className="text-5xl text-red-500 hand-icon"
                  aria-label="Hit the stress ball"
                >
                  👊
                </motion.button>
                <motion.button
                  onClick={() => handleInteraction("slap")}
                  whileTap={{ scale: 1.5 }}
                  className="text-5xl text-yellow-500 hand-icon"
                  aria-label="Slap the stress ball"
                >
                  🖐️
                </motion.button>
              </div>

              <AnimatePresence>
                {message && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-lg font-semibold text-green-600"
                  >
                    {message}
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="mt-2 text-sm text-gray-500">Hits: {hitCount}</div>
            </div>
          )}

          <div className="flex space-x-4 mt-8">
            <button
              onClick={handleReset}
              className="flex items-center px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
            >
              <FaRedo className="mr-2" />
              Reset
            </button>
          </div>

          {/* Volume Control */}
          <div className="mt-4">
            <label htmlFor="volume" className="mr-2">Volume</label>
            <input
              id="volume"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-48"
            />
          </div>

          {/* Confetti Effect */}
          {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
        </div>
      </div>

      {/* Centered Message */}
      {showConfetti && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-3xl font-bold text-black bg-opacity-75 p-6 rounded-lg shadow-lg"
          >
            Great job! Keep relieving that stress!
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default StressBallPage;
