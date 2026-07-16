import { useEffect, useMemo, useState } from "react";
import {
  CreditCard,
  QrCode,
  AlertCircle,
} from "lucide-react";

import RazorpayCard from "./RazorpayCard";
import UPICard from "./UPICard";

const PaymentMethods = ({
  onDonate,
  donationSettings,
  loadingSettings,
}) => {
  const methods = useMemo(() => {
    if (!donationSettings) return [];

    const list = [];

    if (donationSettings.razorpayEnabled) {
      list.push({
        id: "razorpay",
        title: "Razorpay",
        subtitle: "Cards • UPI • Net Banking",
        icon: CreditCard,
      });
    }

    if (donationSettings.upiEnabled) {
      list.push({
        id: "upi",
        title: "UPI QR",
        subtitle: "Google Pay • PhonePe • BHIM",
        icon: QrCode,
      });
    }

    return list;
  }, [donationSettings]);

  const [method, setMethod] = useState("");

  useEffect(() => {
    if (methods.length > 0) {
      setMethod(methods[0].id);
    }
  }, [methods]);

  if (loadingSettings) {
    return (
      <div className="mt-10 rounded-2xl border border-yellow-500/10 bg-[#1A120B] p-6 text-center text-gray-400">
        Loading payment methods...
      </div>
    );
  }

  if (methods.length === 0) {
    return (
      <div className="mt-10 rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center">
        <AlertCircle
          size={42}
          className="mx-auto text-red-400"
        />

        <h3 className="mt-4 text-xl font-bold text-white">
          Online Donations Unavailable
        </h3>

        <p className="mt-3 leading-7 text-gray-400">
          Online payment methods are currently disabled.
          Please contact the trust directly if you wish to
          make a contribution.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold text-white">
        Choose Payment Method
      </h3>

      <p className="mt-2 text-gray-400">
        Select your preferred payment option.
      </p>

      <div
        className={`mt-8 grid gap-5 ${
          methods.length === 1
            ? "grid-cols-1"
            : "md:grid-cols-2"
        }`}
      >
        {methods.map((item) => {
          const Icon = item.icon;

          const active = method === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setMethod(item.id)}
              className={`
                rounded-2xl
                border
                p-6
                text-left
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-[1.02]
                ${
                  active
                    ? "border-yellow-500 bg-yellow-500/10 shadow-lg shadow-yellow-500/10"
                    : "border-yellow-500/10 bg-[#1A120B] hover:border-yellow-500/30"
                }
              `}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    ${
                      active
                        ? "bg-yellow-500 text-black"
                        : "bg-[#24160F] text-yellow-400"
                    }
                  `}
                >
                  <Icon size={28} />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-sm text-gray-400">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-10">
        {method === "razorpay" && (
          <RazorpayCard onDonate={onDonate} />
        )}

        {method === "upi" && (
          <UPICard
            upiId={donationSettings.upiId}
            qrCode={donationSettings.qrCode}
          />
        )}
      </div>
    </div>
  );
};

export default PaymentMethods;