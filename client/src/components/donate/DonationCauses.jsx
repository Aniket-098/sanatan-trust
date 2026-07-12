import {
  HeartHandshake,
  BookOpen,
  Building2,
  Users,
  Baby,
} from "lucide-react";

const causes = [
  {
    icon: HeartHandshake,
    title: "Annadan Seva",
    description:
      "Providing free meals to devotees and people in need.",
  },
  {
    icon: BookOpen,
    title: "Spiritual Education",
    description:
      "Supporting Kathas, Pravachans and Dharma education.",
  },
  {
    icon: Building2,
    title: "Temple Development",
    description:
      "Maintaining temples and preserving spiritual heritage.",
  },
  {
    icon: Users,
    title: "Community Welfare",
    description:
      "Helping families through charitable and social initiatives.",
  },
  {
    icon: Baby,
    title: "Anath Aashram",
    description:
      "Supporting orphaned children with food, education and care.",
  },
];

const DonationCauses = () => {
  return (
    <div className="mt-14">

      <h2 className="text-3xl font-bold text-yellow-400">
        Where Your Donation Goes
      </h2>

      <p className="mt-3 text-gray-400">
        Every contribution helps us continue our mission of
        service, spirituality and social welfare.
      </p>

      <div className="mt-10 grid gap-5">

        {causes.map((cause) => {
          const Icon = cause.icon;

          return (
            <div
              key={cause.title}
              className="
                flex
                gap-5
                rounded-2xl
                border
                border-yellow-500/10
                bg-[#24160F]
                p-5
                transition-all
                duration-300
                hover:border-yellow-500/30
                hover:-translate-y-1
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  bg-yellow-500/10
                "
              >
                <Icon
                  className="text-yellow-400"
                  size={28}
                />
              </div>

              <div>

                <h3 className="text-lg font-semibold text-white">
                  {cause.title}
                </h3>

                <p className="mt-2 leading-7 text-gray-400">
                  {cause.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default DonationCauses;