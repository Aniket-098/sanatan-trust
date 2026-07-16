import { Link } from "react-router-dom";
import { navLinks } from "../../constants/navigation";

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

import { useSettings } from "../../context/SettingsContext";

const Footer = () => {
  const { settings } = useSettings();

  const trustName = settings?.general?.trustName || "Sanatan Trust";

  const phone = settings?.contact?.phone || "+91 9876543210";

  const email = settings?.contact?.email || "info@sanatantrust.org";

  const address = settings?.general?.address || "Pune, Maharashtra";

  const facebook = settings?.social?.facebook || "";

  const instagram = settings?.social?.instagram || "";

  const youtube = settings?.social?.youtube || "";

  return (
    <footer className="bg-[#0A0400] border-t border-yellow-600/20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}

          <div>
            <h2 className="text-3xl font-bold text-yellow-500">{trustName}</h2>

            <p className="mt-5 leading-8 text-gray-400">
              Dedicated to preserving Sanatan Dharma through spirituality,
              education and selfless service.
            </p>
          </div>

          {/* Links */}

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-bold text-white">Quick Links</h3>

            <ul className="mt-6 space-y-4">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="
          group
          flex
          items-center
          gap-2
          text-gray-400
          transition-all
          duration-300
          hover:text-yellow-400
          "
                  >
                    <ArrowRight
                      size={15}
                      className="
            -translate-x-2
            opacity-0
            duration-300
            group-hover:translate-x-0
            group-hover:opacity-100
            "
                    />

                    {item.name}
                  </a>
                </li>
              ))}

              <li>
                <Link
                  to="/book-katha"
                  className="
        group
        flex
        items-center
        gap-2
        text-gray-400
        transition-all
        duration-300
        hover:text-yellow-400
        "
                >
                  <ArrowRight
                    size={15}
                    className="
          -translate-x-2
          opacity-0
          duration-300
          group-hover:translate-x-0
          group-hover:opacity-100
          "
                  />
                  Book Katha
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xl font-bold text-white">Contact</h3>

            <div className="mt-6 space-y-5 text-gray-400">
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 transition hover:text-yellow-400"
              >
                <Phone size={18} />
                +91 {phone}
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 transition hover:text-yellow-400"
              >
                <Mail size={18} />
                {email}
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={18} />
                {address}
              </div>
            </div>
          </div>

          {/* Social */}

          <div>
            <h3 className="text-xl font-bold text-white">Follow Us</h3>

            <div className="mt-6 flex gap-5">
              {facebook && (
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook
                    className="
            text-xl
            cursor-pointer
            text-yellow-500
            transition-all
            duration-300
            hover:scale-125
            hover:text-yellow-400
          "
                  />
                </a>
              )}

              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram
                    className="
            text-xl
            cursor-pointer
            text-yellow-500
            transition-all
            duration-300
            hover:scale-125
            hover:text-yellow-400
          "
                  />
                </a>
              )}

              {youtube && (
                <a
                  href={youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube
                    className="
            text-xl
            cursor-pointer
            text-yellow-500
            transition-all
            duration-300
            hover:scale-125
            hover:text-yellow-400
          "
                  />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-yellow-600/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-gray-500">
              © {new Date().getFullYear()} {trustName}. All Rights Reserved.
            </p>

            <Link
              to="/admin/login"
              className="
        text-sm
        text-gray-500
        transition
        hover:text-yellow-400
      "
            >
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
