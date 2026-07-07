import API from "./adminApi";

/* ---------- Get Donations ---------- */

export const getDonations = () =>
  API.get("/donations");

/* ---------- Delete Donation ---------- */

export const deleteDonation = (id) =>
  API.delete(`/donations/${id}`);

/* ---------- Export Donation ---------- */

export const exportDonations = () =>
  API.get("/donations/export", {
    responseType: "blob",
  });