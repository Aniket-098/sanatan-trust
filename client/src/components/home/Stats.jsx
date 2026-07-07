import { motion } from "framer-motion";
import CountUpModule from "react-countup";

const CountUp = CountUpModule.default ?? CountUpModule;

const stats = [
  {
    end: 25,
    suffix: "+",
    title: "Years",
    subtitle: "Serving Dharma",
  },
  {
    end: 500,
    suffix: "+",
    title: "Kathas",
    subtitle: "Successfully Completed",
  },
  {
    end: 50,
    suffix: "K+",
    title: "Devotees",
    subtitle: "Connected Worldwide",
  },
  {
    end: 100,
    suffix: "%",
    title: "Commitment",
    subtitle: "To Sanatan Values",
  },
];

const Stats = () => {
  return (
    <section className="relative overflow-hidden bg-[#120700] py-28">
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-yellow-500/5
            blur-[150px]
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                rounded-3xl
                border
                border-yellow-500/10
                bg-white/5
                backdrop-blur-xl
                p-10
                text-center
                transition-all
                duration-500
                hover:border-yellow-500/40
                hover:bg-white/10
                hover:shadow-[0_0_35px_rgba(234,179,8,0.12)]
              "
            >
              <h2 className="text-5xl font-bold text-yellow-400">
                <CountUp
                  end={item.end}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {item.suffix}
              </h2>

              <h3 className="mt-5 text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-300 leading-7">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
