import {
  X,
  Printer,
  HeartHandshake,
  IndianRupee,
  CalendarDays,
} from "lucide-react";

const DonationDetailsModal = ({
  donation,
  onClose,
}) => {
  if (!donation) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 p-4 md:p-6">
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
              Donation Details
            </h2>

            <p className="mt-2 text-slate-400">
              Complete donation information.
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-slate-700"
          >
            <X />
          </button>

        </div>

        {/* Payment */}

        <div className="mb-8 rounded-2xl bg-slate-800 p-6">

          <p className="text-sm text-slate-400">
            Payment ID
          </p>

          <h3 className="mt-2 font-mono text-xl text-green-400 break-all">
            {donation.razorpayPaymentId}
          </h3>

        </div>

        {/* Information */}

        <div className="grid gap-6 md:grid-cols-2">

          <Info
            icon={<HeartHandshake size={18} />}
            label="Donor Name"
            value={donation.donorName}
          />

          <Info
            icon={<IndianRupee size={18} />}
            label="Amount"
            value={`₹ ${donation.amount.toLocaleString("en-IN")}`}
          />

          <Info
            label="Phone"
            value={donation.phone}
          />

          <Info
            label="Email"
            value={
              donation.email ||
              "Not Provided"
            }
          />

          <Info
            icon={<CalendarDays size={18} />}
            label="Donated On"
            value={new Date(
              donation.createdAt
            ).toLocaleString("en-IN")}
          />

          <Info
            label="Status"
            value={donation.paymentStatus}
          />

        </div>

        {/* Purpose */}

        <div className="mt-8">

          <p className="mb-3 text-slate-300 font-medium">
            Purpose
          </p>

          <div className="rounded-xl bg-slate-800 p-5 leading-7 text-white">
            {donation.purpose ||
              "No purpose specified."}
          </div>

        </div>

        {/* Footer */}

        <div className="mt-10 flex justify-end gap-3">

          <button
            onClick={() => window.print()}
            className="
              rounded-xl
              border
              border-slate-600
              px-6
              py-3
              hover:bg-slate-700
            "
          >
            <div className="flex items-center gap-2">
              <Printer size={18} />
              Print
            </div>
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
            "
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
};

const Info = ({
  icon,
  label,
  value,
}) => (
  <div>

    <div className="flex items-center gap-2 text-slate-400">

      {icon}

      <span className="text-sm">
        {label}
      </span>

    </div>

    <p className="mt-2 text-lg font-medium text-white break-words">
      {value}
    </p>

  </div>
);

export default DonationDetailsModal;