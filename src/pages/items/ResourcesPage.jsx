import React, { useEffect, useState } from "react";
import {
  getAllArticles,
  getAllVideos,
  getAllEbooks,
} from "../../services/resourses";
import { Link } from "react-router-dom";
import Sidebar from "../../layouts/Sidebar";

const ResourcesPage = () => {
  const [articles, setArticles] = useState([]);
  const [videos, setVideos] = useState([]);
  const [ebooks, setEbooks] = useState([]);
  const [currentPageArticles, setCurrentPageArticles] = useState(1);
  const [currentPageVideos, setCurrentPageVideos] = useState(1);
  const [currentPageEbooks, setCurrentPageEbooks] = useState(1);
  const resourcesPerPage = 3;

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const articlesData = await getAllArticles();
        console.log("Fetched articles:", articlesData);
        setArticles(articlesData);

        const videosData = await getAllVideos();
        console.log("Fetched videos:", videosData);
        setVideos(videosData);

        const ebooksData = await getAllEbooks();
        setEbooks(ebooksData);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchResources();
  }, []);

  const indexOfLastArticle = currentPageArticles * resourcesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - resourcesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const indexOfLastVideo = currentPageVideos * resourcesPerPage;
  const indexOfFirstVideo = indexOfLastVideo - resourcesPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  const indexOfLastEbook = currentPageEbooks * resourcesPerPage;
  const indexOfFirstEbook = indexOfLastEbook - resourcesPerPage;
  const currentEbooks = ebooks.slice(indexOfFirstEbook, indexOfLastEbook);

  const paginateArticles = (pageNumber) => setCurrentPageArticles(pageNumber);
  const paginateVideos = (pageNumber) => setCurrentPageVideos(pageNumber);
  const paginateEbooks = (pageNumber) => setCurrentPageEbooks(pageNumber);

  return (
    <div className=" h-screen flex">
      <div className='className="fixed top-0 left-0 h-screen w-64 bg-white shadow-md z-10'>
        <Sidebar />
      </div>
      <div className="flex-1  overflow-y-auto p-4">
        <h1 className="text-3xl text-center font-bold text-indigo-900 mb-2">Resources</h1>
        <h4 className="text-center font-bold text-indigo-900">Explore handpicked resources to improve your mental health</h4>

        {/* Articles Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-900 mb-4">
            Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentArticles.map((article) => (
              <Link to={`/resources/article/${article.id}`} key={article.id}>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition">
                  <h3 className="text-xl font-semibold text-black">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mb-8">
            {[...Array(Math.ceil(articles.length / resourcesPerPage))].map(
              (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginateArticles(i + 1)}
                  className={`px-4 py-2 mx-1 text-lg font-bold cursor-pointer ${
                    currentPageArticles === i + 1
                      ? "bg-indigo-900 rounded-full mt-5 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentVideos.map((video) => (
              <Link to={`/resources/video/${video.id}`} key={video.id}>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition">
                  <h3 className="text-xl font-semibold text-black">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{video.description}</p>
                  {/* Example to embed a video */}
                  <video controls>
                    <source
                      src={`https://your-server.com/${video.video}`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mb-8">
            {[...Array(Math.ceil(videos.length / resourcesPerPage))].map(
              (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginateVideos(i + 1)}
                  className={`px-4 py-2 mx-1 text-lg font-bold cursor-pointer ${
                    currentPageVideos === i + 1
                      ? "bg-indigo-900 rounded-full mt-5 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>

        {/* Ebooks Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Ebooks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentEbooks.map((ebook) => (
              <Link to={`/resources/book/${ebook.id}`} key={ebook.id}>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition">
                  <h3 className="text-xl font-semibold text-black">
                    {ebook.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{ebook.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mb-8">
            {[...Array(Math.ceil(ebooks.length / resourcesPerPage))].map(
              (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginateEbooks(i + 1)}
                  className={`px-4 py-2 mx-1 text-lg font-bold cursor-pointer ${
                    currentPageEbooks === i + 1
                      ? "bg-indigo-900 rounded-full mt-5 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResourcesPage;
