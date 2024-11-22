import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiAddArticle } from '../../services/resourses';
import Sidebar from '../../layouts/Sidebar3'; // Adjust the import path as necessary

const AdminAddArticle = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('depression');
    const [media, setMedia] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setMedia(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!title || !content || !description || !category || !media) {
            setError('All fields are required');
            return;
        }
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('media', media);

        try {
            setLoading(true);
            await apiAddArticle(formData);
            navigate('/resources'); // Redirect to resources page on success
        } catch (err) {
            setError('Failed to post the article. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />
            <div className="flex-1 p-6">
                <div className="max-w-xl mx-auto bg-white bg-opacity-60 rounded-lg shadow-lg backdrop-blur-sm p-6">
                    <h2 className="text-2xl text-indigo-900 font-semibold text-center mb-2">Post a New Article</h2>
                    {error && <div className="text-red-500 mb-2">{error}</div>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-lg text-indigo-900 font-medium">Title</label>
                            <input
                                type="text"
                                id="title"
                                className="w-full p-1 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-lg text-indigo-900 font-medium">Description</label>
                            <textarea
                                id="description"
                                className="w-full p-1 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 h-12"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="content" className="block text-lg text-indigo-900 font-medium">Content</label>
                            <textarea
                                id="content"
                                className="w-full p-1 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 h-16"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-lg text-indigo-900 font-medium">Category</label>
                            <select
                                id="category"
                                className="w-full p-1 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="depression">Depression</option>
                                <option value="anxiety">Anxiety</option>
                                <option value="stress">Stress</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="media" className="block text-lg text-indigo-900 font-medium">Media</label>
                            <input
                                type="file"
                                id="media"
                                className="w-full p-1 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className={`bg-indigo-900 text-white px-6 py-1 rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={loading}
                            >
                                {loading ? 'Posting...' : 'Post Article'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminAddArticle;
