import { Eye, Trash2 } from "lucide-react";

const DonationActions = ({
  donation,
  onView,
  onDelete,
}) => {
  return (
    <div className="flex items-center gap-2">

      <button
        onClick={() => onView(donation)}
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
        onClick={() => onDelete(donation)}
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

export default DonationActions;