import axiosInstance from "axios";

const axios = axiosInstance.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default axios;
