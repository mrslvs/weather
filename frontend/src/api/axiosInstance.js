import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost/weather",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default axiosInstance;
