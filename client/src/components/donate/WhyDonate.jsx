import {
  Landmark,
  BookOpen,
  HeartHandshake,
  UtensilsCrossed,
} from "lucide-react";

const items = [
  {
    icon: Landmark,
    title: "Preserve Dharma",
    description:
      "Helping preserve Sanatan traditions for future generations.",
  },
  {
    icon: UtensilsCrossed,
    title: "Annadan Seva",
    description:
      "Providing meals to devotees and people in need.",
  },
  {
    icon: BookOpen,
    title: "Spiritual Education",
    description:
      "Supporting Kathas, Pravachans and Dharma education.",
  },
  {
    icon: HeartHandshake,
    title: "Community Welfare",
    description:
      "Serving society through charitable initiatives.",
  },
];

const WhyDonate = () => {
  return (
    <div className="mt-14">
      <h2 className="text-3xl font-bold text-yellow-400">
        Why Your Donation Matters
      </h2>

      <p className="mt-3 text-gray-400">
        Your generosity creates a lasting impact on individuals,
        families and the community.
      </p>

      <div className="mt-8 grid gap-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                flex
                items-start
                gap-4
                rounded-2xl
                border
                border-yellow-500/10
                bg-[#24160F]
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-yellow-500/30
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-yellow-500/10
                "
              >
                <Icon
                  size={24}
                  className="text-yellow-400"
                />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyDonate;