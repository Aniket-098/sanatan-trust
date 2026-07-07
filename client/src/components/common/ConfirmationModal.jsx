import { AlertTriangle } from "lucide-react";

const ConfirmationModal = ({
  open,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  loading = false,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">

      <div className="w-full max-w-md rounded-2xl bg-[#111827] p-6 shadow-2xl">

        <div className="flex justify-center">

          <div className="rounded-full bg-red-500/20 p-4">

            <AlertTriangle
              className="text-red-400"
              size={32}
            />

          </div>

        </div>

        <h2 className="mt-6 text-center text-2xl font-bold text-white">
          {title}
        </h2>

        <p className="mt-3 text-center leading-7 text-slate-400">
          {message}
        </p>

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onCancel}
            disabled={loading}
            className="
              rounded-xl
              border
              border-slate-600
              px-5
              py-2.5
              text-white
              transition
              hover:bg-slate-700
            "
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="
              rounded-xl
              bg-red-600
              px-5
              py-2.5
              font-semibold
              text-white
              transition
              hover:bg-red-700
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loading ? "Deleting..." : confirmText}
          </button>

        </div>

      </div>

    </div>
  );
};

export default ConfirmationModal;