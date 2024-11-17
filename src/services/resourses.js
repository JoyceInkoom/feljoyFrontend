import { apiClient } from "./config";

export const getAllArticles = async () => {
    try {
      const response = await apiClient.get('/resources/articles');
      return response.data;
    } catch (error) {
      console.error("Error fetching all articles:", error);
      throw error;
    }
  };
  
  export const getArticlesById = async (id) => {
      try {
          const response = await apiClient.get(`/resources/article/${id}`);
          return response.data;
      } catch (error) {
          console.error("API Error fetching article by ID:", error.response || error);
          throw error;
      }
  };

  export const getAllVideos = async () => {
    try {
      const response = await apiClient.get('/resources/videos');
      return response.data;
    } catch (error) {
      console.error("Error fetching all videos:", error);
      throw error;
    }
  };
  
  export const getVideoById = async (id) => {
      try {
          const response = await apiClient.get(`/resources/video/${id}`);
          return response.data;
      } catch (error) {
          console.error("API Error fetching video by ID:", error.response || error);
          throw error;
      }
  };

  export const getAllEbooks = async () => {
    try {
      const response = await apiClient.get('/resources/books');
      return response.data;
    } catch (error) {
      console.error("Error fetching all books:", error);
      throw error;
    }
  };
  
  export const getBookById = async (id) => {
      try {
          const response = await apiClient.get(`/resources/book/${id}`);
          return response.data;
      } catch (error) {
          console.error("API Error fetching book by ID:", error.response || error);
          throw error;
      }
  };

  export const apiAddArticle = async (payload) => {
    const token = localStorage.getItem("authToken");

    return await apiClient.post("/resources/article", payload, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const apiAddVideo = async (payload) => {
  const token = localStorage.getItem("authToken");

  return await apiClient.post("/resources/video", payload, {
      headers: { Authorization: `Bearer ${token}` },
  });
};

export const apiAddEbook = async (payload) => {
  const token = localStorage.getItem("authToken");

  return await apiClient.post("/resources/book", payload, {
      headers: { Authorization: `Bearer ${token}` },
  });
};