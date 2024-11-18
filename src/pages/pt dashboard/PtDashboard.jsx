import React, { useState } from "react";
import Sidebar2 from "../../layouts/Sidebar2";
import Navbar2 from "../../layouts/Navbar2";

const PtDashboard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardName) => {
    setSelectedCard(cardName);
  };

  return (
    <div className="flex h-screen">
      <Sidebar2 />
      <div className="flex-1 flex justify-center items-center">
        <Navbar2 />
        <div className="flex flex-col space-y-4 p-4">
          <h3 className="text-2xl text-center font-bold mb-4">Therapist Dashboard</h3>
          <div className="flex justify-center space-x-4">
            <div
              className={`bg-white p-6 shadow-md rounded-md cursor-pointer hover:bg-blue-100 transition duration-300 ${
                selectedCard === "support" ? "bg-blue-200" : ""
              }`}
              onClick={() => handleCardClick("support")}
            >
              <h4 className="text-xl font-semibold mb-2">Support Someone</h4>
              <p className="text-lg">Support a user in crisis</p>
            </div>
            <div
              className={`bg-white p-6 shadow-md rounded-md cursor-pointer hover:bg-green-100 transition duration-300 ${
                selectedCard === "resource" ? "bg-green-200" : ""
              }`}
              onClick={() => handleCardClick("resource")}
            >
              <h4 className="text-xl font-semibold mb-2">Add a Resource</h4>
              <p className="text-lg">Add a resource</p>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div
              className={`bg-white p-6 shadow-md rounded-md cursor-pointer hover:bg-red-100 transition duration-300 ${
                selectedCard === "chatroom" ? "bg-red-200" : ""
              }`}
              onClick={() => handleCardClick("chatroom")}
            >
              <h4 className="text-xl font-semibold mb-2">Check Your Chatroom</h4>
              <p className="text-lg">Check your chatroom</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PtDashboard;