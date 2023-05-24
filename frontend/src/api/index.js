import {put, post, get, del} from "./networkUtils";

// const BASE_URL = process.env.API_BASE_URL;
const BASE_URL = "https://pattbook.onrender.com";

// create activity
export const signupUser = (payload) => {
  const isAuthenticated = false;
  const multiPathConfig = false;
  const URL = `/api/user`;
  console.log("BASE_URL", BASE_URL);
  return post(BASE_URL, URL, payload, isAuthenticated, multiPathConfig);
};

// create activity
export const createActivity = (payload) => {
  const isAuthenticated = true;
  const multiPathConfig = false;
  const URL = `/api/activity`;
  console.log("BASE_URL", BASE_URL);
  return post(BASE_URL, URL, payload, isAuthenticated, multiPathConfig);
};
