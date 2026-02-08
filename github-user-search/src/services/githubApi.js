import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: API_KEY
    ? { Authorization: `token ${API_KEY}` }
    : {},
});

export default githubApi;
