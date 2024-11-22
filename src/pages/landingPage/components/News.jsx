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

        // Validate response structure
        if (!response.data || !response.data.articles) {
          setError("No articles found.");
          setNews([]);
          setLoading(false);
          return;
        }

        const filteredNews =
          response.data.articles?.filter((article) => {
            return (
              article?.title &&
              article?.description &&
              article?.url &&
              article?.urlToImage &&
              article?.author &&
              article?.content &&
              article?.publishedAt &&
              !article.title.includes("[Removed]") &&
              !article.description.includes("[Removed]")
            );
          }) || [];

        setNews(filteredNews.slice(0, newsPerPage * 5));
        setLoading(false);
      } catch (err) {
        setError("Failed to load news articles.");
        setLoading(false);
      }
    };

    fetchNews();
  }, [newsPerPage]);

  const currentNews = news.slice(
    (currentPage - 1) * newsPerPage,
    currentPage * newsPerPage
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-7xl mt-5 mb-5 mx-auto p-4 md:p-6 lg:p-8">
      <h2 className="text-2xl text-center text-indigo-800 font-bold mb-6">
        LATEST BLOGS
      </h2>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {currentNews.map((article, index) => (
    <div
      key={article.url || `article-${index}`}
      className="bg-indigo-100 rounded-lg shadow-md p-2 hover:shadow-lg max-w-sm mx-auto"
    >
      <img
        src={article.urlToImage || "/placeholder-image.jpg"}
        alt={article.title || "No title available"}
        className="w-full h-24 object-cover rounded-t-lg"
      />
      <h3 className="text-sm font-semibold mb-1">
        {article.title || "No title available"}
      </h3>
      <p className="text-gray-600 text-xs mb-1">
        {article.description?.substring(0, 60) || "No description available..."}
      </p>
      <p className="text-gray-600 text-xs mb-1">
        {article.author ? `By ${article.author}` : "Author unknown"}
      </p>
      <a
        href={article.url || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 text-sm"
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
            {[...Array(5)].map((_, index) => (
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
            ))}
            {currentPage < Math.ceil(news.length / newsPerPage) && (
              <button
                onClick={() => paginate(currentPage + 1)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-600 py-2 px-4 rounded-r-lg"
              >
                Next
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MentalHealthNews;
