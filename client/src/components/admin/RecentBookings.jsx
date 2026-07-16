import DashboardSection from "./DashboardSection";
import StatusBadge from "./StatusBadge";
import { CalendarCheck2 } from "lucide-react";

const RecentBookings = ({ bookings }) => {
  return (
    <DashboardSection
      title="Recent Bookings"
      icon={CalendarCheck2}
      action="View All"
    >
      {bookings.length === 0 ? (
        <div className="rounded-2xl bg-slate-900/40 py-12 text-center">
          <p className="text-slate-400">
            No recent bookings found.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700 text-left text-sm uppercase tracking-wider text-slate-400">
                <th className="pb-4">Booking ID</th>
                <th className="pb-4">Name</th>
                <th className="pb-4">City</th>
                <th className="pb-4">Katha</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr
                  key={booking._id}
                  className="
                    border-b
                    border-slate-800
                    transition-colors
                    hover:bg-slate-800/40
                  "
                >
                  <td className="py-5 font-medium text-amber-400">
                    {booking.bookingId}
                  </td>

                  <td>{booking.fullName}</td>

                  <td>{booking.city}</td>

                  <td>{booking.kathaType}</td>

                  <td>
                    <StatusBadge
                      status={booking.status}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </DashboardSection>
  );
};

export default RecentBookings;