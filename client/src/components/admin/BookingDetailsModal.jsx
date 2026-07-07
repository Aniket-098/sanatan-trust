import {
  X,
  Printer,
  MapPin,
  MessageSquare,
} from "lucide-react";

import StatusBadge from "./StatusBadge";

const BookingDetailsModal = ({
  booking,
  onClose,
}) => {
  if (!booking) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        overflow-y-auto
        bg-black/70
        p-4
        md:p-6
      "
    >
      <div
        className="
          mx-auto
          my-8
          w-full
          max-w-4xl
          rounded-3xl
          border
          border-slate-700
          bg-[#111827]
          p-8
          shadow-2xl
        "
      >
        {/* Header */}

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Booking Details
            </h2>

            <p className="mt-2 text-slate-400">
              Complete information about this booking.
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              rounded-xl
              p-2
              transition
              hover:bg-slate-700
            "
          >
            <X className="text-white" />
          </button>
        </div>

        {/* Booking ID */}

        <div className="mb-8 rounded-2xl bg-slate-800 p-6">
          <p className="text-sm text-slate-400">
            Booking ID
          </p>

          <h3 className="mt-2 font-mono text-3xl font-bold tracking-wider text-amber-400">
            {booking.bookingId}
          </h3>
        </div>

        {/* Information */}

        <div className="grid gap-6 md:grid-cols-2">
          <Info
            label="Full Name"
            value={booking.fullName}
          />

          <Info
            label="Phone Number"
            value={booking.phone}
          />

          <Info
            label="Email Address"
            value={
              booking.email || "Not Provided"
            }
          />

          <Info
            label="City"
            value={booking.city}
          />

          <Info
            label="State"
            value={booking.state}
          />

          <Info
            label="Katha Type"
            value={booking.kathaType}
          />

          <Info
            label="Preferred Date"
            value={new Date(
              booking.date
            ).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          />

          <Info
            label="Preferred Time"
            value={
              booking.time || "Not Specified"
            }
          />

          <Info
            label="Expected Audience"
            value={
              booking.audience ||
              "Not Specified"
            }
          />

          <Info
            label="Booked On"
            value={new Date(
              booking.createdAt
            ).toLocaleString("en-IN")}
          />
        </div>

        {/* Address */}

        <div className="mt-8">
          <div className="mb-3 flex items-center gap-2">
            <MapPin
              size={18}
              className="text-amber-400"
            />

            <p className="font-medium text-slate-300">
              Address
            </p>
          </div>

          <div className="rounded-xl bg-slate-800 p-5 text-white leading-7">
            {booking.address ||
              "No address provided."}
          </div>
        </div>

        {/* Message */}

        <div className="mt-8">
          <div className="mb-3 flex items-center gap-2">
            <MessageSquare
              size={18}
              className="text-amber-400"
            />

            <p className="font-medium text-slate-300">
              Additional Message
            </p>
          </div>

          <div className="rounded-xl bg-slate-800 p-5 text-white leading-7">
            {booking.message ||
              "No additional message."}
          </div>
        </div>

        {/* Footer */}

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm text-slate-400">
              Current Status
            </p>

            <StatusBadge
              status={booking.status}
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => window.print()}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-slate-600
                px-6
                py-3
                text-white
                transition
                hover:bg-slate-700
              "
            >
              <Printer size={18} />
              Print
            </button>

            <button
              onClick={onClose}
              className="
                rounded-xl
                bg-gradient-to-r
                from-amber-500
                to-orange-500
                px-6
                py-3
                font-semibold
                text-black
                transition
                hover:scale-105
              "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Info = ({ label, value }) => (
  <div>
    <p className="text-sm text-slate-400">
      {label}
    </p>

    <p className="mt-2 break-words text-lg font-medium text-white">
      {value}
    </p>
  </div>
);

export default BookingDetailsModal;