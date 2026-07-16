import BookingStatusChart from "./charts/BookingStatusChart";
import DonationChart from "./charts/DonationChart";

const DashboardCharts = ({
  stats,
  donations,
}) => {
  return (
    <div className="grid gap-6 lg:grid-cols-2">

      <BookingStatusChart
        stats={stats}
      />

      <DonationChart
        donations={donations}
      />

    </div>
  );
};

export default DashboardCharts;