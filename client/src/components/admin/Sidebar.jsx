import {
  HeartHandshake,
  LayoutDashboard,
  BookOpen,
  LogOut,
  X,
  ShieldCheck,
  Settings2,
} from "lucide-react";

import { GiTempleGate } from "react-icons/gi";

import { NavLink, useNavigate } from "react-router-dom";

import { removeToken } from "../utils/auth";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const items = [
    {
      icon: LayoutDashboard,
      title: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      icon: BookOpen,
      title: "Bookings",
      path: "/admin/bookings",
    },
    {
      icon: HeartHandshake,
      title: "Donations",
      path: "/admin/donations",
    },
    {
      icon: Settings2,
      title: "Settings",
      path: "/admin/settings",
    },
  ];

  const navigate = useNavigate();

  const lastLogin = localStorage.getItem("lastLogin");

const formattedLastLogin = lastLogin
  ? new Date(lastLogin).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    })
  : "First Login";

  const handleLogout = () => {
    removeToken();

    navigate("/admin/login", {
      replace: true,
    });
  };

  return (
    <>
      {/* Overlay */}

      {sidebarOpen && (
        <div
          className="
            fixed
            inset-0
            z-40
            bg-black/60
            lg:hidden
          "
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          h-screen
          w-72
          overflow-y-auto
          border-r
          border-slate-700
          bg-[#111827]
          transition-transform
          duration-300

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

          lg:translate-x-0
        `}
      >
        {/* Mobile Close Button */}

        <div className="flex justify-end p-4 lg:hidden">
          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Logo */}

        <div className="px-6 pt-5 pb-8">
          <div className="flex items-center gap-4">
            <div
              className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-br
        from-amber-400
        to-orange-500
        shadow-lg
      "
            >
              <GiTempleGate size={28} className="text-black" />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-white">Sanatan Trust</h1>

              <p className="text-sm text-amber-400">Admin Portal</p>
            </div>
          </div>
        </div>

        {/* Navigation */}

        <nav className="px-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.title}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `
    group
    mb-3
    flex
    items-center
    gap-4
    rounded-2xl
    px-5
    py-4
    transition-all
    duration-300

    ${
      isActive
        ? "bg-gradient-to-r from-amber-500/20 to-orange-500/10 text-amber-400 border border-amber-500/20"
        : "text-slate-300 hover:bg-slate-800 hover:translate-x-1 hover:text-white"
    }
  `
                }
              >
                <Icon size={20} />

                {item.title}
              </NavLink>
            );
          })}
          <div
  className="
    mt-12
    rounded-2xl
    border
    border-slate-700
    bg-slate-900/40
    p-5
  "
>
  <div className="flex items-center gap-4">
    <div
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        bg-amber-500/20
      "
    >
      <ShieldCheck
        className="text-amber-400"
        size={22}
      />
    </div>

    <div>
      <h3 className="font-semibold text-white">
        Administrator
      </h3>

      <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">
        Last Login
      </p>

      <p className="mt-1 text-sm font-medium text-amber-400">
        {formattedLastLogin}
      </p>
    </div>
  </div>
</div>

          

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="
              mt-8
              flex
              w-full
              items-center
              gap-4
              rounded-xl
              px-5
              py-4
              text-red-400
              transition
              hover:bg-red-500/10
            "
          >
            <LogOut size={20} />
            Logout
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
