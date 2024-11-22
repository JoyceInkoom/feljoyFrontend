import { apiClient } from "./config";

export const apiCreateCelebration = async (celebration) => {
    try {
      const response = await apiClient.post('/celebration', celebration);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  export const apiGetCelebrations = async () => {
    const response = await apiClient.get('/celebrations');
    return response;
  };
  
  export const apiPostLike = async (celebrationId) => {
    const response = await apiClient.post(`/${celebrationId}/like`);
    return response;
  };