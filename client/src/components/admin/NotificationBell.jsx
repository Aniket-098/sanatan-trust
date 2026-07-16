import { useState, useEffect, useRef } from "react";
import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";

import {
  markAllNotificationsRead,
  markNotificationRead,
} from "../../api/notificationApi";
import useNotifications from "../../hooks/useNotifications";
import formatRelativeTime from "../utils/formatRelativeTime";

const NotificationBell = () => {
  const navigate = useNavigate();

  const { notifications, unreadCount, refresh } = useNotifications();

  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && 
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown", 
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown", 
        handleClickOutside
      );
    };
  }, []);

  const handleNotificationClick = async (notification) => {
    if (!notification.isRead) {
      await markNotificationRead(notification._id);
    }

    refresh();

    setOpen(false);

    navigate(notification.link);
  };

  const handleReadAll = async () => {
    await markAllNotificationsRead();

    refresh();
  };

  return (
  <div
    className="relative"
    ref={dropdownRef}
  >
    {/* Bell */}

    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      onClick={() => setOpen(!open)}
      className="
        relative
        rounded-xl
        p-3
        transition
        hover:bg-slate-800
      "
    >
      <Bell size={22} />

      {unreadCount > 0 && (
        <span
          className="
            absolute
            -right-1
            -top-1
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-full
            bg-red-500
            text-xs
            font-bold
            text-white
          "
        >
          {unreadCount > 9 ? "9+" : unreadCount}
        </span>
      )}
    </motion.button>

    {/* Dropdown */}

    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: -10,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -10,
            scale: 0.96,
          }}
          transition={{
            duration: 0.18,
            ease: "easeOut",
          }}
          className="
            absolute
            right-0
            mt-3
            w-96
            overflow-hidden
            rounded-2xl
            border
            border-slate-700
            bg-[#111827]
            shadow-2xl
          "
        >
          {/* Header */}

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-slate-700
              px-5
              py-4
            "
          >
            <h3 className="font-semibold text-white">
              Notifications
            </h3>

            <button
              onClick={handleReadAll}
              disabled={unreadCount === 0}
              className={`
                text-sm
                transition

                ${
                  unreadCount === 0
                    ? "cursor-not-allowed text-slate-600"
                    : "text-amber-400 hover:underline"
                }
              `}
            >
              Mark all read
            </button>
          </div>

          {/* Empty State */}

          {notifications.length === 0 ? (
            <div className="flex flex-col items-center px-6 py-10 text-center">
              <Bell
                size={42}
                className="mb-4 text-slate-600"
              />

              <h3 className="font-semibold text-white">
                You're all caught up!
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                New bookings and donations will
                appear here.
              </p>
            </div>
          ) : (
            notifications.map((notification) => (
              <button
                key={notification._id}
                onClick={() =>
                  handleNotificationClick(notification)
                }
                className="
                  flex
                  w-full
                  items-start
                  gap-4
                  border-b
                  border-slate-700
                  px-5
                  py-4
                  text-left
                  transition
                  hover:bg-slate-800
                "
              >
                <div
                  className={`
                    mt-2
                    h-3
                    w-3
                    rounded-full

                    ${
                      notification.isRead
                        ? "bg-slate-600"
                        : "bg-green-500"
                    }
                  `}
                />

                <div className="flex-1">
                  <h4 className="font-medium text-white">
                    {notification.title}
                  </h4>

                  <p className="mt-1 text-sm text-slate-400">
                    {notification.message}
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    {formatRelativeTime(
                      notification.createdAt
                    )}
                  </p>
                </div>
              </button>
            ))
          )}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);
};

export default NotificationBell;
