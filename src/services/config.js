import axios from "axios";

// Axios client setup
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Base URL for the API
  headers: {
    "Content-Type": "application/json", // Content type set to JSON for API requests
  },
});

// Interceptor to dynamically add Authorization header
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Retrieve token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach the token to request headers
      console.log("Authorization header set:", config.headers.Authorization); // For debugging purposes
    }
    return config; // Proceed with the request
  },
  (error) => Promise.reject(error) // Handle request error
);
