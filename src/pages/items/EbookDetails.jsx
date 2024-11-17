// components/EbookDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookById } from '../../services/resourses';
import Sidebar from '../../layouts/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { apiClient } from '../../services/config';

const EbookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBookById(id);
        console.log('Fetched book:', data); 
        setBook(data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchBook();
  }, [id]);

  const handleSaveBook = () => {
    // Implement save book logic here
    console.log('Save book button clicked!');
  };

  const handleBack = () => {
    navigate('/resources');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar className="fixed top-0 left-0 h-screen w-64" />
      <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
        <h1 className="text-3xl font-bold text-indigo-900 mb-4">{book?.title}</h1>
        <div className="flex space-x-4">
          <div className="flex-4 p-4 bg-white/30 backdrop-blur-md rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">{book?.description}</p>
            <div className="mt-40">
              <a 
                href={`${apiClient}/resources/book/download/${book?.id}`} 
                download
                className="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl flex items-center"
              >
                Download eBook
              </a>
            </div>
          </div>
          <div className="flex-1 p-4 bg-white/30 backdrop-blur-md rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">Category: {book?.category}</p>
            <p className="text-gray-600 mb-4">
              Posted by: {book?.postedBy?.userName}
            </p>
            <p className="text-gray-600 mb-4">Created at: {book?.createdAt}</p>
            <p className="text-gray-600 mb-4">Updated at: {book?.updatedAt}</p>
            <p className="text-gray-600 mb-4">Book ID: {book?.id}</p>
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
            onClick={handleSaveBook}
          >
            <FontAwesomeIcon icon={faSave} className="mr-2" /> Save Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default EbookDetails;