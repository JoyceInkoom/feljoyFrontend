import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../layouts/Sidebar"; // Import your Sidebar component
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://mental-support-api.onrender.com",
});

const ChatSessions = () => {
  const [chatSessions, setChatSessions] = React.useState([]);
  const [error, setError] = React.useState(null);
  const token = localStorage.getItem("authToken");

  React.useEffect(() => {
    const fetchChatSessions = async () => {
      try {
        const response = await apiClient.get("/chat-sessions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setChatSessions(response.data);
      } catch (error) {
        setError("No Chat Sessions Yet. Visit Peer and Professional Therapists Pages to Chat.");
      }
    };

    const intervalId = setInterval(fetchChatSessions, 5000); // Fetch every 5 seconds
    fetchChatSessions(); // Initial fetch

    return () => clearInterval(intervalId);
  }, [token]);

  return (
    <div className="flex">
      <Sidebar className="fixed top-0 left-0 h-screen w-64" /> {/* Fixed Sidebar */}
      <div className="flex-1 overflow-y-auto p-4"> {/* Scrollable Content */}
        
        <h1 className="text-center font-bold text-xl text-indigo-900 mb-6">Chat Sessions</h1>
        {error && <div className="text-red-600">{error}</div>}
        {chatSessions.map((session) => (
          session.withUser && (
            <Link key={session.chatId} to={`/chatroom/${session.withUser.id}`}>
              <div className="bg-indigo-500 p-4 mb-4 rounded-lg hover:bg-indigo-100 text-white">
                <h2>
                  {session.withUser.userName} 
                </h2>
                <p>Last Message: {session.lastMessage.content}</p>
                <p>Message Count: {session.messageCount}</p>
              </div>
            </Link>
          )
        ))}
        {/* <Link to="/dashboard" className="bg-gray-100 p-2 mb-4 rounded-lg hover:bg-gray-200">
          <button>Back to Dashboard</button>
        </Link> */}
      </div>
    </div>
  );
};

export default ChatSessions;