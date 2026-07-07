import { useState } from "react";

import Sidebar from "../admin/Sidebar";
import Topbar from "../admin/Topbar";

const AdminLayout = ({ children, topbarActions, }) => {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">

      <div className="flex">

        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <div className="flex-1">

          <Topbar
            setSidebarOpen={setSidebarOpen}
            actions={topbarActions}
          />

          <main className="p-4 md:p-8">
            {children}
          </main>

        </div>

      </div>

    </div>
  );
};

export default AdminLayout;