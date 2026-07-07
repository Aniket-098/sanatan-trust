import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import SectionTitle from "../ui/SectionTitle";
import GalleryCard from "./GalleryCard";
import { galleryData } from "../../constants/galleryData";

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedImage =
    selectedIndex !== null
      ? galleryData[selectedIndex]
      : null;

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === galleryData.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0
        ? galleryData.length - 1
        : prev - 1
    );
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape")
        setSelectedIndex(null);

      if (e.key === "ArrowRight")
        nextImage();

      if (e.key === "ArrowLeft")
        prevImage();
    };

    window.addEventListener(
      "keydown",
      handleKey
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey
      );
  }, [selectedIndex]);

  return (
    <>
      <section
        id="gallery"
        className="bg-[#241A13] py-28"
      >
        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            badge="Gallery"
            title="Moments of Faith & Service"
            description="A glimpse into our spiritual gatherings, social initiatives and celebrations dedicated to Sanatan Dharma."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {galleryData.map((item, index) => (

              <GalleryCard
                key={item.id}
                image={item.image}
                title={item.title}
                onClick={() =>
                  setSelectedIndex(index)
                }
              />

            ))}

          </div>

        </div>
      </section>

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() =>
              setSelectedIndex(null)
            }
            className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/95
            p-6
            backdrop-blur-lg
            "
          >

            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
              className="relative"
            >
                            {/* Close Button */}

              <button
                onClick={() => setSelectedIndex(null)}
                className="
                absolute
                -top-16
                right-0
                rounded-full
                bg-white/10
                p-3
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-yellow-500
                hover:text-black
                "
              >
                <X size={26} />
              </button>

              {/* Previous */}

              <button
                onClick={prevImage}
                className="
                absolute
                left-[-80px]
                top-1/2
                -translate-y-1/2
                rounded-full
                bg-white/10
                p-4
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-yellow-500
                hover:text-black
                "
              >
                <ChevronLeft size={28} />
              </button>

              {/* Next */}

              <button
                onClick={nextImage}
                className="
                absolute
                right-[-80px]
                top-1/2
                -translate-y-1/2
                rounded-full
                bg-white/10
                p-4
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-yellow-500
                hover:text-black
                "
              >
                <ChevronRight size={28} />
              </button>

              {/* Image */}

              <motion.img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="
                max-h-[80vh]
                rounded-[32px]
                object-contain
                shadow-[0_0_60px_rgba(0,0,0,0.45)]
                "
              />

              {/* Bottom Info */}

              <div
                className="
                mt-6
                flex
                items-center
                justify-between
                "
              >
                <div>

                  <h3 className="text-2xl font-bold text-white">

                    {selectedImage.title}

                  </h3>

                  <p className="mt-2 text-yellow-400">

                    {selectedIndex + 1} / {galleryData.length}

                  </p>

                </div>

                <div
                  className="
                  rounded-full
                  border
                  border-yellow-500/20
                  bg-white/5
                  px-5
                  py-2
                  text-sm
                  text-gray-300
                  backdrop-blur-md
                  "
                >
                  Use ← → keys
                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
};

export default Gallery;