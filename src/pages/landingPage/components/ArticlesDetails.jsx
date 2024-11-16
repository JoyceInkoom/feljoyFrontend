import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesById } from "../../../services/resourses";

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await getArticlesById(id);
        setArticle(data);
      } catch (err) {
        setError("Failed to load article details. Please try again later.");
        console.error(err);
      }
    };

    fetchArticle();
  }, [id]);

  if (error) return <p className="text-red-500">{error}</p>;

  if (!article) return <p>Loading...</p>;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-semibold mb-6">{article.title}</h1>
      <p className="text-gray-700">{article.content}</p>
    </div>
  );
};

export default ArticleDetails;
