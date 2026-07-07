import { donationAmounts } from "../../constants/donationAmounts";

const AmountSelector = ({
  selectedAmount,
  setSelectedAmount,
  customAmount,
  setCustomAmount,
}) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white">
        Select Donation Amount
      </h3>

      {/* Preset Amounts */}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {donationAmounts.map((amount) => (
          <button
            key={amount}
            type="button"
            onClick={() => {
              setSelectedAmount(amount);
              setCustomAmount("");
            }}
            className={`
              rounded-xl
              border
              px-5
              py-3
              font-semibold
              transition-all
              duration-300

              ${
                selectedAmount === amount &&
                customAmount === ""
                  ? "border-yellow-400 bg-yellow-500 text-black"
                  : "border-yellow-600 bg-[#3A2A1E] text-yellow-400 hover:bg-yellow-500 hover:text-black"
              }
            `}
          >
            ₹ {amount}
          </button>
        ))}
      </div>

      {/* Divider */}

      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-700" />

        <span className="text-sm text-slate-400">
          OR
        </span>

        <div className="h-px flex-1 bg-slate-700" />
      </div>

      {/* Custom Amount */}

      <div>

        <label className="mb-2 block text-sm font-medium text-gray-300">
          Enter Custom Amount
        </label>

        <input
          type="number"
          min="10"
          value={customAmount}
          placeholder="Enter donation amount"
          onWheel={(e) => e.target.blur()}
          onChange={(e) => {
            const value = e.target.value;

            setCustomAmount(value);

            if (value === "") {
              setSelectedAmount(0);
            } else {
              setSelectedAmount(Number(value));
            }
          }}
          className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-[#1A120B]
            px-5
            py-4
            text-lg
            text-white
            outline-none
            transition
            focus:border-yellow-500
          "
        />

        <p className="mt-2 text-sm text-slate-400">
          Minimum donation amount is ₹10.
        </p>

      </div>
    </div>
  );
};

export default AmountSelector;