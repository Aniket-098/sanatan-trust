import { useEffect, useState } from "react";

import AdminLayout from "../components/layout/AdminLayout";
import StatsCard from "../components/admin/StatsCard";
import StatusBadge from "../components/admin/StatusBadge";
import BookingStatusChart from "../components/admin/charts/BookingStatusChart";
import DonationChart from "../components/admin/charts/DonationChart";

import { getDashboard } from "../api/adminApi";

import {
  CalendarDays,
  Clock3,
  HeartHandshake,
  IndianRupee,
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

  const dashboardStats = [
    {
      title: "Total Bookings",
      value: stats?.totalBookings || 0,
      icon: CalendarDays,
      color: "text-blue-400",
    },

    {
      title: "Pending Bookings",
      value: stats?.pending || 0,
      icon: Clock3,
      color: "text-yellow-400",
    },

    {
      title: "Total Donations",
      value: `₹ ${(stats?.totalDonationAmount || 0).toLocaleString("en-IN")}`,
      icon: HeartHandshake,
      color: "text-pink-400",
    },

    {
      title: "Today's Donations",
      value: `₹ ${(stats?.todayDonationAmount || 0).toLocaleString("en-IN")}`,
      icon: IndianRupee,
      color: "text-green-400",
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-10">
        {/* Stats */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((item) => (
            <StatsCard key={item.title} {...item} />
          ))}
        </div>

        {/* Charts */}

        <div className="grid gap-6 lg:grid-cols-2">
          <BookingStatusChart stats={stats} />

          <DonationChart donations={recentDonations} />
        </div>

        {/* Recent Bookings */}

        <div className="rounded-2xl border border-slate-700 bg-[#111827] p-6">
          <h2 className="mb-6 text-2xl font-bold">Recent Bookings</h2>

          {recentBookings.length === 0 ? (
            <p className="text-slate-400">No bookings found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700 text-left">
                    <th className="pb-4">Booking ID</th>

                    <th className="pb-4">Name</th>

                    <th className="pb-4">City</th>

                    <th className="pb-4">Katha</th>

                    <th className="pb-4">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {recentBookings.map((booking) => (
                    <tr key={booking._id} className="border-b border-slate-800">
                      <td className="py-4">{booking.bookingId}</td>

                      <td>{booking.fullName}</td>

                      <td>{booking.city}</td>

                      <td>{booking.kathaType}</td>

                      <td>
                        <StatusBadge status={booking.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Recent Donations */}

        <div className="rounded-2xl border border-slate-700 bg-[#111827] p-6">
          <h2 className="mb-6 text-2xl font-bold">Recent Donations</h2>

          {recentDonations.length === 0 ? (
            <p className="text-slate-400">No donations found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700 text-left">
                    <th className="pb-4">Donor</th>

                    <th className="pb-4">Amount</th>

                    <th className="pb-4">Date</th>

                    <th className="pb-4">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {recentDonations.map((donation) => (
                    <tr
                      key={donation._id}
                      className="border-b border-slate-800"
                    >
                      <td className="py-4">{donation.donorName}</td>

                      <td className="font-bold text-yellow-400">
                        ₹ {donation.amount.toLocaleString("en-IN")}
                      </td>

                      <td>
                        {new Date(donation.createdAt).toLocaleDateString(
                          "en-IN",
                        )}
                      </td>

                      <td>
                        <StatusBadge status={donation.paymentStatus} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
