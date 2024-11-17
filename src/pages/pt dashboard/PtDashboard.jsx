import React, { useState, useEffect, useRef } from "react";
import { database } from "../../../firebase"; // Path to your firebase.js
import { ref, onValue, push } from "firebase/database";
import Sidebar2 from "../../layouts/Sidebar2"; // Import your Sidebar
import Navbar2 from "../../layouts/Navbar2"; // Import your Navbar

const PtDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [users, setUsers] = useState([]); // List of users the therapist is chatting with
  const [selectedChatId, setSelectedChatId] = useState(""); // Store the selected chatId
  const [userProfilePics, setUserProfilePics] = useState({}); // Store user profile pictures
  const [typingStatus, setTypingStatus] = useState(""); // Show typing status
  const chatEndRef = useRef(null); // Ref for auto-scrolling

  // Fetch the list of users the therapist is chatting with
  useEffect(() => {
    const usersRef = ref(database, "therapists/therapist123/chats");
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setUsers(Object.entries(data).map(([userId, chatData]) => ({
          userId, ...chatData
        })));
      }
    });
  }, []);

  // Fetch messages for the selected chat
  useEffect(() => {
    if (!selectedChatId) return; // If no chat selected, do nothing
    const messagesRef = ref(database, `messages/${selectedChatId}`);
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const chatMessages = data
        ? Object.entries(data).map(([id, msg]) => ({ id, ...msg }))
        : [];
      setMessages(chatMessages);
    });
  }, [selectedChatId]);

  // Send a message
  const sendMessage = () => {
    if (currentMessage.trim() && selectedChatId) {
      const messagesRef = ref(database, `messages/${selectedChatId}`);
      const currentUser = "therapist"; // Replace with the current logged-in user (e.g., from auth)
      push(messagesRef, {
        sender: currentUser, 
        username: "Therapist Name", // Replace with dynamic username of the logged-in user
        text: currentMessage,
        timestamp: Date.now(),
        read: false, 
        delivered: false,
      });
      setCurrentMessage(""); // Reset input field after sending
      setTypingStatus(""); // Clear typing status
    }
  };

  // Format timestamp to hours and minutes
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
  };

  // Scroll to the bottom of the chat
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex h-screen">
      <Sidebar2 />
      <div className="flex-1 flex flex-col">
        <Navbar2 />
        
        {/* Chat List (Users the therapist is chatting with) */}
        <div className="p-4 bg-gray-100 h-full flex flex-col">
          <div className="bg-white p-4 shadow-md rounded-md flex-1 overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">Chat with Users</h3>
            {users.map((user) => (
              <div
                key={user.userId}
                className="p-2 mb-2 cursor-pointer hover:bg-gray-200 rounded-md"
                onClick={() => setSelectedChatId(`therapist123_${user.userId}`)} // Open chat when clicking on user
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={userProfilePics[user.userId]?.profilePic || "/default-profile-pic.png"}
                    alt={user.username}
                    className="w-8 h-8 rounded-full"
                  />
                  <p>{user.username}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Messages */}
          <div className="bg-white p-4 shadow-md rounded-md flex-1 overflow-y-auto mt-4">
            {messages.map((msg) => {
              const formattedTime = formatTime(msg.timestamp);
              return (
                <div
                  key={msg.id}
                  className={`p-2 my-2 rounded-md ${msg.sender === "therapist" ? "bg-blue-100 text-blue-700" : "bg-gray-200 text-gray-700"}`}
                >
                  <div className="flex items-center space-x-2">
                    <img
                      src={userProfilePics[msg.sender]?.profilePic || "/default-profile-pic.png"}
                      alt={msg.username}
                      className="w-8 h-8 rounded-full"
                    />
                    <p>{msg.username}</p> {/* Display username */}
                    <small className="text-xs text-gray-500 ml-auto">{formattedTime}</small>
                  </div>
                  <p>{msg.text}</p>
                </div>
              );
            })}
            <div ref={chatEndRef} />
          </div>

          {/* Typing Indicator */}
          {typingStatus && (
            <div className="text-sm text-gray-500 italic mt-2">{typingStatus}</div>
          )}

          {/* Message Input */}
          <div className="flex mt-4">
            <input
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={sendMessage}
              className="ml-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PtDashboard;
