import {
  HeartHandshake,
  ShieldCheck,
  Mail,
} from "lucide-react";

const DonationHero = () => {
  return (
    <div>

      <span
        className="
          rounded-full
          bg-yellow-500/10
          px-4
          py-2
          text-sm
          font-semibold
          text-yellow-400
        "
      >
        ❤️ Support Sanatan Trust
      </span>

      <h1 className="mt-8 text-5xl font-bold leading-tight text-white">

        Every Donation
        <br />

        Strengthens Dharma

      </h1>

      <p className="mt-8 text-lg leading-9 text-gray-300">

        Your generosity helps preserve Sanatan Dharma,
        organize Kathas,
        support Annadan Seva,
        temple development,
        and charitable initiatives that benefit society.

      </p>

      <div className="mt-10 space-y-5">

        <Feature
          icon={<ShieldCheck />}
          title="100% Secure Payments"
        />

        <Feature
          icon={<HeartHandshake />}
          title="Transparent Donations"
        />

        <Feature
          icon={<Mail />}
          title="Instant Email Confirmation"
        />

      </div>

    </div>
  );
};

const Feature = ({ icon, title }) => (
  <div className="flex items-center gap-4">

    <div
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-xl
        bg-yellow-500/10
        text-yellow-400
      "
    >
      {icon}
    </div>

    <p className="text-lg text-white">
      {title}
    </p>

  </div>
);

export default DonationHero;