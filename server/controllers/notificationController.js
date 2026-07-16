import Notification from "../models/Notification.js";

export const getNotifications = async (req, res) => {
  try {
    const notifications =
      await Notification.find()
        .sort({ createdAt: -1 })
        .limit(20);

    const unreadCount =
      await Notification.countDocuments({
        isRead: false,
      });

    res.status(200).json({
      notifications,
      unreadCount,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch notifications.",
    });
  }
};

export const markAsRead = async (req, res) => {
  try {
    await Notification.findByIdAndUpdate(
      req.params.id,
      {
        isRead: true,
      }
    );

    res.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update notification.",
    });
  }
};

export const markAllAsRead = async (
  req,
  res
) => {
  try {
    await Notification.updateMany(
      {
        isRead: false,
      },
      {
        isRead: true,
      }
    );

    res.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message:
        "Failed to update notifications.",
    });
  }
};