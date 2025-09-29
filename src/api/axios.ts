import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});

// interceptor untuk token auth
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `bearer ${token}`;
  }
  return config;
});

export default api;
