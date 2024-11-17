// components/VideoDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getVideoById } from '../../services/resourses';
import Sidebar from '../../layouts/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';

const VideoDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState({});

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const data = await getVideoById(id);
        console.log('Fetched video:', data); 
        setVideo(data);
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    fetchVideo();
  }, [id]);

  const handleSaveVideo = () => {
    // Implement save video logic here
    console.log('Save video button clicked!');
  };

  const handleBack = () => {
    navigate('/resources');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar className="fixed top-0 left-0 h-screen w-64" />
      <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
        <h1 className="text-3xl font-bold text-indigo-900 mb-4">{video?.title}</h1>
        <div className="flex space-x-4">
          <div className="flex-4 p-4 bg-white/30 backdrop-blur-md rounded-lg shadow-md">
            <video 
              src={`https://savefiles.org/${video?.video}/sharable_link=468`} 
              controls 
              className="w-full mb-4 rounded-lg"
            />
            <p className="text-gray-600 mb-4">{video?.description}</p>
          </div>
          <div className="flex-1 p-4 bg-white/30 backdrop-blur-md rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">Category: {video?.category}</p>
            <p className="text-gray-600 mb-4">
              Posted by: {video?.postedBy?.userName}
            </p>
            <p className="text-gray-600 mb-4">Created at: {video?.createdAt}</p>
            <p className="text-gray-600 mb-4">Updated at: {video?.updatedAt}</p>
            <p className="text-gray-600 mb-4">Video ID: {video?.id}</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button
            className="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl flex items-center"
            onClick={handleBack}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back to Resources
          </button>
          <button
            className="bg-black hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded-3xl flex items-center"
            onClick={handleSaveVideo}
          >
            <FontAwesomeIcon icon={faSave} className="mr-2" /> Save Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;