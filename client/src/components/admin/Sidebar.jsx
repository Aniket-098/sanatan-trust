import {
  HeartHandshake,
  LayoutDashboard,
  BookOpen,
  LogOut,
  X,
} from "lucide-react";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import { removeToken } from "../utils/auth";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
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
  ];

  const navigate = useNavigate();

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
          onClick={() =>
            setSidebarOpen(false)
          }
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          min-h-screen
          w-72
          border-r
          border-slate-700
          bg-[#111827]
          transition-transform
          duration-300

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:static
          lg:translate-x-0
        `}
      >
        {/* Mobile Close Button */}

        <div className="flex justify-end p-4 lg:hidden">
          <button
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <X size={24} />
          </button>
        </div>

        {/* Logo */}

        <div className="px-8 pb-8">
          <h1 className="text-2xl font-bold text-amber-400">
            Sanatan Admin
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Management Portal
          </p>
        </div>

        {/* Navigation */}

        <nav className="px-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.title}
                to={item.path}
                onClick={() =>
                  setSidebarOpen(false)
                }
                className={({
                  isActive,
                }) =>
                  `
                    mb-2
                    flex
                    items-center
                    gap-4
                    rounded-xl
                    px-5
                    py-4
                    transition

                    ${
                      isActive
                        ? "bg-slate-800 text-amber-400"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }
                  `
                }
              >
                <Icon size={20} />

                {item.title}
              </NavLink>
            );
          })}

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