import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllArticles } from "../../../services/resourses";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getAllArticles();
        setArticles(data);
      } catch (err) {
        setError("Failed to load articles. Please try again later.");
        console.error(err);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-semibold mb-6">Articles</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            to={`/articles/${article.id}`}
            key={article.id}
            className="block p-4 rounded-lg shadow-lg hover:shadow-xl transition-all bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600">
              {article.description.slice(0, 100)}...
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;
