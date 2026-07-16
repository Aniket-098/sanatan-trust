import { ChevronRight } from "lucide-react";

const SettingCard = ({
  icon: Icon,
  title,
  description,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="
        group
        w-full
        rounded-3xl
        border
        border-slate-700/70
        bg-gradient-to-br
        from-[#111827]
        to-[#1E293B]
        p-6
        text-left
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-amber-500/30
      "
    >
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-amber-500/10
            "
          >
            <Icon
              size={28}
              className="text-amber-400"
            />
          </div>

          <div>

            <h3 className="text-xl font-bold text-white">
              {title}
            </h3>

            <p className="mt-1 text-slate-400">
              {description}
            </p>

          </div>

        </div>

        <ChevronRight
          className="
            text-slate-500
            transition
            group-hover:text-amber-400
            group-hover:translate-x-1
          "
        />

      </div>
    </button>
  );
};

export default SettingCard;