import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { testimonials } from "../../constants/testimonialsData";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-[#241A13] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          badge="Testimonials"
          title="What Devotees Say"
          description="Experiences shared by people who have participated in our spiritual programs and social initiatives."
        />

        <div className="grid gap-8 md:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="
              rounded-3xl
              border
              border-yellow-600/30
              bg-[#3A2A1E]
              p-8
              "
            >

              <div className="flex gap-1 text-yellow-500">

                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    size={18}
                    fill="currentColor"
                  />
                ))}

              </div>

              <p className="mt-6 leading-8 text-gray-300">

                "{item.text}"

              </p>

              <div className="mt-8">

                <h3 className="text-2xl font-bold text-white">

                  {item.name}

                </h3>

                <p className="text-yellow-500">

                  {item.city}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;