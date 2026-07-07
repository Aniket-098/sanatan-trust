import { motion } from "framer-motion";
import { CheckCircle2, Home } from "lucide-react";
import { Link } from "react-router-dom";

const BookingSuccess = ({ bookingId }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
      rounded-[36px]
      border
      border-yellow-500/20
      bg-[#1A120C]
      p-12
      text-center
      shadow-[0_0_60px_rgba(234,179,8,0.08)]
      "
    >
      <motion.div
        initial={{
          scale: 0,
          rotate: -180,
        }}
        animate={{
          scale: 1,
          rotate: 0,
        }}
        transition={{
          delay: 0.3,
          type: "spring",
          stiffness: 180,
        }}
      >
        <CheckCircle2
          size={90}
          className="mx-auto text-green-400"
        />
      </motion.div>

      <h2 className="mt-8 text-4xl font-bold text-yellow-400">

        Booking Request Submitted

      </h2>

      <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-300">

        Thank you for your booking request.

        Our team will review your request and contact you shortly.

      </p>

      <div
        className="
        mt-10
        rounded-2xl
        border
        border-yellow-500/20
        bg-[#120700]
        p-6
        "
      >
        <p className="text-sm text-gray-400">

          Booking ID

        </p>

        <h3 className="mt-2 text-3xl font-bold tracking-widest text-yellow-400">

          {bookingId}

        </h3>

      </div>

      <Link
        to="/"
        className="
        mt-10
        inline-flex
        items-center
        gap-3
        rounded-xl
        bg-gradient-to-r
        from-orange-500
        to-orange-700
        px-8
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-105
        "
      >
        <Home size={20} />

        Back to Home

      </Link>

    </motion.div>
  );
};

export default BookingSuccess;