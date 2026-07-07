import { motion } from "framer-motion";
import { FaHandsHelping, FaOm, FaPrayingHands } from "react-icons/fa";
import aboutImage from "../../assets/images/about.png";
import Button from "../ui/Button";

const features = [
  {
    icon: <FaOm size={28} />,
    title: "सनातन धर्म",
    description: "सनातन संस्कृति का संरक्षण और प्रचार।",
  },
  {
    icon: <FaPrayingHands size={28} />,
    title: "आध्यात्मिक मार्गदर्शन",
    description: "कथा, प्रवचन एवं धार्मिक कार्यक्रम।",
  },
  {
    icon: <FaHandsHelping size={28} />,
    title: "समाज सेवा",
    description: "जरूरतमंदों की सेवा एवं जनकल्याण।",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-[#0A0400] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src={aboutImage}
                alt="About"
                className="rounded-3xl shadow-2xl"
              />

              <div className="absolute -bottom-6 -right-6 bg-orange-600 rounded-2xl p-8 shadow-xl">
                <h2 className="text-5xl font-bold text-white">25+</h2>

                <p className="text-white mt-2">Years of Service</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[5px] text-orange-400">
              ABOUT TRUST
            </p>

            <h2 className="text-5xl font-bold text-yellow-400 mt-5 leading-tight">
              Serving Society Through Dharma
            </h2>

            <p className="mt-8 text-gray-300 leading-8">
              Our trust is dedicated to preserving Sanatan Dharma, spreading
              spiritual knowledge, and serving society through religious events,
              educational initiatives, and humanitarian activities.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="
                  rounded-2xl
                  border
                  border-yellow-500/10
                  bg-white/5
                  backdrop-blur-md
                  p-6
                  hover:border-yellow-500/40
                  duration-300
                  "
                >
                  <div className="text-yellow-400">{item.icon}</div>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="#contact">
                <Button>Learn More</Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
