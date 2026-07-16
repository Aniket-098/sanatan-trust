import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

const DashboardHeader = ({ onRefresh }) => {
  const hour = new Date().getHours();

  let greeting = "Welcome";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        mb-10
        flex
        flex-col
        gap-6
        rounded-3xl
        border
        border-slate-700/70
        bg-gradient-to-r
        from-[#111827]
        via-[#1E293B]
        to-[#111827]
        p-8
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      <div>
        <h1 className="text-4xl font-bold text-white">
          {greeting}, Admin 👋
        </h1>

        <p className="mt-3 max-w-xl text-slate-400">
          Welcome back. Here's a quick overview of today's
          bookings, donations and overall trust activity.
        </p>
      </div>

      <button
        onClick={onRefresh}
        className="
          flex
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-amber-500
          px-6
          py-4
          font-semibold
          text-black
          transition-all
          hover:scale-105
          hover:bg-amber-400
        "
      >
        <RefreshCw size={20} />

        Refresh Dashboard
      </button>
    </motion.div>
  );
};

export default DashboardHeader;