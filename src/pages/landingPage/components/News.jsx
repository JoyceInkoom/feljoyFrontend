import React, { useState, useEffect } from "react";
import axios from "axios";

const MentalHealthNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(6);

  const API_KEY = "3a3761e883084772999c4b07628fb148";
  const URL = `https://newsapi.org/v2/everything?q=mental+health&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(URL);
        const filteredNews = response.data.articles.filter((article) => {
            return (
              article.title?.trim() !== "" &&
              article.description?.trim() !== "" &&
              article.url?.trim() !== "" &&
              article.urlToImage?.trim() !== "" &&
              article.author?.trim() !== "" &&
              article.content?.trim() !== "" &&
              article.publishedAt?.trim() !== "" &&
              !article.title.includes("[Removed]") &&
              !article.description.includes("[Removed]") &&
              article.urlToImage !== null &&
              article.author !== null
              
            );
          });
          const slicedNews = filteredNews.slice(0, newsPerPage * 5); 
          setNews(slicedNews);
          setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

//   const indexOfLastNews = currentPage * newsPerPage;
//   const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice((currentPage - 1) * newsPerPage, currentPage * newsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-7xl mt-5 mb-5 mx-auto p-4 md:p-6 lg:p-8">
      <h2 className="text-2xl text-center text-indigo-800 font-bold mb-6">LATEST MENTAL HEALTH NEWS</h2>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentNews.map((article) => (
            <div
              key={article.url}
              className="bg-indigo-100 rounded-lg shadow-md p-2 hover:shadow-lg"
            >
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-2">{article.description}</p>
              <p className="text-gray-600 mb-2">By {article.author}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center mt-4">
        {news.length > newsPerPage && (
          <>
            {currentPage > 1 && (
              <button
                onClick={() => paginate(currentPage - 1)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-600 py-2 px-4 rounded-l-lg"
              >
                Previous
              </button>
            )}
            {[...Array(5)].map(
  (item, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`${
                    currentPage === index + 1
                      ? "bg-indigo-800 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-600"
                  } py-2 px-4 rounded-lg mx-1`}
                >
                  {index + 1}
                </button>
              )
            )}
            {currentPage < Math.ceil(news.length / newsPerPage) && (
              <button
                onClick={() => paginate(currentPage + 1)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-600 py-2 px-4 rounded-r-lg"
              >
                ...
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MentalHealthNews;