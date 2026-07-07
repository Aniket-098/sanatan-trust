import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="max-w-2xl"
    >
      {/* Badge */}

      <div
        className="
        inline-flex
        items-center
        rounded-full
        border
        border-yellow-500/20
        bg-yellow-500/10
        px-5
        py-2
        text-sm
        font-medium
        tracking-[3px]
        text-yellow-400
        "
      >
        ॥ श्री हरि कृपा ॥
      </div>

      {/* Heading */}

      <h1
        className="
        mt-8
        text-5xl
        font-bold
        leading-tight
        text-white
        md:text-6xl
        lg:text-7xl
        "
      >
        सनातन संस्कृति
        <br />
        <span className="text-yellow-500">एवं जनकल्याण</span>
        <br />
        सेवाश्रम ट्रस्ट
      </h1>

      {/* Description */}

      <p
        className="
        mt-8
        max-w-xl
        text-xl
        leading-9
        text-gray-300
        "
      >
        धर्म की जय हो।
        <br />
        सेवा, संस्कार और आध्यात्मिक ज्ञान के माध्यम से समाज कल्याण हेतु समर्पित।
      </p>

      {/* Buttons */}

      <div
        className="
        mt-12
        flex
        flex-wrap
        gap-5
        "
      >
        <Link to="/book-katha">
          <Button>
            कथा बुक करें
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </Link>

        <Link to="/donate">
          <Button variant="outline">दान करें</Button>
        </Link>
      </div>

      {/* Trust Text */}

      <p
        className="
        mt-10
        text-sm
        tracking-wide
        text-gray-500
        "
      >
        Preserving Sanatan Dharma through Seva, Sanskar & Spiritual Wisdom.
      </p>
    </motion.div>
  );
};

export default HeroContent;
