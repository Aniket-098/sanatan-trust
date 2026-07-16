const SettingsInput = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <div>

      <label className="mb-2 block font-medium text-slate-300">
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="
          w-full
          rounded-2xl
          border
          border-slate-700
          bg-[#111827]
          px-5
          py-4
          text-white
          outline-none
          transition
          focus:border-amber-500
        "
      />

    </div>
  );
};

export default SettingsInput;