import React from "react";
import { Link } from "react-router-dom";

const BecomeSupport = () => {
  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-4">
        Become a Support
      </h1>
      <p className="text-center mb-8">
        Are you passionate about helping others and making a difference in
        people's lives? Whether you're looking to offer peer support or
        professional therapy, we welcome you to become a valuable part of our
        community. Choose the role that best suits you and start making an
        impact today!
      </p>

      <div className="flex justify-around gap-8">
        {/* Peer Therapist Option */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/3 text-center">
          <img
            src="https://i.pinimg.com/564x/bd/27/a8/bd27a8be80321da8bd268d89e1df7366.jpg"
            alt="Peer Therapist"
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-4">Peer Therapist</h2>
          <p className="mb-4 text-gray-600">
            As a Peer Therapist, you'll provide emotional support to individuals
            facing mental health challenges. You’ll offer a safe, empathetic
            environment, and use your personal experiences to guide others in
            their journey. Your role helps create a compassionate and supportive
            community for those in need.
          </p>
          <Link
            to="/signup"
            className="bg-gray-800 text-white py-2 px-4 rounded-md"
          >
            Sign Up as Peer Therapist
          </Link>
        </div>

        {/* Professional Therapist Option */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/3 text-center">
          <img
            src="https://i.pinimg.com/564x/b9/77/a8/b977a8b40a6a66676986a0dd25483f65.jpg"
            alt="Professional Therapist"
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-4">Professional Therapist</h2>
          <p className="mb-4 text-gray-600">
            As a Professional Therapist, you’ll apply your expertise to guide
            individuals through mental health challenges. With advanced skills
            and knowledge, you'll support clients through therapy and
            counseling, making a lasting impact on their well-being and growth.
          </p>
          <Link
            to="/signup"
            className="bg-gray-800 text-white py-2 px-4 rounded-md"
          >
            Sign Up as Professional Therapist
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BecomeSupport;
