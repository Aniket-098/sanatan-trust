import DonationRow from "./DonationRow";

const DonationTable = ({ donations, onView ,onDelete }) => {
  if (!donations.length) {
    return <p className="text-slate-400">No donations found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-white">
        <thead>
          <tr
            className="
                border-b
                border-slate-700
                text-left
                text-sm
                uppercase
                tracking-wider
                text-slate-300"
          >
            <th className="pb-4">Payment ID</th>

            <th className="pb-4">Donor</th>

            <th className="pb-4">Phone</th>

            <th className="pb-4">Amount</th>

            <th className="pb-4">Purpose</th>

            <th className="pb-4">Status</th>

            <th className="pb-4">Date</th>

            <th className="pb-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {donations.map((donation) => (
            <DonationRow
              key={donation._id}
              donation={donation}
              onView={onView}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationTable;
