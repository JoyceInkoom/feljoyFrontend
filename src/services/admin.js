import { apiClient } from "./config";

export const getAllUsers = async () => {
    try {
      const response = await apiClient.get('/users');
      return response.data;
    } catch (error) {
      console.error("Error fetching all users:", error);
      throw error;
    }
  };

  export const apiPostAssessment = async (formData) => {
    try {
      const response = await apiClient.post(
        "/admin/assessment",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (error) {
      console.error("Error posting assessment:", error);
      throw error;
    }
  };
  
  export const getAllResponses = async () => {
    try {
      const response = await apiClient.get('/assessment/responses');
      return response.data;
    } catch (error) {
      console.error("Error fetching all users:", error);
      throw error;
    }
  };

  export const updateAssessmentStatus = async (id, status) => {
    try {
      const response = await apiClient.patch(`/assessment/${id}`, {
        status,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating assessment status:", error);
      throw error;
    }
  };

  export const getCertificate = async () => {
    try {
      const response = await apiClient.get('/therapist/certification');
      return response.data;
    } catch (error) {
      console.error("Error fetching certificates:", error);
      throw error;
    }
  };

  export const updateCertificateStatus = async (id, status) => {
    try {
      const response = await apiClient.patch(`/therapist/${id}`, {
        status,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating therapist status:", error);
      throw error;
    }
  };