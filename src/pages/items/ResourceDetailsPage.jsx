import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticlesById, getVideoById, getBookById } from '../../services/resourses';

const ResourceDetailsPage = () => {
  const { id, type } = useParams();
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        setLoading(true);
        let resourceData;
        if (type === 'article') {
          resourceData = await getArticlesById(id);
        } else if (type === 'video') {
          resourceData = await getVideoById(id);
        } else if (type === 'book') {
          resourceData = await getBookById(id);
        }
        setResource(resourceData);
        setLoading(false);
      } catch (err) {
        setError('Error fetching resource details.');
        setLoading(false);
      }
    };

    fetchResource();
  }, [id, type]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-pink-500 mb-4">{resource.title}</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-gray-600 mb-4">{resource.description}</p>
        {/* Displaying content for each type of resource */}
        {type === 'article' && <div>{resource.content}</div>}
        {type === 'video' && (
          <div>
            <video controls>
              <source src={resource.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        {type === 'book' && (
          <div>
            <a href={resource.bookUrl} target="_blank" rel="noopener noreferrer">
              Download Ebook
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceDetailsPage;
