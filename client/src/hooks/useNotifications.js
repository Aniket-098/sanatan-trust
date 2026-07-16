import { useEffect, useState } from "react";

import { getNotifications } from "../api/notificationApi";

const useNotifications = () => {
  const [notifications, setNotifications] =
    useState([]);

  const [unreadCount, setUnreadCount] =
    useState(0);

  const [loading, setLoading] =
    useState(true);

  const loadNotifications =
    async () => {
      try {
        const data =
          await getNotifications();

        setNotifications(
          data.notifications
        );

        setUnreadCount(
          data.unreadCount
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    loadNotifications();

    const interval =
      setInterval(
        loadNotifications,
        30000
      );

    return () =>
      clearInterval(interval);
  }, []);

  return {
    notifications,
    unreadCount,
    loading,
    refresh:
      loadNotifications,
  };
};

export default useNotifications;