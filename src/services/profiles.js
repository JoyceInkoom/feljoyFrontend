import { apiClient } from "./config";

// Fetch the user profile
export const apiUserProfile = async () => {
  return await apiClient.get("/users/me"); // No need to manually set headers here
};

// Update the user profile
export const apiUpdateProfile = async (formData) => {
  try {
    const response = await apiClient.patch('/users/me', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};