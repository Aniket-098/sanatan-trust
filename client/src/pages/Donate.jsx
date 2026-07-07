import { useSearchParams } from "react-router-dom";

import DonationForm from "../components/donate/DonationForm";

const Donate = () => {
  const [searchParams] = useSearchParams();

  const amount = Number(searchParams.get("amount")) || 501;

  return (
    <div className="min-h-screen bg-[#140A05] pt-32 pb-20">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        {/* Left */}

        <div>
          <h1 className="text-5xl font-bold text-yellow-500">
            Support Our Mission
          </h1>

          <p className="mt-8 text-lg leading-9 text-gray-300">
            Your generosity helps preserve Sanatan Dharma, serve society,
            organize Kathas, support Annadan Seva, and continue spiritual and
            charitable activities for future generations.
          </p>

          <div className="mt-12 space-y-6">
            <div
              className="
      rounded-2xl
      bg-[#2B1E14]
      p-6
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-yellow-500/30
    "
            >
              <h3 className="text-xl font-semibold text-yellow-400">
                ❤️ Why Donate?
              </h3>

              <p className="mt-3 leading-7 text-gray-300">
                Every donation directly supports religious, educational and
                charitable activities conducted by the trust.
              </p>
            </div>

            <div
              className="
      rounded-2xl
      bg-[#2B1E14]
      p-6
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-yellow-500/30
    "
            >
              <h3 className="text-xl font-semibold text-yellow-400">
                🛕 Transparent Contributions
              </h3>

              <p className="mt-3 leading-7 text-gray-300">
                Every contribution is utilized responsibly to organize Kathas,
                Annadan Seva, temple development and spiritual education.
              </p>
            </div>

            <div
              className="
      rounded-2xl
      bg-[#2B1E14]
      p-6
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-yellow-500/30
    "
            >
              <h3 className="text-xl font-semibold text-yellow-400">
                🔒 Secure Payments
              </h3>

              <p className="mt-3 leading-7 text-gray-300">
                All donations are processed securely through Razorpay using
                encrypted payment technology.
              </p>
            </div>
          </div>
        </div>

        {/* Right */}

        <DonationForm defaultAmount={amount} />
      </div>
    </div>
  );
};

export default Donate;
