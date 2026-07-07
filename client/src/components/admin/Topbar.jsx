import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

const Topbar = ({ setSidebarOpen, actions }) => {
  const location = useLocation();

  const pageInfo = {
    "/admin/dashboard": {
      title: "Dashboard",
      subtitle: "Welcome back, Admin",
    },

    "/admin/bookings": {
      title: "Bookings",
      subtitle: "Manage all booking requests.",
    },

    "/admin/donations": {
      title: "Donations",
      subtitle: "Manage all donations.",
    },
  };

  const currentPage = pageInfo[location.pathname] || {
    title: "Admin",
    subtitle: "",
  };

  return (
    <header
      className="
        flex
        items-center
        justify-between
        border-b
        border-slate-700
        bg-[#111827]
        px-4
        py-5
        md:px-8
      "
    >
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="
      rounded-lg
      p-2
      transition
      hover:bg-slate-800
      lg:hidden
    "
        >
          <Menu size={24} />
        </button>

        <div>
          <h2 className="text-2xl font-bold">{currentPage.title}</h2>

          <p className="text-slate-400">{currentPage.subtitle}</p>
        </div>
      </div>

      {/* Right Side */}

      <div>{actions}</div>
    </header>
  );
};

export default Topbar;
