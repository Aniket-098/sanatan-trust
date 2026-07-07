import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const ServiceRow = ({
  title,
  description,
  points,
  Icon,
  reverse = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`grid items-center gap-20 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* LEFT CONTENT */}

      <div className="max-w-xl">

        {/* Small Icon */}

        <div
          className="
          mb-8
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          border
          border-yellow-500/20
          bg-yellow-500/10
          text-yellow-500
          shadow-[0_0_30px_rgba(234,179,8,0.12)]
          "
        >
          <Icon size={34} strokeWidth={1.8} />
        </div>

        {/* Title */}

        <h2 className="text-5xl font-bold leading-tight text-white">
          {title}
        </h2>

        {/* Description */}

        <p className="mt-8 text-lg leading-9 text-gray-300">
          {description}
        </p>

        {/* Points */}

        <ul className="mt-10 space-y-5">

          {points.map((point, index) => (

            <motion.li
              key={index}
              whileHover={{ x: 8 }}
              className="flex items-start gap-4 text-gray-200"
            >

              <CheckCircle2
                size={20}
                className="mt-1 shrink-0 text-yellow-500"
              />

              <span>{point}</span>

            </motion.li>

          ))}

        </ul>

      </div>

      {/* RIGHT CARD */}

      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{
          duration: 0.35,
        }}
        className="
        relative
        flex
        h-[460px]
        items-center
        justify-center
        overflow-hidden
        rounded-[36px]
        border
        border-yellow-500/20
        bg-gradient-to-br
        from-[#5E432C]
        via-[#4A3525]
        to-[#2D1D14]
        shadow-[0_0_60px_rgba(234,179,8,0.08)]
        "
      >
        {/* Glow */}

        <div
          className="
          absolute
          h-72
          w-72
          rounded-full
          bg-yellow-500/10
          blur-[90px]
          "
        />

        {/* Decorative Ring */}

        <div
          className="
          absolute
          h-72
          w-72
          rounded-full
          border
          border-yellow-500/10
          "
        />

        <motion.div
          animate={{
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <Icon
            size={170}
            strokeWidth={1.1}
            className="text-yellow-400"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceRow;