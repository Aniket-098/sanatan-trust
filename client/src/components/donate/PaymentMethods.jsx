import { useState } from "react";
import { CreditCard, QrCode } from "lucide-react";

import RazorpayCard from "./RazorpayCard";
import UPICard from "./UPICard";

const PaymentMethods = ({ onDonate }) => {
  const [method, setMethod] = useState("razorpay");

  const methods = [
    {
      id: "razorpay",
      title: "Razorpay",
      subtitle: "Cards • UPI • Net Banking",
      icon: CreditCard,
    },
    {
      id: "upi",
      title: "UPI QR",
      subtitle: "Google Pay • PhonePe • BHIM",
      icon: QrCode,
    },
  ];

  return (
    <div className="mt-10">

      <h3 className="text-2xl font-bold text-white">
        Choose Payment Method
      </h3>

      <p className="mt-2 text-gray-400">
        Select your preferred payment option.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">

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

        {method === "razorpay" ? (
          <RazorpayCard onDonate={onDonate} />
        ) : (
          <UPICard />
        )}

      </div>

    </div>
  );
};

export default PaymentMethods;