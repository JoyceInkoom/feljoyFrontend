import { apiClient } from "./config";

// Fetch the user profile
export const apiUserProfile = async () => {
  return await apiClient.get("/users/me"); // No need to manually set headers here
};

// Update the user profile
export const apiUpdateProfile = async (formData) => {
  return await apiClient.patch("/users/me", formData); // Again, no need to manually set headers
};
