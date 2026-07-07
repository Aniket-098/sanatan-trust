import StatusBadge from "./StatusBadge";
import DonationActions from "./DonationActions";

const DonationRow = ({ donation, onView ,onDelete }) => {
  return (
    <tr className="border-b border-slate-800">
      <td className="py-4 text-slate-300">
        <span title={donation.razorpayPaymentId}>
          ...{donation.razorpayPaymentId.slice(-10)}
        </span>
      </td>

      <td className="text-white">{donation.donorName}</td>

      <td className="text-slate-300">{donation.phone}</td>

      <td className="text-lg font-bold text-yellow-400">
        ₹ {donation.amount.toLocaleString("en-IN")}
      </td>

      <td className="text-slate-300">{donation.purpose || "Not Specified"}</td>

      <td>
        <StatusBadge status={donation.paymentStatus} />
      </td>

      <td className="text-slate-300">
        {new Date(donation.createdAt).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </td>

      <td>
        <DonationActions
          className="
        rounded-lg
        p-2
        text-red-500
        transition
        hover:bg-red-500/10
        hover:scale-110
        "
          donation={donation}
          onView={onView}
          onDelete={onDelete}
        />
      </td>
    </tr>
  );
};

export default DonationRow;
