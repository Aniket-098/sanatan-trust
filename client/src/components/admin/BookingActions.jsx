import { Check, X, Eye, Trash2 } from "lucide-react";

const BookingActions = ({ booking, onStatusChange, onView, onDelete }) => {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => onView(booking)}
        className="
          rounded-lg
          p-2
          text-blue-400
          transition
          hover:bg-blue-500/10
        "
      >
        <Eye size={18} />
      </button>

      <button
        onClick={() => onStatusChange(booking._id, "Approved")}
        className="
          rounded-lg
          p-2
          text-green-400
          transition
          hover:bg-green-500/10
        "
      >
        <Check size={18} />
      </button>

      <button
        onClick={() => onStatusChange(booking._id, "Rejected")}
        className="
          rounded-lg
          p-2
          text-red-400
          transition
          hover:bg-red-500/10
        "
      >
        <X size={18} />
      </button>

      <button
        onClick={() => onDelete(booking)}
        className="
          rounded-lg
          p-2
          text-red-500
          transition
          hover:bg-red-500/10
        "
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default BookingActions;
