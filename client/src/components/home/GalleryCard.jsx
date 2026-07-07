import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const GalleryCard = ({
  image,
  title,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative overflow-hidden rounded-[32px] cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="
        h-80
        w-full
        object-cover
        duration-500
        group-hover:scale-110
        "
      />

      {/* Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/90
        via-black/20
        to-transparent
        opacity-0
        group-hover:opacity-100
        duration-500
        "
      />

      {/* Content */}

      <div
        className="
        absolute
        bottom-6
        left-6
        right-6
        translate-y-10
        opacity-0
        group-hover:translate-y-0
        group-hover:opacity-100
        duration-500
        "
      >
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <div className="mt-4 flex items-center gap-2 text-yellow-400">
          <Eye size={18} />

          <span>View Image</span>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryCard;