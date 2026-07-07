import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const createBooking = async (bookingData) => {
  return await API.post("/bookings", bookingData);
};

export default API;