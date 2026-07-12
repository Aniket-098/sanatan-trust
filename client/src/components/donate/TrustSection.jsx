import {
  ShieldCheck,
  BadgeCheck,
  Mail,
  ReceiptIndianRupee,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "100% Secure Payments",
    description:
      "All online donations are processed securely through Razorpay.",
  },
  {
    icon: ReceiptIndianRupee,
    title: "Transparent Donations",
    description:
      "Every contribution is recorded and used for trust activities.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Trust",
    description:
      "Dedicated to spiritual, charitable and social welfare activities.",
  },
  {
    icon: Mail,
    title: "Instant Confirmation",
    description:
      "Receive an acknowledgement by email after successful payment.",
  },
];

const TrustSection = () => {
  return (
    <div className="mt-16">

      <h2 className="text-3xl font-bold text-yellow-400">
        Why Donate With Confidence?
      </h2>

      <p className="mt-3 max-w-2xl text-gray-400">
        We believe every contribution deserves complete
        transparency, security and accountability.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                rounded-2xl
                border
                border-yellow-500/10
                bg-[#24160F]
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-yellow-500/30
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
                  size={28}
                  className="text-yellow-400"
                />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {item.description}
              </p>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default TrustSection;