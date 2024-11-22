import React, { useState, useEffect } from "react";
import { getChatMessages, sendMessage, getUserProfile } from "../../services/chat";
import { useParams, Link } from "react-router-dom";
import Sidebar from "../../layouts/Sidebar"; 
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Chatroom = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const token = localStorage.getItem("authToken");
  const { therapistId } = useParams();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await getUserProfile(token);
        setCurrentUser(response);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchUserProfile();
  }, [token]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await getChatMessages(token, therapistId);
        setMessages(response.messages);
      } catch (error) {
        setError("No chats yet. You can start with a Hi!.");
      }
    };
    fetchMessages();
  }, [therapistId, token]);

  // Fetch messages every 5 seconds to update the chat in real-time
  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const response = await getChatMessages(token, therapistId);
        setMessages(response.messages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    }, 5000);
    return () => clearInterval(intervalId);
  }, [therapistId, token]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    try {
      const response = await sendMessage(token, therapistId, newMessage);
      setNewMessage("");
    } catch (error) {
      setError("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="flex">
      <Sidebar className="fixed top-0 left-0 h-screen w-64" /> 
      <div className="flex-1 overflow-y-auto ml-20 p-4"> 
        <h1 className="text-2xl text-center text-indigo-900 font-bold mb-4">Chats</h1>
        <div className="flex flex-col overflow-y-auto max-h-96">
        {messages.map((message) => (
  <div
    key={message._id}
    className={`w-fit p-2 mb-2 rounded-lg ${
      message.sender === currentUser._id
        ? "bg-green-100 text-green-800 self-end"
        : "bg-blue-100 text-blue-800 self-start"
    }`}

            >
              <span>
                <strong>
                  {message.sender === currentUser._id ? "" : ""}
                  {message.sender === currentUser._id ? "" : ""}
                </strong>
              </span>
              <span> {message.content}</span>
              <span className="text-sm text-indigo-600">{message.createdAt}</span>
              {message.sender === currentUser._id ? (
                <span className="text-sm text-indigo-600"> 
                  {message.read ? 
                    (<>
                      <FontAwesomeIcon icon={faCheck} className="text-blue-600" />
                      <FontAwesomeIcon icon={faCheck} className="text-blue-600" />
                    </>) 
                  : ""}
                </span>
              ) : (
                <span className="text-sm text-indigo-600"> </span>
              )}
            </div>
          ))}
        </div>
        <form
          onSubmit={handleSendMessage}
          className="flex justify-between items-center mt-4"
        >
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message"
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
          <button
            type="submit"
            className="bg-indigo-900 hover:bg-indigo-700 text-white font-bold py-2 px-8 ml-4 rounded-3xl"
          >
            Send
          </button>
        </form>
        {error && <div className="text-red-600">{error}</div>}
        <div className="mt-72">
        <Link to="/chatroom" className="bg-indigo-800 p-2 mt-6 text-white mb-4 rounded-lg hover:bg-gray-200">
          <button>Back to Chatroom</button>
        </Link></div>
        
      </div>
      
    </div>
          
          
        );
      };
      
      export default Chatroom;