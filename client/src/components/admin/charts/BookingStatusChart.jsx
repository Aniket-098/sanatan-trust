import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#EAB308",
  "#22C55E",
  "#EF4444",
];

const BookingStatusChart = ({ stats }) => {
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
                fill={
                  COLORS[index]
                }
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