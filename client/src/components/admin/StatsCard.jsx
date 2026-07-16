import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const StatsCard = ({
  title,
  value,
  icon: Icon,
  color,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-700/70
        bg-gradient-to-br
        from-[#111827]
        to-[#1E293B]
        p-6
        shadow-xl
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -right-8
          -top-8
          h-28
          w-28
          rounded-full
          bg-amber-500/10
          blur-3xl
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      <div className="relative z-10 flex items-start justify-between">

        <div>

          <p className="text-sm font-medium tracking-wide text-slate-400">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            {value}
          </h2>

        </div>

        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-slate-800
            ring-1
            ring-slate-700
            transition-all
            duration-300
            group-hover:ring-amber-500/40
            group-hover:scale-110
          "
        >
          <Icon
            size={30}
            className={color}
          />
        </div>

      </div>

      <div className="relative z-10 mt-8 flex items-center justify-between">

        <span className="text-sm text-emerald-400">
          Updated just now
        </span>

        <ArrowUpRight
          size={18}
          className="
            text-slate-500
            transition-all
            duration-300
            group-hover:text-amber-400
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />

      </div>

    </motion.div>
  );
};

export default StatsCard;