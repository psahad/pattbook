import {post} from "./networkUtils";

// const BASE_URL = process.env.API_BASE_URL;
// const BASE_URL = "http://localhost:5000";
const BASE_URL = "https://pattbook.onrender.com";

// Register user
export const signupUser = (payload) => {
  const isAuthenticated = false;
  const multiPathConfig = false;
  const URL = `/api/user`;
  return post(BASE_URL, URL, payload, isAuthenticated, multiPathConfig);
};

// Login user
export const loginUser = (payload) => {
  const isAuthenticated = false;
  const multiPathConfig = false;
  const URL = `/api/user/login`;
  return post(BASE_URL, URL, payload, isAuthenticated, multiPathConfig);
};

// create activity
export const createActivity = (payload) => {
  const isAuthenticated = true;
  const multiPathConfig = false;
  const URL = `/api/activity`;
  return post(BASE_URL, URL, payload, isAuthenticated, multiPathConfig);
};
