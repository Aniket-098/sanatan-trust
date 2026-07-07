import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#120A06] py-32"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-yellow-500/10
          blur-[180px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-yellow-500/30
            bg-yellow-500/10
            px-5
            py-2
            text-sm
            font-medium
            text-yellow-400
            "
          >
            <CalendarDays size={16} />
            Book Spiritual Events
          </span>

          <h2
            className="
            mt-8
            text-5xl
            font-bold
            leading-tight
            text-white
            md:text-6xl
            "
          >
            Invite Divine Wisdom
            <br />
            <span className="text-yellow-500">To Your Community</span>
          </h2>

          <p
            className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-9
            text-gray-300
            "
          >
            Organize Bhagavat Katha, Ram Katha, spiritual discourses and
            religious celebrations with the blessings and guidance of Acharya
            Shri Atul Ji Maharaj.
          </p>

          <div
            className="
            mt-14
            flex
            flex-col
            items-center
            justify-center
            gap-5
            sm:flex-row
            "
          >
            <Link to="/book-katha">
              <Button>
                Book Your Katha
                <ArrowRight className="ml-2 inline" size={18} />
              </Button>
            </Link>

            <a href="#contact">
              <Button variant="outline">Contact Us</Button>
            </a>
          </div>

          <p
            className="
            mt-10
            text-sm
            tracking-wide
            text-gray-500
            "
          >
            Trusted by hundreds of devotees across Maharashtra.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
