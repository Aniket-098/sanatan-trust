import StatusBadge from "./StatusBadge";
import BookingActions from "./BookingActions";

const BookingsTable = ({ bookings, onStatusChange, onView, onDelete }) => {
  if (!bookings.length) {
    return <p className="text-slate-400">No bookings found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700 text-left">
            <th className="pb-4">Booking ID</th>

            <th className="pb-4">Name</th>

            <th className="pb-4">Phone</th>

            <th className="pb-4">City</th>

            <th className="pb-4">Katha</th>

            <th className="pb-4">Status</th>

            <th className="pb-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id} className="border-b border-slate-800">
              <td className="py-4">{booking.bookingId}</td>

              <td>{booking.fullName}</td>

              <td>{booking.phone}</td>

              <td>{booking.city}</td>

              <td>{booking.kathaType}</td>

              <td>
                <StatusBadge status={booking.status} />
              </td>

              <td>
                <BookingActions
                  booking={booking}
                  onStatusChange={onStatusChange}
                  onView={onView}
                  onDelete={onDelete}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsTable;
