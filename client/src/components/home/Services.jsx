import { motion } from "framer-motion";

import ServiceRow from "./ServiceRow";
import AdditionalServices from "./AdditionalServices";

import { mainServices } from "../../constants/servicesData";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#5B4534]"
    >
      {/* Header */}

      <div className="bg-[#1C1917] py-28">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center px-6"
        >

          <h2 className="text-7xl font-bold text-yellow-600">

            Our Services

          </h2>

          <p className="mt-8 text-2xl text-gray-300 leading-10">

            Comprehensive programs dedicated to spiritual enlightenment,
            education and community welfare.

          </p>

        </motion.div>

      </div>

      {/* Main Services */}

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-28">

        {mainServices.map((service) => (

          <ServiceRow
            key={service.id}
            title={service.title}
            description={service.description}
            points={service.points}
            Icon={service.icon}
            reverse={service.reverse}
          />

        ))}

      </div>

      {/* Additional Services */}

      <div className="max-w-7xl mx-auto px-6">

        <AdditionalServices />

      </div>

    </section>
  );
};

export default Services;