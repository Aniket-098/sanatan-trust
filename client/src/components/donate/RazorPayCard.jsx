import {
  CreditCard,
  BadgeCheck,
} from "lucide-react";

const Feature = ({ text }) => (
  <div
    className="
      flex
      items-center
      gap-3
      rounded-xl
      bg-[#1A120B]
      p-3
    "
  >
    <BadgeCheck
      size={18}
      className="text-green-400"
    />

    <span className="text-sm text-gray-300">
      {text}
    </span>
  </div>
);

const RazorpayCard = ({ onDonate }) => {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-yellow-500/20
        bg-[#24160F]
        p-8
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-yellow-400/40
        hover:shadow-yellow-500/10
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -top-24
          -right-24
          h-48
          w-48
          rounded-full
          bg-yellow-500/10
          blur-3xl
        "
      />

      <div className="relative z-10">

        {/* Header */}

        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-yellow-500/10
            "
          >
            <CreditCard
              size={30}
              className="text-yellow-400"
            />
          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              Donate Securely
            </h2>

            <p className="text-gray-400">
              Powered by Razorpay
            </p>

          </div>

        </div>

        {/* Badge */}

        <div
          className="
            mt-6
            inline-flex
            items-center
            rounded-full
            bg-green-500/10
            px-4
            py-2
            text-sm
            font-medium
            text-green-400
          "
        >
          ✓ Trusted Payment Gateway
        </div>

        {/* Features */}

        <div className="mt-8 grid grid-cols-2 gap-4">

          <Feature text="Secure SSL" />

          <Feature text="Email Receipt" />

          <Feature text="Instant Confirmation" />

          <Feature text="Cards • UPI • NetBanking" />

        </div>

        {/* Button */}

        <button
          onClick={onDonate}
          className="
            mt-10
            w-full
            rounded-xl
            bg-gradient-to-r
            from-yellow-500
            to-orange-500
            py-4
            text-lg
            font-bold
            text-black
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-lg
            hover:shadow-yellow-500/20
          "
        >
          ❤️ Donate Securely
        </button>

      </div>

    </div>
  );
};

export default RazorpayCard;