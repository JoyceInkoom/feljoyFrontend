import { apiClient } from "./config";

// Fetch the assessment
export const apiUserGetAssessment = async () => {
    return await apiClient.get("/user/assessment"); 
  };
  
 // Post the user response
export const apiUserPostResponse = async (formData) => {
  try {
    const response = await apiClient.post(
      "/assessment/response",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error posting user response:", error);
    throw error;
  }
};
