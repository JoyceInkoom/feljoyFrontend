import React, { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

// Define the categories and their video/music URLs
const categories = [
  {
    title: 'Meditation',
    description: 'Calm your mind and find peace with guided meditation.',
    backgroundImage: 'https://i.pinimg.com/736x/99/6c/0a/996c0af1fde86054ff87a1ca37660817.jpg',
    videos: [
      'https://www.youtube.com/embed/inpok4MKVLM',
      'https://www.youtube.com/embed/z6X5oEIg6Ak',
      'https://www.youtube.com/embed/sDi40FQcaIU',
    ],
    music: [
      'https://www.youtube.com/embed/aIIEI33EUqI',
      'https://www.youtube.com/embed/YRJ6xoiRcpQ', 
      'https://www.youtube.com/embed/xRcWlA1I9z0', 
    ],
  },
  {
    title: 'Yoga',
    description: 'Improve flexibility and strengthen your body with yoga.',
    backgroundImage: 'https://i.pinimg.com/236x/39/42/11/39421140d4a8583fc55c356ea08e03bd.jpg',
    videos: [
      'https://www.youtube.com/embed/v7AYKMP6rOE',
      'https://www.youtube.com/embed/oBu-pQG6sTY',
      'https://www.youtube.com/embed/4pKly2JojMw',
    ],

    music: [
      'https://www.youtube.com/embed/ZcbImANkz6w?list=RDQM1XynFDcXqqY', 
      'https://www.youtube.com/embed/c8n3dqJW4y0?list=RDQM1XynFDcXqqY', 
      'https://www.youtube.com/embed/6AawjvroJUk?list=RDQM1XynFDcXqqY',
    ],
  },
  {
    title: 'Fitness',
    description: 'Get stronger and fitter with this workout music.',
    backgroundImage: 'https://i.pinimg.com/736x/8a/d7/93/8ad793a548b5beb4a25f8ac25c5a10e9.jpg',
    videos: [
      'https://www.youtube.com/embed/enYITYwvPAQ',
      'https://www.youtube.com/embed/ow3hpYJqYEI',
      'https://www.youtube.com/embed/cbKkB3POqaY',
    ],
  
    music: [
      'https://www.youtube.com/embed/qB5G6NOh-ww', 
      'https://www.youtube.com/embed/xBJIUpZeW5o', 
      'https://www.youtube.com/embed/jgk0xtM7KN8', 
    ],
  },
];

const MusicAndVideosSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen">
      {/* Top Navbar */}
      <nav className="bg-indigo-900 text-white px-4 py-2 shadow-md flex justify-between items-center">
        <button
          className="bg-white text-blue-500 px-4 py-2 rounded-md shadow-md hover:bg-blue-100 transition-all"
          onClick={() => (window.location.href = '/userdashboard')}
        >
          Home
        </button>
        <h1 className="text-xl font-semibold">Relaxing Media........</h1>
      </nav>

      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-3xl font-bold text-indigo-900">Relax & Recharge</h1>
        <p className="mt-1 text-lg text-gray-700">
          Explore a curated collection of relaxing music and inspirational videos for your wellness journey.
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 -mt-3 grid gap-14 w-4/5">
        {categories.map((category, index) => (
          <section
            key={index}
            className="bg-indigo-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all"
          >
            {/* Background with Title and Description */}
            <div
              className="relative h-52 flex items-center justify-center"
              style={{
                backgroundImage: `url(${category.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative text-center text-white px-4">
                <h2 className="text-3xl font-bold  px-4 py-2 rounded-md">
                  {category.title}
                </h2>
                <p className="mt-1 text-sm  px-3  rounded-md">
                  {category.description}
                </p>
              </div>
            </div>

            {/* Videos Section */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">Videos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {category.videos.map((video, idx) => (
                  <div
                    key={idx}
                    className="rounded-md overflow-hidden shadow-lg bg-gray-100 hover:shadow-xl transition-all"
                  >
                    <iframe
                      className="w-full h-48"
                      src={video}
                      title={`${category.title} Video ${idx + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>

            {/* Music Section */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">Music</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {category.music.map((track, idx) => (
                  <div
                    key={idx}
                    className="rounded-md overflow-hidden shadow-lg bg-gray-100 hover:shadow-xl transition-all"
                  >
                    <iframe
                      className="w-full h-48"
                      src={track}
                      title={`${category.title} Music ${idx + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default MusicAndVideosSection;