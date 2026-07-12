import { CreditCard } from "lucide-react";

const SectionDivider = () => {
  return (
    <div className="relative my-12">

      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-yellow-500/20" />

      <div className="relative flex justify-center">

        <div
          className="
            flex
            items-center
            gap-3
            rounded-full
            border
            border-yellow-500/20
            bg-[#140A05]
            px-6
            py-3
            shadow-lg
          "
        >
          <CreditCard
            size={18}
            className="text-yellow-400"
          />

          <span className="font-semibold text-yellow-400">
            Choose Payment Method
          </span>

        </div>

      </div>

    </div>
  );
};

export default SectionDivider;