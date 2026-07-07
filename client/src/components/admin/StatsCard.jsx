import { motion } from "framer-motion";

const StatsCard = ({
  title,
  value,
  icon: Icon,
  color,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
      rounded-2xl
      border
      border-slate-700
      bg-[#111827]
      p-6
      shadow-lg
      "
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-400">

            {title}

          </p>

          <h2 className="mt-2 text-3xl font-bold">

            {value}

          </h2>

        </div>

        <div
          className="
          rounded-xl
          p-4
          bg-slate-800
          "
        >
          <Icon
            size={26}
            className={color}
          />
        </div>

      </div>
    </motion.div>
  );
};

export default StatsCard;