import React from "react";
import { Link } from "react-router-dom";

const WantToKnowMore = () => {
  return (
    <section className="bg-blue-50 py-10 text-center">
      <h2 className="text-2xl font-semibold mb-4">Want to Know More?</h2>
      <p className="mb-6 text-lg text-gray-700">
        Sign up today to unlock access to valuable resources, support,
        experienced therapists, and more to help you on your mental health
        journey.
      </p>
      <Link
        to="/signup"
        className="bg-gray-800 text-white py-3 px-6 rounded-md text-lg hover:bg-blue-600"
      >
        Sign Up Now
      </Link>
    </section>
  );
};

export default WantToKnowMore;
