import React, { useEffect, useState } from 'react';
import { getAllArticles, getAllVideos, getAllEbooks } from '../../services/resourses';
import { Link } from 'react-router-dom';

const ResourcesPage = () => {
  const [articles, setArticles] = useState([]);
  const [videos, setVideos] = useState([]);
  const [ebooks, setEbooks] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const articlesData = await getAllArticles();
        console.log('Fetched articles:', articlesData); // Log fetched articles data
        setArticles(articlesData);

        const videosData = await getAllVideos();
      console.log('Fetched videos:', videosData); // Log videos to check the data
      setVideos(videosData);

        const ebooksData = await getAllEbooks();

        setVideos(videosData);
        setEbooks(ebooksData);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchResources();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-pink-500 mb-8">Resources</h1>

      {/* Articles Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.length > 0 ? (
            articles.map((article) => (
              <Link to={`/resource/article/${article.id}`} key={article.id}>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition">
                  <h3 className="text-xl font-semibold text-pink-500">{article.title}</h3>
                  <p className="text-gray-600 mt-2">{article.description}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No articles available</p>
          )}
        </div>
      </div>

      <div className="mb-8">
  <h2 className="text-2xl font-semibold text-pink-600 mb-4">Videos</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {videos.length > 0 ? (
      videos.map((video) => (
        <Link to={`/resource/video/${video.id}`} key={video.id}>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-pink-500">{video.title}</h3>
            <p className="text-gray-600 mt-2">{video.description}</p>
            {/* Example to embed a video */}
            <video controls>
              <source src={`https://your-server.com/${video.video}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Link>
      ))
    ) : (
      <p>No videos available</p>
    )}
  </div>
</div>


      {/* Ebooks Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Ebooks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ebooks.length > 0 ? (
            ebooks.map((ebook) => (
              <Link to={`/resource/book/${ebook.id}`} key={ebook.id}>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition">
                  <h3 className="text-xl font-semibold text-pink-500">{ebook.title}</h3>
                  <p className="text-gray-600 mt-2">{ebook.description}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No ebooks available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
