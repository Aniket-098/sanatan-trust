import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, Landmark } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";

import DonationForm from "../donate/DonationForm";
import { donationAmounts } from "../../constants/donationAmounts";

const donationCards = [
  {
    icon: HeartHandshake,
    title: "Support Annadan",
    text: "Help us provide free meals to devotees and people in need.",
  },
  {
    icon: Landmark,
    title: "Temple Development",
    text: "Contribute towards maintaining and improving temple facilities.",
  },
  {
    icon: ShieldCheck,
    title: "Preserve Dharma",
    text: "Support spiritual education, kathas and religious activities.",
  },
];

const Donation = () => {
  const navigate = useNavigate();
  return (
    <section
      id="donate"
      className="relative overflow-hidden bg-[#1A120B] py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-6xl font-bold text-yellow-500">
            Support Our Mission
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-300">
            Every contribution helps us preserve Sanatan Dharma, organize
            kathas, support education, Annadan Seva, and continue serving
            society.
          </p>
        </motion.div>

        {/* Suggested Donations */}

        <div className="mt-16 flex flex-wrap justify-center gap-5">
          {donationAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => 
                navigate(`/donate?amount=${amount}`)
              }
              className="
              rounded-xl
              border
              border-yellow-600
              bg-[#3A2A1E]
              px-8
              py-4
              text-xl
              font-semibold
              text-yellow-400
              transition
              duration-300
              hover:bg-yellow-500
              hover:text-black
              "
            >
              ₹ {amount}
            </button>
          ))}
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {donationCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
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
                bg-[#2B1E14]
                p-8
                "
              >
                <Icon size={44} className="text-yellow-500" />

                <h3 className="mt-6 text-3xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-300">{item.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}

        <div className="mt-20 text-center">
          <Link to="/donate">
            <Button>Donate Now ❤️</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Donation;
