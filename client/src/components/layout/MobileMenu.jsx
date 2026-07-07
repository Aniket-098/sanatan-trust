import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

import { navLinks } from "../../constants/navigation";
import useActiveSection from "../../hooks/useActiveSection";

const MobileMenu = ({ isOpen, onClose }) => {
  const activeSection = useActiveSection();

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
          />

          {/* Menu */}

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="
              fixed
              top-0
              right-0
              h-screen
              w-[300px]
              bg-[#140A05]
              border-l
              border-yellow-500/20
              z-50
              flex
              flex-col
              px-8
              py-8
            "
          >
            {/* Header */}

            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-yellow-500">
                सनातन ट्रस्ट
              </h2>

              <button
                onClick={onClose}
                className="text-white hover:text-yellow-400 duration-300"
              >
                <X size={30} />
              </button>
            </div>

            {/* Links */}

            <ul className="mt-14 space-y-8">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className={`
                      block
                      text-xl
                      duration-300
                      ${
                        activeSection === item.id
                          ? "text-yellow-400"
                          : "text-white hover:text-yellow-400"
                      }
                    `}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Donate */}

            <Link
              to="/donate"
              onClick={onClose}
              className="
    mt-auto
    rounded-xl
    py-4
    text-center
    bg-gradient-to-r
    from-orange-500
    to-orange-700
    text-white
    font-semibold
    shadow-lg
    shadow-orange-700/30
    transition-all
    hover:scale-105
  "
            >
              Donate
            </Link>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
