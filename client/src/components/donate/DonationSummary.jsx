import { HeartHandshake, IndianRupee, ShieldCheck } from "lucide-react";

const DonationSummary = ({ amount }) => {
  return (
    <div
      className="
        mt-8
        overflow-hidden
        rounded-3xl
        border
        border-yellow-500/20
        bg-gradient-to-br
        from-[#24160F]
        to-[#1A120B]
        shadow-xl
      "
    >
      {/* Header */}

      <div className="border-b border-yellow-500/10 p-6">

        <div className="flex items-center gap-3">

          <HeartHandshake
            className="text-yellow-400"
            size={28}
          />

          <div>

            <h3 className="text-2xl font-bold text-white">
              Donation Summary
            </h3>

            <p className="text-sm text-gray-400">
              Thank you for supporting Sanatan Trust
            </p>

          </div>

        </div>

      </div>

      {/* Amount */}

      <div className="space-y-6 p-6">

        <div className="flex items-center justify-between">

          <span className="text-gray-400">
            Donation Amount
          </span>

          <div className="flex items-center gap-2">

            <IndianRupee
              size={20}
              className="text-yellow-400"
            />

            <span className="text-3xl font-bold text-yellow-400">
              {amount.toLocaleString("en-IN")}
            </span>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-yellow-500/10" />

        {/* Trust Message */}

        <div className="rounded-2xl bg-[#1A120B] p-5">

          <div className="flex items-start gap-3">

            <ShieldCheck
              size={24}
              className="mt-1 text-green-400"
            />

            <div>

              <h4 className="font-semibold text-white">
                100% Secure Contribution
              </h4>

              <p className="mt-2 leading-7 text-gray-400">
                Every rupee donated supports
                spiritual, educational and charitable
                activities conducted by
                <span className="font-semibold text-yellow-400">
                  {" "}
                  Sanatan Trust
                </span>.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default DonationSummary;