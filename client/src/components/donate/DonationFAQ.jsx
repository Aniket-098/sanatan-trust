import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Is my donation secure?",
    a: "Yes. All online payments are securely processed through Razorpay using encrypted payment technology.",
  },
  {
    q: "Will I receive a confirmation?",
    a: "Yes. You will receive an email confirmation after a successful donation.",
  },
  {
    q: "Can I donate using UPI?",
    a: "Yes. You can either pay through Razorpay or scan our UPI QR code.",
  },
  {
    q: "How are donations utilized?",
    a: "Your donations support spiritual activities, Annadan Seva, temple development, education and charitable initiatives.",
  },
];

const DonationFAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="mt-24">

      <h2 className="text-center text-4xl font-bold text-yellow-400">
        Frequently Asked Questions
      </h2>

      <div className="mx-auto mt-10 max-w-4xl space-y-5">

        {faqs.map((item, index) => (
          <div
            key={index}
            className="
              rounded-2xl
              border
              border-yellow-500/10
              bg-[#24160F]
            "
          >
            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="
                flex
                w-full
                items-center
                justify-between
                p-6
                text-left
              "
            >
              <span className="font-semibold text-white">
                {item.q}
              </span>

              <ChevronDown
                className={`transition ${
                  open === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {open === index && (
              <div className="px-6 pb-6 leading-8 text-gray-400">
                {item.a}
              </div>
            )}

          </div>
        ))}

      </div>

    </div>
  );
};

export default DonationFAQ;