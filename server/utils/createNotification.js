import Notification from "../models/Notification.js";

const createNotification = async ({
  type,
  title,
  message,
  link,
}) => {
  try {
    await Notification.create({
      type,
      title,
      message,
      link,
    });
  } catch (error) {
    console.error(
      "Failed to create notification:",
      error
    );
  }
};

export default createNotification;