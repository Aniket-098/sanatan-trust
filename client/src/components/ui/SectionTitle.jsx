import { motion } from "framer-motion";

const SectionTitle = ({
  badge,
  title,
  description,
  center = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`mb-20 ${
        center ? "text-center" : ""
      }`}
    >
      {badge && (
        <p className="uppercase tracking-[6px] text-orange-400 font-medium">
          {badge}
        </p>
      )}

      <h2 className="mt-5 text-5xl md:text-6xl font-bold text-yellow-500">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300 leading-8">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;