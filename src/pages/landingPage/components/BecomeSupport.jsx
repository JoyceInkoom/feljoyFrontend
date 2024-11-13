import React from "react";
import { Link } from "react-router-dom";
import { 
  FaHandsHelping, 
  FaUserMd, 
  FaHeart 
} from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdVolunteerActivism } from "react-icons/md";

const BecomeSupport = () => {
  return (
    <section className="px-4 py-16 max-w-6xl mx-auto mt-16 bg-gradient-to-r from-indigo-100 to-blue-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <MdVolunteerActivism className="text-5xl text-indigo-600 inline-block mr-4" />
          Become a Support
        </h1>
        <div className="flex items-center justify-center mb-10">
          <p
            className="text-xl text-gray-600 max-w-xl bg-indigo-200 p-4 rounded-3xl shadow-md flex items-center"
          >
            <AiOutlineInfoCircle 
              className="text-9xl text-indigo-600 mr-4"
            />
            Are you passionate about helping others and making a difference in people’s lives? Whether you're looking to offer peer support or professional therapy, we welcome you to join our community and start making an impact today!
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Peer Therapist Option */}
        <div className="relative bg-white border border-gray-200 p-6 rounded-xl shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl">
          <FaHeart className="absolute top-6 right-6 text-blue-400 text-3xl" />
          <img
            src="https://i.pinimg.com/564x/bd/27/a8/bd27a8be80321da8bd268d89e1df7366.jpg"
            alt="Peer Therapist"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Peer Therapist
          </h2>
          <p className="text-sm text-gray-600 mb-5">
            As a Peer Therapist, you’ll provide emotional support to those facing mental health challenges. You’ll use your experiences to guide others and foster a compassionate community.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-blue-600 text-white py-2 px-5 rounded-full font-medium text-sm transition transform hover:bg-blue-700 hover:-translate-y-0.5"
          >
            Sign Up as Peer Therapist
          </Link>
        </div>

        {/* Professional Therapist Option */}
        <div className="relative bg-white border border-gray-200 p-6 rounded-xl shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl">
          <FaUserMd className="absolute top-6 right-6 text-green-400 text-3xl" />
          <img
            src="https://i.pinimg.com/564x/b9/77/a8/b977a8b40a6a66676986a0dd25483f65.jpg"
            alt="Professional Therapist"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Professional Therapist
          </h2>
          <p className="text-sm text-gray-600 mb-5">
            As a Professional Therapist, you'll use your skills to support clients through therapy, making a meaningful impact on their mental health journey.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-green-600 text-white py-2 px-5 rounded-full font-medium text-sm transition transform hover:bg-green-700 hover:-translate-y-0.5"
          >
            Sign Up as Professional Therapist
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BecomeSupport;