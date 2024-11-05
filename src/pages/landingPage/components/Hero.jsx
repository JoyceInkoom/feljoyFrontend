import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import your images for the background
import backgroundImage1 from "../../../assets/images/emojis.jpg";
import backgroundImage2 from "../../../assets/images/sad.jpg";
import backgroundImage3 from "../../../assets/images/happy1.jpg";
import backgroundImage4 from "../../../assets/images/moody.jpg";
import backgroundImage5 from "../../../assets/images/happy2.jpg";
import backgroundImage6 from "../../../assets/images/hug.jpg";
import backgroundImage7 from "../../../assets/images/smile.jpg";

const images = [
  backgroundImage1,
  backgroundImage2,
  backgroundImage3,
  backgroundImage4,
  backgroundImage5,
  backgroundImage6,
  backgroundImage7,
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const textToType = "Your mental health matters! Get the support you need."; // Typewriter text

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let typingTimeout;
    let index = 0;

    const typeWriterEffect = () => {
      if (index < textToType.length) {
        setTypedText((prev) => prev + textToType.charAt(index));
        index++;
        typingTimeout = setTimeout(typeWriterEffect, 100);
      } else {
        clearTimeout(typingTimeout); // Clear timeout once the text is fully typed
      }
    };

    typeWriterEffect();

    return () => clearTimeout(typingTimeout); // Clear timeout on component unmount
  }, [textToType]); // Add textToType as dependency

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-6xl text-white  text-center mb-4">
          {typedText}
        </h1>
        <p className="text-lg text-white text-center mb-6">
          Discover resources and support for mental well-being.
        </p>
        <Link
          to="/login"
          className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-400 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Hero;
