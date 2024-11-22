import { apiClient } from "./config";

export const sendMessage = async (token, chatId, message) => {
  try {
    const response = await apiClient.post(`/chat/${chatId}`, {
      content: message,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

export const getChatMessages = async (token, chatId) => {
  try {
    const response = await apiClient.get(`/chat/${chatId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching chat messages:", error);
    throw error;
  }
};

export const getUserProfile = async (token, userId = null) => {
    try {
      const url = userId ? `/users/${userId}` : "/users/me";
      const response = await apiClient.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching user profile:", error);
      throw error;
    }
  };