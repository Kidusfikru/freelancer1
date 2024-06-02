// src/api.js
import axios from "axios";

const JOBS_API_URL = "http://localhost:8001/api";
const FREELANCERS_API_URL = "http://localhost:8002/api";

const getToken = () => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("jwt="));
  return token ? token.split("=")[1] : null;
};

export const fetchJobs = async () => {
  try {
    const token = getToken();
    const response = await axios.get(`${JOBS_API_URL}/jobs`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      console.error("Request data:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    throw error;
  }
};

export const fetchFreelancers = async () => {
  try {
    const token = getToken();
    const response = await axios.get(`${FREELANCERS_API_URL}/freelancers`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching freelancers:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      console.error("Request data:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    throw error;
  }
};
