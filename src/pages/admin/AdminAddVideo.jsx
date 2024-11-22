import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiAddVideo } from '../../services/resourses';  // Import the API function
import Sidebar from '../../layouts/Sidebar3';  // Import Sidebar

const AdminAddVideo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('depression');
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setVideo(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description || !category || !video) {
            setError('All fields are required');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('video', video);

        try {
            setLoading(true);
            await apiAddVideo(formData);  // Make the API call
            navigate('/resources');  // Redirect to the resources page upon success
        } catch (err) {
            setError('Failed to post the video. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex">
            <Sidebar />  {/* Add Sidebar to the layout */}
            <div className="flex-1 p-12 bg-gray-100">
                <div className="max-w-lg mx-auto p-6 bg-white bg-opacity-40 backdrop-blur-lg rounded-lg shadow-lg">
                    <h2 className="text-2xl text-indigo-900 font-semibold text-center mb-6">Post a New Video</h2>
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-lg text-indigo-900 font-medium">Title</label>
                            <input
                                type="text"
                                id="title"
                                className="w-full p-2 text-sm border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-lg text-indigo-900 font-medium">Description</label>
                            <textarea
                                id="description"
                                className="w-full p-2 text-sm border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 h-20"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-lg text-indigo-900 font-medium">Category</label>
                            <select
                                id="category"
                                className="w-full p-2 text-sm border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="depression">Depression</option>
                                <option value="anxiety">Anxiety</option>
                                <option value="stress">Stress</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="video" className="block text-lg text-indigo-900 font-medium">Video</label>
                            <input
                                type="file"
                                id="video"
                                className="w-full p-2 text-sm border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className={`bg-indigo-900 text-white px-4 py-2 rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={loading}
                            >
                                {loading ? 'Posting...' : 'Post Video'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminAddVideo;
