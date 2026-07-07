import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle2, HeartHandshake, Home } from "lucide-react";

const DonationSuccess = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  
  const donation = state?.donation;

  if (!donation) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#140B05] text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Invalid Donation Session</h2>

          <p className="mt-4 text-gray-400">No donation details were found.</p>

          <button
            onClick={() => navigate("/")}
            className="
              mt-8
              rounded-xl
              bg-yellow-500
              px-8
              py-3
              font-semibold
              text-black
              transition
              hover:bg-yellow-400
            "
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#140B05] py-20 px-6">
      <div className="mx-auto max-w-2xl">
        <div
          className="
            rounded-3xl
            border
            border-yellow-600/30
            bg-[#2B1E14]
            p-10
            shadow-2xl
          "
        >
          {/* Success Icon */}

          <div className="flex justify-center">
            <CheckCircle2 size={90} className="text-green-500" />
          </div>

          {/* Heading */}

          <h1 className="mt-8 text-center text-4xl md:text-5xl font-bold text-white">
            Donation Successful
          </h1>

          <p className="mt-5 text-center text-lg leading-8 text-gray-300">
            Thank you for supporting
            <span className="font-semibold text-yellow-400">
              {" "}
              Sanatan Trust
            </span>
            . Your generosity helps us preserve Sanatan Dharma, organize Kathas
            and continue serving society.
          </p>

          {/* Receipt */}

          <div
            className="
              mt-12
              rounded-2xl
              bg-[#1A120B]
              p-8
            "
          >
            <div className="flex justify-between py-3 border-b border-slate-700">
              <span className="text-gray-400">Donor</span>

              <span className="font-semibold text-white">
                {donation.donorName}
              </span>
            </div>

            <div className="flex justify-between py-3 border-b border-slate-700">
              <span className="text-gray-400">Amount</span>

              <span className="text-2xl font-bold text-yellow-400">
                ₹ {Number(donation.amount).toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex items-center justify-between py-5 border-b border-slate-700">
              <span className="text-gray-400">Payment ID</span>

              <span
                className="
      max-w-[55%]
      truncate
      text-right
      font-medium
      text-green-400
    "
                title={donation.paymentId}
              >
                {donation.paymentId}
              </span>
            </div>

            <div className="flex justify-between py-3">
              <span className="text-gray-400">Status</span>

              <span className="font-semibold text-green-500">Success</span>
            </div>
          </div>

          {/* Quote */}

          <div
            className="
              mt-10
              rounded-2xl
              border
              border-yellow-600/30
              bg-yellow-500/10
              p-6
            "
          >
            <div className="flex items-center gap-3">
              <HeartHandshake className="text-yellow-400" />

              <p className="text-gray-300 leading-7">
                Every donation, regardless of its size, contributes towards
                preserving our traditions, supporting charitable activities and
                serving the community.
              </p>
            </div>
          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-col gap-4 md:flex-row">
            <button
              onClick={() => navigate("/")}
              className="
                flex
                flex-1
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-yellow-500
                to-orange-500
                py-4
                text-lg
                font-bold
                text-black
                transition
                hover:scale-[1.02]
              "
            >
              <Home size={20} />
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSuccess;
