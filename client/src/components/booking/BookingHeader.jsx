import { motion } from "framer-motion";
import { BookOpen, CalendarHeart } from "lucide-react";

const BookingHeader = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0400] pt-36 pb-24">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[160px]" />

        <div className="absolute right-0 top-0 h-[400px] w-[400px] bg-orange-500/10 blur-[140px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          <div className="inline-flex items-center gap-3 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-6 py-3">

            <BookOpen
              size={18}
              className="text-yellow-400"
            />

            <span className="tracking-[3px] uppercase text-sm text-yellow-400">

              Spiritual Booking

            </span>

          </div>

          <h1 className="mt-8 text-5xl font-bold text-yellow-400 md:text-7xl">

            Book Your Katha

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-gray-300">

            Invite our Acharyas for
            <span className="text-yellow-400">
              {" "}Bhagavat Katha{" "}
            </span>

            ,
            <span className="text-yellow-400">
              {" "}Ram Katha{" "}
            </span>

            ,
            spiritual discourses, devotional events and
            religious ceremonies.

          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-6">

            <div className="flex items-center gap-3 rounded-xl border border-yellow-500/20 bg-white/5 px-6 py-4">

              <CalendarHeart
                className="text-yellow-400"
              />

              <span className="text-white">

                Flexible Scheduling

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-xl border border-yellow-500/20 bg-white/5 px-6 py-4">

              <BookOpen
                className="text-yellow-400"
              />

              <span className="text-white">

                Multiple Katha Types

              </span>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default BookingHeader;