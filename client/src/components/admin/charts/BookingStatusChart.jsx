import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Loader2 } from "lucide-react";

const COLORS = [
  "#EAB308",
  "#22C55E",
  "#EF4444",
];

const BookingStatusChart = ({ stats }) => {

  if (!stats) {
    return (
      <div className="rounded-2xl border border-slate-700 bg-[#111827] p-6">
        <h2 className="mb-6 text-xl font-bold">
          Booking Status
        </h2>

        <div className="flex h-[280px] items-center justify-center">
          <div className="flex items-center gap-3 text-slate-300">
            <Loader2
              size={22}
              className="animate-spin"
            />
            Loading chart...
          </div>
        </div>
      </div>
    );
  }

  const data = [
    {
      name: "Pending",
      value: stats.pending,
    },
    {
      name: "Approved",
      value: stats.approved,
    },
    {
      name: "Rejected",
      value: stats.rejected,
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-700 bg-[#111827] p-6">

      <h2 className="mb-6 text-xl font-bold">
        Booking Status
      </h2>

      <ResponsiveContainer
        width="100%"
        height={280}
      >
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={90}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
};

export default BookingStatusChart;