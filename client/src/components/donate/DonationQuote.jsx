import { Quote } from "lucide-react";

const DonationQuote = () => {
  return (
    <div
      className="
        mt-14
        rounded-3xl
        border
        border-yellow-500/20
        bg-gradient-to-r
        from-[#2B1E14]
        to-[#1A120B]
        p-8
      "
    >
      <Quote
        className="text-yellow-400"
        size={42}
      />

      <p className="mt-6 text-3xl font-bold text-yellow-400">
        दानं परमं धर्मः
      </p>

      <p className="mt-2 italic text-gray-400">
        "Giving is the highest form of Dharma."
      </p>

      <p
        className="
          mt-6
          text-xl
          leading-9
          text-white
        "
      >
        Every act of generosity, no matter how small,
        helps preserve <span className="text-yellow-400">Sanatan Dharma</span>,
        support <span className="text-yellow-400">Annadan Seva</span>,
        serve humanity,
        and spread spiritual wisdom.
      </p>

      <p
        className="
          mt-6
          text-lg
          leading-8
          text-gray-300
        "
      >
        May Lord Krishna bless you and your family
        with peace, prosperity and divine grace.
      </p>

      <p className="mt-8 text-lg font-semibold text-yellow-400">
        — Sanatan Trust
      </p>
    </div>
  );
};

export default DonationQuote;