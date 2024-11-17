import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ref, set, push, onValue } from 'firebase/database';
import { database } from '../../../firebase'; // Import Firebase config

const ChatRoom = () => {
  const { id } = useParams(); // Therapist ID
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typingUser, setTypingUser] = useState('');
  const messagesEndRef = useRef(null);
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    // Listen for new messages in the chat room
    const messagesRef = ref(database, `chatrooms/${id}/messages`);
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messagesArray = Object.values(data);
        setMessages(messagesArray.reverse()); // Reverse the order to show latest first
      }
    });

    // Listen for typing indicator
    const typingRef = ref(database, `chatrooms/${id}/typing`);
    onValue(typingRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setTypingUser(data);
      } else {
        setTypingUser('');
      }
    });

  }, [id]);

  const handleSendMessage = () => {
    if (messageInput.trim() === "") return; // Prevent empty messages

    // Get the auth token from localStorage
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      console.error("No authentication token found!");
      return;
    }

    const messagesRef = ref(database, `chatrooms/${id}/messages`);
    const newMessageRef = push(messagesRef);

    const newMessage = {
      sender: 'user',
      text: messageInput,
      timestamp: Date.now(),
      delivered: false,
      read: false,
      token: authToken, // Include the token in the message
    };

    // Save the message with user and therapist information
    set(newMessageRef, newMessage);

    // Update the local state to immediately display the new message
    setMessages([newMessage, ...messages]); // Add the sent message to the front of the list

    setMessageInput(""); // Clear input field after sending
  };

  const handleTyping = () => {
    const typingRef = ref(database, `chatrooms/${id}/typing`);
    set(typingRef, 'user');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      set(typingRef, '');
    }, 2000); // Clear typing indicator after 2 seconds
  };

  const scrollToTop = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToTop(); // Scroll to the latest message after sending
  }, [messages]);

  const handleHomeClick = () => {
    navigate('/userdashboard'); // Navigate to user dashboard
  };

  return (
    <div className="flex flex-col max-w-4xl mx-auto p-4 space-y-4">
      <button onClick={handleHomeClick} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mb-4">Go to Dashboard</button>

      <h2 className="text-xl font-semibold">Chat with Therapist</h2>

      <div className="flex flex-col space-y-4 overflow-y-auto max-h-[500px] p-2 border border-gray-200 rounded-lg bg-gray-50">
        {messages.map((msg, index) => {
          const messageDate = new Date(msg.timestamp);
          const messageTime = messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const messageDateFormatted = messageDate.toLocaleDateString();

          return (
            <div key={index} className={`flex flex-col space-y-2 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
              <div className="flex items-center space-x-2">
                <img src={`/avatars/${msg.sender}.png`} alt={`${msg.sender} avatar`} className="w-8 h-8 rounded-full" />
                <span className="text-sm text-gray-400">{messageTime}</span>
              </div>
              <div className={`px-4 py-2 max-w-xs rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}>
                <p>{msg.text}</p>
                <div className="flex space-x-2 text-sm text-gray-400">
                  {msg.delivered && <span>✔️ Delivered</span>}
                  {msg.read && <span>👀 Read</span>}
                </div>
              </div>
              {index === 0 || messageDateFormatted !== new Date(messages[index - 1].timestamp).toLocaleDateString() ? (
                <div className="text-center text-sm text-gray-500">{messageDateFormatted}</div>
              ) : null}
            </div>
          );
        })}
      </div>

      {typingUser && (
        <div className="text-sm italic text-gray-500">{typingUser} is typing...</div>
      )}

      <div className="flex items-center space-x-2 mt-4">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => {
            setMessageInput(e.target.value);
            handleTyping();
          }}
          placeholder="Type a message"
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>

      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatRoom;
