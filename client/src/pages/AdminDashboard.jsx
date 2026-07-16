import { useEffect, useState } from "react";

import AdminLayout from "../components/layout/AdminLayout";
import StatsCard from "../components/admin/StatsCard";
import StatusBadge from "../components/admin/StatusBadge";
import DashboardCharts from "../components/admin/DashboardCharts";
import DashboardHeader from "../components/admin/DashboardHeader";
import DashboardSection from "../components/admin/DashboardSection";
import DashboardStats from "../components/admin/DashboardStats";
import RecentBookings from "../components/admin/RecentBookings";
import RecentDonations from "../components/admin/RecentDonations";

import { getDashboard } from "../api/adminApi";

import {
  Loader2,
} from "lucide-react";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    pending: 0,
    approved: 0,
    rejected: 0,
    totalBookings: 0,
    totalDonationAmount: 0,
    todayDonationAmount: 0,
  });

  const [recentBookings, setRecentBookings] = useState([]);

  const [recentDonations, setRecentDonations] = useState([]);

  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const { data } = await getDashboard();

        setStats(data.stats);

        setRecentBookings(data.recentBookings);

        setRecentDonations(data.recentDonations);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-10">

        <DashboardHeader
          onRefresh={() => window.location.reload()}
        />

        {/* Stats */}

        <DashboardStats stats={stats} />

        {/* Charts */}

        {/* Charts */}

        <DashboardCharts
          stats={stats}
          donations={recentDonations}
        />

        {/* Recent Bookings */}

        <RecentBookings bookings={recentBookings} />

        {/* Recent Donations */}

        <RecentDonations donations={recentDonations} />
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
