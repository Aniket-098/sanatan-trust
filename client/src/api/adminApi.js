import axios from "axios";
import { getToken } from "../components/utils/auth.js";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1/admin",
});

/* ---------- Request Interceptor ---------- */

API.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

/* ---------- APIs ---------- */

export const loginAdmin = (credentials) =>
  API.post("/login", credentials);

export const verifyAdmin = () =>
  API.get("/me");

export const getDashboard = () =>
  API.get("/dashboard");

export default API;