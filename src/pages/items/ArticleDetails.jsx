// components/ArticleDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getArticlesById } from '../../services/resourses';
import Sidebar from '../../layouts/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';

const ArticleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({});

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await getArticlesById(id);
        console.log('Fetched article:', data); 
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [id]);

  const handleSaveResource = () => {
    // Implement save resource logic here
    console.log('Save resource button clicked!');
  };

  const handleBack = () => {
    navigate('/resources');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar className="fixed top-0 left-0 h-screen w-64" />
      <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
        <h1 className="text-3xl font-bold text-indigo-900 mb-4">{article?.title}</h1>
        <div className="flex space-x-4">
          <div className="flex-4 p-4 bg-white/30 backdrop-blur-md rounded-lg shadow-md">
            <img src={article?.media} alt={article?.title} className="w-full mb-4 rounded-lg" />
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article?.content }}
            />
          </div>
          <div className="flex-1 p-4 bg-white/30 backdrop-blur-md rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">Description: {article?.description}</p>
            <p className="text-gray-600 mb-4">Category: {article?.category}</p>
            <p className="text-gray-600 mb-4">
              Posted by: {article?.postedBy?.userName}
            </p>
            <p className="text-gray-600 mb-4">Created at: {article?.createdAt}</p>
            <p className="text-gray-600 mb-4">Updated at: {article?.updatedAt}</p>
            <p className="text-gray-600 mb-4">Article ID: {article?.id}</p>
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
            onClick={handleSaveResource}
          >
            <FontAwesomeIcon icon={faSave} className="mr-2" /> Save Resource
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;