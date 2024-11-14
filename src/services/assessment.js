import { apiClient } from "./config";

// Fetch the assessment
export const apiUserGetAssessment = async () => {
    return await apiClient.get("/user/assessment"); 
  };
  
  // Post the user response
  export const apiUserPostResponse = async (formData) => {
    return await apiClient.post("/user/assessment/response", formData); 
  };