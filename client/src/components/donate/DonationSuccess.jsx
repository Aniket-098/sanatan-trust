import { useLocation, useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  HeartHandshake,
  Home,
  Download,
  Copy,
  CalendarDays,
  BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import generateDonationReceipt from "../utils/generateDonationReceipt";

const DonationSuccess = () => {
  const navigate = useNavigate();

  const { state } = useLocation();

  const donation = state?.donation;

  if (!donation) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#140B05] text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Invalid Donation Session
          </h2>

          <p className="mt-4 text-gray-400">
            No donation details were found.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-8 rounded-xl bg-yellow-500 px-8 py-3 font-semibold text-black hover:bg-yellow-400"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const copyPaymentId = async () => {
    try {
      await navigator.clipboard.writeText(
        donation.paymentId
      );

      toast.success("Payment ID copied.");
    } catch {
      toast.error("Unable to copy.");
    }
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#120802]
        via-[#1A120B]
        to-[#120802]
        px-6
        py-20
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-20
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-yellow-500/10
          blur-[180px]
        "
      />

      <div className="relative z-10 mx-auto max-w-3xl">

        {/* Success */}

        <motion.div
          initial={{
            scale: 0,
            rotate: -180,
          }}
          animate={{
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 0.8,
            type: "spring",
          }}
          className="flex justify-center"
        >
          <CheckCircle2
            size={110}
            className="text-green-500"
          />
        </motion.div>

        <div className="mt-8 text-center">

          <span
            className="
              rounded-full
              bg-green-500/10
              px-5
              py-2
              text-sm
              font-semibold
              text-green-400
            "
          >
            VERIFIED DONATION
          </span>

          <h1 className="mt-6 text-5xl font-bold text-white">
            Donation Successful
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Thank you for supporting
            <span className="font-semibold text-yellow-400">
              {" "}
              Sanatan Trust
            </span>
            .
            <br />
            Your kindness helps preserve Sanatan Dharma,
            organize Kathas and serve society.
          </p>

        </div>

        {/* Summary Cards */}

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          <div
            className="
              rounded-2xl
              border
              border-yellow-500/20
              bg-[#24160F]
              p-6
              text-center
            "
          >
            <p className="text-sm uppercase tracking-wider text-gray-400">
              Donation Amount
            </p>

            <h2 className="mt-4 text-4xl font-bold text-yellow-400">
              ₹{" "}
              {Number(donation.amount).toLocaleString(
                "en-IN"
              )}
            </h2>

          </div>

          <div
            className="
              rounded-2xl
              border
              border-green-500/20
              bg-[#24160F]
              p-6
              text-center
            "
          >
            <BadgeCheck
              className="mx-auto text-green-400"
              size={40}
            />

            <h3 className="mt-3 text-xl font-bold text-white">
              Payment Verified
            </h3>

            <p className="mt-2 text-green-400">
              SUCCESS
            </p>

          </div>

        </div>

        {/* Receipt */}

        <div
          className="
            mt-12
            rounded-3xl
            border
            border-yellow-500/20
            bg-[#24160F]
            p-8
          "
        >
          <h2 className="mb-8 text-2xl font-bold text-yellow-400">
            Donation Receipt
          </h2>

          <ReceiptRow
            label="Donor Name"
            value={donation.donorName}
          />

          <ReceiptRow
            label="Donation Amount"
            value={`₹ ${Number(
              donation.amount
            ).toLocaleString("en-IN")}`}
          />

          <ReceiptRow
            label="Status"
            value="Success"
            valueClass="text-green-400"
          />

          <ReceiptRow
            label="Date"
            value={new Date(
              donation.createdAt
            ).toLocaleString("en-IN")}
            icon={<CalendarDays size={18} />}
          />

          <div className="mt-6">

            <p className="mb-3 text-gray-400">
              Payment ID
            </p>

            <div
              className="
                flex
                items-center
                justify-between
                rounded-xl
                bg-[#1A120B]
                p-4
              "
            >
              <span className="truncate text-green-400">
                {donation.paymentId}
              </span>

              <button
                onClick={copyPaymentId}
                className="ml-4 text-yellow-400 hover:text-yellow-300"
              >
                <Copy size={20} />
              </button>

            </div>

          </div>

        </div>

        {/* Blessing */}

        <div
          className="
            mt-10
            rounded-3xl
            border
            border-yellow-500/20
            bg-yellow-500/10
            p-8
            text-center
          "
        >
          <HeartHandshake
            className="mx-auto text-yellow-400"
            size={42}
          />

          <h3 className="mt-6 text-2xl font-bold text-white">
            दानं परमं धर्मः
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Every act of giving is an act of Dharma.
            <br />
            May Lord Krishna bless you and your
            family with happiness, peace and
            prosperity.
          </p>

        </div>

        {/* Next Steps */}

        <div
          className="
            mt-10
            rounded-3xl
            border
            border-yellow-500/20
            bg-[#24160F]
            p-8
          "
        >
          <h3 className="text-xl font-bold text-yellow-400">
            What Happens Next?
          </h3>

          <ul className="mt-6 space-y-4 text-gray-300">

            <li>✅ Donation recorded successfully</li>

            <li>✅ Payment verified</li>

            <li>✅ Confirmation email sent</li>

            <li>✅ Thank you for supporting Sanatan Trust</li>

          </ul>

        </div>

        {/* Buttons */}

        <div className="mt-12 grid gap-4 md:grid-cols-3">

          <button
            onClick={() =>
              generateDonationReceipt(donation)
            }
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-yellow-500/20
              bg-[#24160F]
              py-4
              font-semibold
              text-white
              transition
              hover:border-yellow-500
            "
          >
            <Download size={20} />

            Receipt
          </button>

          <button
            onClick={() => navigate("/")}
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-yellow-500
              to-orange-500
              py-4
              font-semibold
              text-black
              transition
              hover:scale-[1.02]
            "
          >
            <Home size={20} />

            Home
          </button>

          <button
            onClick={() =>
              navigate("/donate")
            }
            className="
              rounded-xl
              border
              border-yellow-500/20
              bg-[#24160F]
              py-4
              font-semibold
              text-white
              transition
              hover:border-yellow-500
            "
          >
            Donate Again
          </button>

        </div>

      </div>

    </section>
  );
};

const ReceiptRow = ({
  label,
  value,
  valueClass = "text-white",
  icon,
}) => (
  <div className="flex items-center justify-between border-b border-slate-700 py-4">

    <div className="flex items-center gap-2 text-gray-400">

      {icon}

      {label}

    </div>

    <span className={`font-semibold ${valueClass}`}>
      {value}
    </span>

  </div>
);

export default DonationSuccess;