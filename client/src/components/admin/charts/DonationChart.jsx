import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const DonationChart = ({
  donations,
}) => {
  const data = donations.map(
    (item) => ({
      donor: item.donorName,
      amount: item.amount,
    })
  );

  return (
    <div className="rounded-2xl border border-slate-700 bg-[#111827] p-6">

      <h2 className="mb-6 text-xl font-bold">
        Recent Donations
      </h2>

      <ResponsiveContainer
        width="100%"
        height={280}
      >
        <BarChart data={data}>

          <XAxis dataKey="donor" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="amount"
            fill="#EAB308"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default DonationChart;