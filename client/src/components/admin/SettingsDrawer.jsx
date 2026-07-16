import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const SettingsDrawer = ({
  open,
  title,
  description,
  children,
  onClose,
  onSave,
  loading = false,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}

          <motion.aside
            initial={{ x: 550 }}
            animate={{ x: 0 }}
            exit={{ x: 550 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="
              fixed
              right-0
              top-0
              z-50
              flex
              h-screen
              w-full
              max-w-xl
              flex-col
              border-l
              border-slate-700
              bg-[#0F172A]
              shadow-2xl
            "
          >
            {/* Header */}

            <div
              className="
                border-b
                border-slate-700
                bg-[#111827]
                px-8
                py-6
              "
            >
              <div className="flex items-start justify-between">

                <div>

                  <h2 className="text-3xl font-bold text-white">
                    {title}
                  </h2>

                  {description && (
                    <p className="mt-2 text-slate-400">
                      {description}
                    </p>
                  )}

                </div>

                <button
                  onClick={onClose}
                  className="
                    rounded-xl
                    p-2
                    transition
                    hover:bg-slate-800
                  "
                >
                  <X />
                </button>

              </div>
            </div>

            {/* Body */}

            <div className="flex-1 overflow-y-auto p-8">
              {children}
            </div>

            {/* Footer */}

            <div
              className="
                border-t
                border-slate-700
                bg-[#111827]
                px-8
                py-5
              "
            >
              <div className="flex justify-end gap-4">

                <button
                  onClick={onClose}
                  className="
                    rounded-xl
                    border
                    border-slate-700
                    px-6
                    py-3
                    font-medium
                    transition
                    hover:bg-slate-800
                  "
                >
                  Cancel
                </button>

                <button
                  onClick={onSave}
                  disabled={loading}
                  className="
                    rounded-xl
                    bg-gradient-to-r
                    from-amber-400
                    to-orange-500
                    px-8
                    py-3
                    font-semibold
                    text-black
                    transition
                    hover:scale-[1.02]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>

              </div>
            </div>

          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default SettingsDrawer;