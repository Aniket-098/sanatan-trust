import StatsCard from "./StatsCard";

import {
  CalendarDays,
  Clock3,
  HeartHandshake,
  IndianRupee,
} from "lucide-react";

const DashboardStats = ({ stats }) => {
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
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((item) => (
        <StatsCard
          key={item.title}
          {...item}
        />
      ))}
    </div>
  );
};

export default DashboardStats;