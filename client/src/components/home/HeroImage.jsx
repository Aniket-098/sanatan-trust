import { motion } from "framer-motion";
import maharaj from "../../assets/images/maharaj.jpg";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="relative flex items-center justify-center"
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        h-[500px]
        w-[500px]
        rounded-full
        bg-yellow-500/10
        blur-[150px]
        "
      />

      {/* Outer Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        h-[500px]
        w-[500px]
        rounded-full
        border
        border-yellow-500/10
        "
      />

      {/* Middle Ring */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        h-[420px]
        w-[420px]
        rounded-full
        border
        border-yellow-500/20
        "
      />

      {/* Floating Image */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.04,
        }}
        className="relative z-20"
      >
        <img
          src={maharaj}
          alt="Maharaj"
          className="
          h-[330px]
          w-[330px]
          rounded-full
          object-cover
          border-[8px]
          border-yellow-500/90
          shadow-[0_0_80px_rgba(234,179,8,0.35)]
          transition-all
          duration-500
          "
        />

        {/* Image Glow */}

        <div
          className="
          absolute
          inset-0
          rounded-full
          border
          border-yellow-400/20
          "
        />
      </motion.div>

      {/* Decorative Orb */}

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        right-12
        top-12
        h-5
        w-5
        rounded-full
        bg-yellow-400
        shadow-[0_0_20px_rgba(234,179,8,0.8)]
        "
      />

      {/* Decorative Orb */}

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-16
        left-12
        h-3
        w-3
        rounded-full
        bg-orange-400
        shadow-[0_0_20px_rgba(251,146,60,0.8)]
        "
      />
    </motion.div>
  );
};

export default HeroImage;