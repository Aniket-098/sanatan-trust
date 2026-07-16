import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

const COLORS = [
  "#EAB308",
  "#22C55E",
  "#EF4444",
];

const BookingStatusChart = ({ stats }) => {
  const data = [
    {
      name: "Pending",
      value: stats?.pending || 0,
      color: COLORS[0],
      icon: Clock3,
    },
    {
      name: "Approved",
      value: stats?.approved || 0,
      color: COLORS[1],
      icon: CheckCircle2,
    },
    {
      name: "Rejected",
      value: stats?.rejected || 0,
      color: COLORS[2],
      icon: XCircle,
    },
  ];

  const total =
    (stats?.pending || 0) +
    (stats?.approved || 0) +
    (stats?.rejected || 0);

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

        <div>

          <h2 className="text-2xl font-bold text-white">
            Booking Status
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Overview of all bookings
          </p>

        </div>

        <div className="text-right">

          <p className="text-sm text-slate-400">
            Total
          </p>

          <h3 className="text-2xl font-bold text-yellow-400">
            {total}
          </h3>

        </div>

      </div>

      {total === 0 ? (
        <div
          className="
            flex
            h-[300px]
            items-center
            justify-center
            rounded-2xl
            border
            border-dashed
            border-slate-700
          "
        >
          <p className="text-slate-400">
            No booking data available.
          </p>
        </div>
      ) : (
        <div className="grid items-center gap-8 lg:grid-cols-[300px_1fr]">

          {/* Chart */}

          <ResponsiveContainer
            width="100%"
            height={260}
          >
            <PieChart>

              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={65}
                outerRadius={95}
                paddingAngle={3}
              >
                {data.map((item, index) => (
                  <Cell
                    key={index}
                    fill={item.color}
                  />
                ))}
              </Pie>

              <Tooltip />

            </PieChart>
          </ResponsiveContainer>

          {/* Legend */}

          <div className="space-y-5">

            {data.map((item) => {
              const Icon = item.icon;

              const percentage =
                total === 0
                  ? 0
                  : Math.round(
                      (item.value / total) * 100
                    );

              return (
                <div key={item.name}>

                  <div className="mb-2 flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <Icon
                        size={20}
                        style={{
                          color: item.color,
                        }}
                      />

                      <span className="font-medium text-white">
                        {item.name}
                      </span>

                    </div>

                    <span className="font-semibold text-slate-300">
                      {item.value}
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-slate-800">

                    <div
                      className="h-2 rounded-full transition-all"
                      style={{
                        width: `${percentage}%`,
                        background: item.color,
                      }}
                    />

                  </div>

                  <p className="mt-1 text-xs text-slate-400">
                    {percentage}% of all bookings
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      )}
    </div>
  );
};

export default BookingStatusChart;