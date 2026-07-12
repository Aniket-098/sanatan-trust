
const stats = [
  {
    value: 25,
    suffix: "+",
    label: "Years of Service",
  },
  {
    value: 500,
    suffix: "+",
    label: "Religious Events",
  },
  {
    value: 10000,
    suffix: "+",
    label: "Devotees Served",
  },
  {
    value: 100,
    suffix: "%",
    label: "Transparent Donations",
  },
];

const ImpactStats = () => {
  return (
    <div className="mt-14">

      <h2 className="text-3xl font-bold text-yellow-400">
        Our Impact
      </h2>

      <p className="mt-3 text-gray-400">
        Together, we continue to serve society with devotion,
        compassion and transparency.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-5">

        {stats.map((item) => (
          <div
            key={item.label}
            className="
              rounded-2xl
              border
              border-yellow-500/10
              bg-[#24160F]
              p-6
              text-center
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-yellow-500/30
            "
          >
            <h3 className="text-4xl font-bold text-yellow-400">
  {item.value}
  {item.suffix}
</h3>

            <p className="mt-3 text-gray-400">
              {item.label}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default ImpactStats;