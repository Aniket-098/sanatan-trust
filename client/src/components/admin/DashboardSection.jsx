import { ChevronRight } from "lucide-react";

const DashboardSection = ({
  title,
  icon: Icon,
  children,
  action,
}) => {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-700/70
        bg-gradient-to-br
        from-[#111827]
        to-[#1E293B]
        p-6
        shadow-xl
      "
    >
      <div className="mb-6 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-amber-500/10
            "
          >
            <Icon
              size={24}
              className="text-amber-400"
            />
          </div>

          <h2 className="text-2xl font-bold text-white">
            {title}
          </h2>

        </div>

        {action && (
          <button
            className="
              flex
              items-center
              gap-2
              text-sm
              font-medium
              text-amber-400
              transition
              hover:text-amber-300
            "
          >
            {action}

            <ChevronRight size={16} />
          </button>
        )}

      </div>

      {children}

    </div>
  );
};

export default DashboardSection;