import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

export const createDonationOrder = (amount) =>
  API.post("/donations/create-order", {
    amount,
  });

export const verifyDonation = (paymentData) =>
  API.post("/donations/verify", paymentData);
