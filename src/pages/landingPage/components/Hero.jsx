import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Online background images
const images = [
  "https://i.pinimg.com/564x/e5/ff/b0/e5ffb02f7e2ce779322b2e0e2ba1e91a.jpg",
  "https://i.pinimg.com/564x/40/f1/84/40f1847c48c6453c00980084061b259d.jpg",
  "https://i.pinimg.com/564x/4c/56/03/4c5603cef6dbc47a718e18a8b48440d5.jpg",
  "https://i.pinimg.com/564x/43/f1/be/43f1beadbe7aaa6dafebdeb0d002a306.jpg",
  "https://i.pinimg.com/736x/c6/d3/cc/c6d3cc853b5bcfe66c4940bc8501a416.jpg",
  "https://i.pinimg.com/564x/28/05/16/280516cb01e460afc92e993c60d8b06b.jpg",
  "https://i.pinimg.com/564x/c7/46/11/c746117bed3e6951bfc9043916c612d5.jpg",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const textToDisplay =
    "Your Mental health matters!!"; // Static text

  // Change background images every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Overlay with text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
        <h3 className="text-xl md:text-6xl text-white text-center mb-4 animate-bounce">
          {textToDisplay}
        </h3>
        {/* <div className="bg-gray-800 text-center p-1 rounded-lg shadow-sm"> */}
  <p className="text-xl text-white mb-2">
  Get the support you need....
  </p>
{/* </div> */}

        <Link
          to="/signup"
          className="mt-4 bg-indigo-900 text-white py-2 px-6 rounded-md hover:bg-orange-400 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Hero;
