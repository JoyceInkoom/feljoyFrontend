import { apiClient } from "./config";

export const apiUserSignup =async (payload)=>{
    return await apiClient.post("/users/register", payload);
};

export const apiUserLogin =async (payload)=>{
    return await apiClient.post("/users/login", payload);
};

