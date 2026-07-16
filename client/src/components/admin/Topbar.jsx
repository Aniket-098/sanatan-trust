import {
  Menu,
  Bell,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

import { useLocation } from "react-router-dom";

import NotificationBell from "./NotificationBell";

const Topbar = ({ setSidebarOpen, actions }) => {
  const location = useLocation();

  const pageInfo = {
    "/admin/dashboard": {
      title: "Dashboard",
    },

    "/admin/bookings": {
      title: "Bookings",
    },

    "/admin/donations": {
      title: "Donations",
    },
  };

  const currentPage = pageInfo[location.pathname] || {
    title: "Admin",
  };

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header
      className="
        sticky
        top-0
        z-30
        border-b
        border-slate-700/70
        bg-[#111827]/90
        px-6
        py-5
        backdrop-blur-xl
      "
    >
      <div className="flex items-center justify-between">

        {/* Left */}

        <div className="flex items-center gap-4">

          <button
            onClick={() => setSidebarOpen(true)}
            className="
              rounded-xl
              p-2
              transition
              hover:bg-slate-800
              lg:hidden
            "
          >
            <Menu size={24} />
          </button>

          <div>

            <h1 className="text-3xl font-bold text-white">
              {currentPage.title}
            </h1>

            <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">

              <CalendarDays size={16} />

              {today}

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">
          <NotificationBell />
          {actions}


          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-700
              bg-slate-800
              px-4
              py-2
            "
          >
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-amber-500/15
              "
            >
              <ShieldCheck
                size={22}
                className="text-amber-400"
              />
            </div>

            <div>

              <h3 className="font-semibold text-white">
                Administrator
              </h3>

              <p className="text-xs text-green-400">
                ● Online
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Topbar;