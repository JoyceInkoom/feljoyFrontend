import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const WantToKnowMore = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-100 to-blue-50 py-8 px-6 text-center shadow-lg rounded-lg max-w-xs mx-auto mt-16 transform transition duration-500 hover:scale-105">
      {/* Decorative Shapes */}
      <div className="absolute -top-4 -left-4 bg-blue-300 w-10 h-10 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute -bottom-4 -right-4 bg-blue-200 w-16 h-16 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-8 right-8 bg-blue-400 w-6 h-6 rounded-full opacity-60 animate-pulse"></div>

      <h2 className="text-2xl font-bold mb-3 text-gray-800">Want to Know More?</h2>
      <p className="mb-6 text-sm text-gray-700">
        Join us to access resources and support for your mental health journey. Let’s take this step together!
      </p>

      <Link
        to="/signup"
        className="inline-flex items-center justify-center bg-indigo-800 text-white font-medium py-2 px-4 rounded-full shadow-md transition duration-300 hover:bg-indigo-900 hover:shadow-lg"
      >
        Sign Up Now
        <FaArrowRight className="ml-2 text-white" />
      </Link>
    </section>
  );
};

export default WantToKnowMore;
