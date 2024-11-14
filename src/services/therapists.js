import { apiClient } from "./config";


// Function to get all peer therapists
export const getAllPeerTherapists = async () => {
  try {
    const response = await apiClient.get('/peer-therapists');
    return response.data;
  } catch (error) {
    console.error("Error fetching all peer therapists:", error);
    throw error;
  }
};

export const getPeerTherapistById = async (id) => {
    try {
        const response = await apiClient.get(`/peer-therapist/${id}`);
        return response.data;
    } catch (error) {
        console.error("API Error fetching peer therapist by ID:", error.response || error);
        throw error;
    }
};


export const getAllProfessionalTherapists = async () => {
    try {
      const response = await apiClient.get('/professional-therapists');
      return response.data;
    } catch (error) {
      console.error("Error fetching all peer therapists:", error);
      throw error;
    }
  };
  
  export const getProfessionalTherapistById = async (id) => {
    try {
      const response = await apiClient.get(`/professional-therapist/${id}`);
      return response.data;
    } catch (error) {
      console.error("API Error fetching professional therapist by ID:", error.response || error);
      throw error;
    }
  };
  
