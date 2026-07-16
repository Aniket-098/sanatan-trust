import { useState } from "react";

import {
  Smartphone,
  Copy,
  Check,
  Mail,
  MessageCircle,
} from "lucide-react";

import {
  SiGooglepay,
  SiPhonepe,
  SiPaytm,
} from "react-icons/si";

import toast from "react-hot-toast";

import paymentConfig from "../../constants/paymentConfig";

const UPICard = ({upiId, qrCode}) => {
  const [copied, setCopied] = useState(false);

  const finalUpiId =
  upiId || paymentConfig.upi.id;

  const finalQrCode =
  qrCode || paymentConfig.upi.qr;

  const copyUPI = async () => {
    try {
      await navigator.clipboard.writeText(
        finalUpiId
      );

      setCopied(true);

      toast.success("UPI ID copied!");

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch {
      toast.error("Failed to copy UPI ID.");
    }
  };

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
          -left-24
          h-48
          w-48
          rounded-full
          bg-yellow-500/10
          blur-3xl
        "
      />

      <div className="relative z-10">

        {/* Header */}

        <div className="text-center">

          <div
            className="
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-yellow-500/10
            "
          >
            <Smartphone
              size={30}
              className="text-yellow-400"
            />
          </div>

          <h2 className="mt-5 text-3xl font-bold text-white">
            Scan & Donate
          </h2>

          <p className="mt-2 text-gray-400">
            Pay instantly using any UPI App
          </p>

        </div>

        {/* QR */}

        <div className="mt-8 flex justify-center">

          {finalQrCode  ? (
            <img
              src={finalQrCode}
              alt="UPI QR"
              className="
                w-64
                rounded-2xl
                bg-white
                p-4
                shadow-lg
              "
            />
          ) : (
            <div
              className="
                flex
                h-64
                w-64
                items-center
                justify-center
                rounded-2xl
                border-2
                border-dashed
                border-yellow-500/20
                bg-[#1A120B]
                text-center
                text-gray-400
              "
            >
              QR Image
              <br />
              Coming Soon
            </div>
          )}

        </div>

        {/* UPI */}

        <div className="mt-8">

          <p className="text-sm uppercase tracking-wider text-gray-400">
            UPI ID
          </p>

          <div
            className="
              mt-3
              flex
              items-center
              justify-between
              rounded-xl
              bg-[#1A120B]
              px-5
              py-4
            "
          >
            <span className="font-medium text-yellow-400">
              {finalUpiId}
            </span>

            <button
              onClick={copyUPI}
              className="
                flex
                items-center
                gap-2
                rounded-lg
                bg-yellow-500
                px-4
                py-2
                font-semibold
                text-black
                transition
                hover:bg-yellow-400
              "
            >
              {copied ? (
                <>
                  <Check size={18} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={18} />
                  Copy
                </>
              )}
            </button>

          </div>

        </div>

        {/* Apps */}

        <div className="mt-10">

          <p className="mb-5 text-center text-sm text-gray-400">
            Accepted UPI Apps
          </p>

          <div className="flex flex-wrap justify-center gap-8">

            <App icon={<SiGooglepay size={34} />} name="GPay" />

            <App
              icon={
                <SiPhonepe
                  size={34}
                  className="text-[#6C2DC7]"
                />
              }
              name="PhonePe"
            />

            <App
              icon={
                <SiPaytm
                  size={34}
                  className="text-[#00BAF2]"
                />
              }
              name="Paytm"
            />

            <App
              icon={
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-yellow-500/20
                  "
                >
                  BH
                </div>
              }
              name="BHIM"
            />

          </div>

        </div>

        {/* Help */}

        <div
          className="
            mt-10
            rounded-2xl
            bg-[#1A120B]
            p-5
          "
        >
          <h3 className="font-semibold text-yellow-400">
            Need Help?
          </h3>

          <p className="mt-2 text-sm leading-7 text-gray-400">
            After completing your UPI payment,
            you can contact us for assistance if needed.
          </p>

          <div className="mt-5 space-y-3">

            <div className="flex items-center gap-3">

              <MessageCircle
                size={18}
                className="text-green-400"
              />

              <span className="text-gray-300">
                {paymentConfig.contact.whatsapp}
              </span>

            </div>

            <div className="flex items-center gap-3">

              <Mail
                size={18}
                className="text-blue-400"
              />

              <span className="text-gray-300">
                {paymentConfig.contact.email}
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

const App = ({ icon, name }) => (
  <div
    className="
      flex
      flex-col
      items-center
      gap-2
    "
  >
    {icon}

    <span className="text-xs text-gray-400">
      {name}
    </span>
  </div>
);

export default UPICard;