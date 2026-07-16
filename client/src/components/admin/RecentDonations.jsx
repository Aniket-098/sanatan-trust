import DashboardSection from "./DashboardSection";
import StatusBadge from "./StatusBadge";
import { HeartHandshake } from "lucide-react";

const RecentDonations = ({ donations }) => {
  return (
    <DashboardSection
      title="Recent Donations"
      icon={HeartHandshake}
      action="View All"
    >
      {donations.length === 0 ? (
        <div className="rounded-2xl bg-slate-900/40 py-12 text-center">
          <p className="text-slate-400">
            No recent donations found.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700 text-left text-sm uppercase tracking-wider text-slate-400">
                <th className="pb-4">Donor</th>
                <th className="pb-4">Amount</th>
                <th className="pb-4">Date</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {donations.map((donation) => (
                <tr
                  key={donation._id}
                  className="
                    border-b
                    border-slate-800
                    transition-colors
                    hover:bg-slate-800/40
                  "
                >
                  <td className="py-5">
                    {donation.donorName}
                  </td>

                  <td className="font-bold text-yellow-400">
                    ₹{" "}
                    {donation.amount.toLocaleString(
                      "en-IN"
                    )}
                  </td>

                  <td>
                    {new Date(
                      donation.createdAt
                    ).toLocaleDateString("en-IN")}
                  </td>

                  <td>
                    <StatusBadge
                      status={
                        donation.paymentStatus
                      }
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

export default RecentDonations;