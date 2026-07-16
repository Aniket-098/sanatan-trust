import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { HeartHandshake } from "lucide-react";

const DonationChart = ({ donations }) => {
  const data = donations.map((item) => ({
    donor:
      item.donorName.length > 10
        ? item.donorName.slice(0, 10) + "..."
        : item.donorName,
    amount: item.amount,
  }));

  const totalAmount = donations.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-700/70
        bg-gradient-to-br
        from-[#111827]
        to-[#1E293B]
        p-6
        shadow-xl
      "
    >
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-pink-500/10
            "
          >
            <HeartHandshake
              className="text-pink-400"
              size={24}
            />
          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              Recent Donations
            </h2>

            <p className="text-sm text-slate-400">
              Latest contribution overview
            </p>

          </div>

        </div>

        <div className="text-right">

          <p className="text-sm text-slate-400">
            Total Amount
          </p>

          <p className="text-xl font-bold text-yellow-400">
            ₹ {totalAmount.toLocaleString("en-IN")}
          </p>

        </div>

      </div>

      {data.length === 0 ? (
        <div
          className="
            flex
            h-[280px]
            items-center
            justify-center
            rounded-2xl
            border
            border-dashed
            border-slate-700
          "
        >
          <p className="text-slate-400">
            No donation data available.
          </p>
        </div>
      ) : (
        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <BarChart data={data}>
            <XAxis
              dataKey="donor"
              tick={{
                fill: "#CBD5E1",
                fontSize: 12,
              }}
            />

            <YAxis
              tick={{
                fill: "#CBD5E1",
                fontSize: 12,
              }}
            />

            <Tooltip
              cursor={{
                fill: "#1E293B",
              }}
            />

            <Bar
              dataKey="amount"
              fill="#EAB308"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default DonationChart;