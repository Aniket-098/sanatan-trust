import API from "./adminApi";

export const getBookings = () =>
  API.get("/bookings");

export const updateBookingStatus = (
  id,
  status
) =>
  API.patch(
    `/bookings/${id}/status`,
    {
      status,
    }
  );

export const deleteBooking = (id) =>
  API.delete(`/bookings/${id}`);

export const exportBookings = () =>
  API.get("/bookings/export", {
    responseType: "blob",
  });