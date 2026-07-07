import { motion } from "framer-motion";
import { additionalServices } from "../../constants/servicesData";

const AdditionalServices = () => {
  return (
    <section className="py-28">

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-bold text-yellow-600">
          Additional Services
        </h2>

        <p className="text-gray-300 text-xl mt-6">
          More ways we serve our community and support spiritual growth
        </p>
      </motion.div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        {additionalServices.map((service, index) => {

          const Icon = service.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                border
                border-yellow-600
                rounded-2xl
                bg-[#715338]
                p-8
                transition-all
                duration-300
                hover:shadow-[0_0_40px_rgba(202,138,4,0.18)]
              "
            >
              <Icon
                className="text-yellow-600 mb-8"
                size={34}
                strokeWidth={2}
              />

              <h3 className="text-3xl font-bold text-yellow-600 mb-6">
                {service.title}
              </h3>

              <p className="text-gray-200 leading-8">
                {service.description}
              </p>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
};

export default AdditionalServices;