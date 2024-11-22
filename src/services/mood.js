import { apiClient } from "./config";

export const apiPostMood = async (payload) => {
    const token = localStorage.getItem("authToken");
  
    return await apiClient.post("/mood", payload, {
        headers: { Authorization: `Bearer ${token}` },
    });
  };

  export const apiGetMood = async () => {
    try {
      const response = await apiClient.get('/moodlog/me');
      return response.data;
    } catch (error) {
      console.error("Error fetching all books:", error);
      throw error;
    }
  };

  export const getMoodById = async (id) => {
    try {
        const response = await apiClient.get(`/moodlogs/${id}`);
        return response.data;
    } catch (error) {
        console.error("API Error fetching book by ID:", error.response || error);
        throw error;
    }
};



export const getMoodLogs = async (userId) => {
  try {
    const response = await apiClient.get(`/moodlogs/${userId}`);
    return response.data.weeklyMoodLogs;
  } catch (error) {
    console.error("Error fetching mood logs:", error);
    throw error;
  }
};

export const getLoggedInTherapistId = async () => {
  try {
    const response = await apiClient.get("/users/me");
    return response.data.id;
  } catch (error) {
    console.error("Error fetching logged-in therapist ID:", error.response || error);
    throw error;
  }
};