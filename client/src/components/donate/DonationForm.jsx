import { useState } from "react";
import { HeartHandshake } from "lucide-react";
import toast from "react-hot-toast";
import { createDonationOrder, verifyDonation } from "../../api/donateApi";
import { useNavigate } from "react-router-dom";

import PaymentMethods from "./PaymentMethods";
import DonationSummary from "./DonationSummary";
import AmountSelector from "./AmountSelector";

const DonationForm = ({
  formData,
  setFormData,
  selectedAmount,
  setSelectedAmount,
  donationSettings,
  loadingSettings,
}) => {
  const navigate = useNavigate();

  const [customAmount, setCustomAmount] = useState("");

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.donorName.trim()) {
      newErrors.donorName = "Full name is required.";
    } else if (formData.donorName.trim().length < 3) {
      newErrors.donorName = "Name must contain at least 3 characters.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number.";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleDonate = async () => {
    if (!validateForm()) return;

    if (selectedAmount < 10) {
      toast.error("Minimum donation amount is ₹10.");
      return;
    }

    try {
      const { data } = await createDonationOrder(selectedAmount);

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: data.order.amount,

        currency: data.order.currency,

        name: "Sanatan Trust",

        description: "Donation",

        order_id: data.order.id,

        prefill: {
          name: formData.donorName,
          email: formData.email,
          contact: formData.phone,
        },

        theme: {
          color: "#EAB308",
        },

        modal: {
          ondismiss: function () {
            console.log("Checkout closed");
          },
        },

        handler: async function (response) {
          try {
            const { data } = await verifyDonation({
              razorpay_order_id: response.razorpay_order_id,

              razorpay_payment_id: response.razorpay_payment_id,

              razorpay_signature: response.razorpay_signature,

              donorName: formData.donorName,

              email: formData.email,

              phone: formData.phone,

              purpose: formData.purpose,

              amount: selectedAmount,
            });

            navigate("/donation-success", {
              replace: true,
              state: {
                donation: data.donation,
              },
            });
          } catch (error) {
            console.error(error);

            toast.error("Payment verification failed.");
          }
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", function (response) {
        console.error(response.error);

        toast.error("Payment failed.");
      });

      razorpay.open();
    } catch (error) {
      console.error(error);

      toast.error("Unable to start payment.");
    }
  };

  return (
    <div
      className="
        rounded-3xl
        border
        border-yellow-600/30
        bg-gradient-to-br
        from-[#2B1E14]
        to-[#1A120B]
        p-8
        shadow-2xl
      "
    >
      {/* Header */}

      <div className="mb-8 text-center">
        <div className="mb-6 flex justify-center">
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-yellow-500/10
              ring-1
              ring-yellow-500/20
            "
          >
            <HeartHandshake size={32} className="text-yellow-400" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white">Make a Donation</h2>

        <p className="mt-2 text-gray-400">
          Every contribution makes a difference.
        </p>
        <p className="mt-4 text-sm text-yellow-400">
          Secure • Transparent • Trusted
        </p>
      </div>

      {/* Form */}

      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Full Name <span className="text-red-400">*</span>
          </label>

          <input
            type="text"
            name="donorName"
            placeholder="Enter your full name"
            value={formData.donorName}
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              border
              border-slate-600
              bg-[#1E140D]
              p-4
              text-white
              outline-none
              transition
              focus:border-yellow-500
            "
          />
        </div>

        {errors.donorName && (
          <p className="mt-2 text-sm text-red-400">{errors.donorName}</p>
        )}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              border
              border-slate-600
              bg-[#1E140D]
              p-4
              text-white
              outline-none
              transition
              focus:border-yellow-500
            "
          />
        </div>

        {errors.email && (
          <p className="mt-2 text-sm text-red-400">{errors.email}</p>
        )}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Mobile Number <span className="text-red-400">*</span>
          </label>

          <input
            type="text"
            name="phone"
            placeholder="Enter your mobile number"
            value={formData.phone}
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              border
              border-slate-600
              bg-[#1E140D]
              p-4
              text-white
              outline-none
              transition
              focus:border-yellow-500
            "
          />
        </div>

        {errors.phone && (
          <p className="mt-2 text-sm text-red-400">{errors.phone}</p>
        )}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Purpose (Optional)
          </label>

          <textarea
            rows="4"
            name="purpose"
            placeholder="Example: Annadan Seva"
            value={formData.purpose}
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              border
              border-slate-600
              bg-[#1E140D]
              p-4
              text-white
              outline-none
              transition
              focus:border-yellow-500
            "
          />
        </div>
      </div>

      {/* Amount Selector */}

      <div className="mt-8">
        <AmountSelector
          selectedAmount={selectedAmount}
          setSelectedAmount={setSelectedAmount}
          customAmount={customAmount}
          setCustomAmount={setCustomAmount}
        />
      </div>

      {/* Donation Summary */}

      <DonationSummary amount={selectedAmount} />

      {/* Donate Button */}

      <PaymentMethods
        onDonate={handleDonate}
        donationSettings={donationSettings}
        loadingSettings={loadingSettings}
      />

      <p className="mt-5 text-center text-sm text-gray-400">
        🔒 Secured by Razorpay
      </p>
    </div>
  );
};

export default DonationForm;
