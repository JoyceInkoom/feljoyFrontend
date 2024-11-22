// import React, { useState, useEffect } from "react";
// import { getChatMessages } from "../../services/chat";
// import { useParams } from "react-router-dom";

// const Chat = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [error, setError] = useState(null);
//   const token = localStorage.getItem("authToken");
//   const { therapistId } = useParams();

//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const response = await getChatMessages(token, therapistId);
//         setMessages(response.messages);
//       } catch (error) {
//         setError("Failed to fetch messages. Please try again.");
//       }
//     };
//     fetchMessages();
//   }, [therapistId, token]);

//   // Fetch messages every 5 seconds to update the chat in real-time
//   useEffect(() => {
//     const intervalId = setInterval(async () => {
//       try {
//         const response = await getChatMessages(token, therapistId);
//         setMessages(response.messages);
//       } catch (error) {
//         console.error("Error fetching messages:", error);
//       }
//     }, 5000);
//     return () => clearInterval(intervalId);
//   }, [therapistId, token]);

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     try {
//       // Call API to send message
//       const response = await sendMessage(token, therapistId, newMessage);
//       setNewMessage("");
//     } catch (error) {
//       setError("Failed to send message. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h1>Chat with Therapist {therapistId}</h1>
//       <ul>
//         {messages.map((message) => (
//           <li key={message._id}>
//             <span>
//               <strong>{message.sender}:</strong> {message.content}
//             </span>
//             <span> {message.createdAt}</span>
//           </li>
//         ))}
//       </ul>
//       <form onSubmit={handleSendMessage}>
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type your message"
//         />
//         <button type="submit">Send Message</button>
//       </form>
//       {error && <div style={{ color: "red" }}>{error}</div>}
//     </div>
//   );
// };

// export default Chat;