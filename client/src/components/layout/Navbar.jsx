import { useState } from "react";
import { Menu } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

import { navLinks } from "../../constants/navigation";
import useScroll from "../../hooks/useScroll";
import useActiveSection from "../../hooks/useActiveSection";

import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const scrolled = useScroll();
  const activeSection = useActiveSection();
  const location = useLocation();
  
  const currentSection = location.pathname === "/" ? activeSection : "";

  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <>
      <nav
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-500
          border-b
          border-yellow-600/20
          ${
            scrolled
              ? "bg-[#140A05]/85 backdrop-blur-xl shadow-2xl py-2"
              : "bg-[#0A0400]/80 backdrop-blur-md py-4"
          }
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

          {/* Logo */}

          <div className="flex flex-col">

            <h1 className="text-xl font-bold tracking-wide text-yellow-500">
              सनातन ट्रस्ट
            </h1>

            <span className="text-xs uppercase tracking-[3px] text-orange-400">
              Dharma • Seva • Sanskar
            </span>

          </div>

          {/* Desktop Navigation */}

          <ul className="hidden lg:flex gap-8 text-[#FFF8E7]">

            {navLinks.map((item) => (

              <li key={item.id}>

                <a
                  href={item.href}
                  className={`
                    relative
                    pb-2
                    transition-all
                    duration-300
                    ${
                      currentSection === item.id
                        ? "text-yellow-400"
                        : "text-[#FFF8E7] hover:text-yellow-400"
                    }
                  `}
                >
                  {item.name}

                  <span
                    className={`
                      absolute
                      left-0
                      -bottom-1
                      h-[2px]
                      bg-yellow-400
                      transition-all
                      duration-300
                      ${
                        currentSection === item.id
                          ? "w-full"
                          : "w-0"
                      }
                    `}
                  />

                </a>

              </li>

            ))}

          </ul>

          {/* Desktop Donate */}

          <Link to="/donate">
          <button
            className="
              hidden
              lg:block
              rounded-xl
              bg-gradient-to-r
              from-orange-500
              to-orange-700
              px-6
              py-2.5
              font-semibold
              text-white
              shadow-lg
              shadow-orange-700/30
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:scale-105
              hover:shadow-orange-500/60
              active:scale-95
            "
          >
            Donate
          </button>
          </Link>

          {/* Mobile Hamburger */}

          <button
            onClick={() => setIsOpen(true)}
            className="
              lg:hidden
              rounded-lg
              p-2
              text-white
              transition
              hover:bg-white/10
            "
            aria-label="Open menu"
          >
            <Menu size={30} />
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default Navbar;