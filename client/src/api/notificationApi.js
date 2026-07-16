import API from "./adminApi";

export const getNotifications = async () => {
  const { data } = await API.get("/notifications");
  return data;
};

export const markNotificationRead = async (id) => {
  await API.patch(`/notifications/${id}/read`);
};

export const markAllNotificationsRead = async () => {
  await API.patch("/notifications/read-all");
};