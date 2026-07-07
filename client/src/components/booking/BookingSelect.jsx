const BookingSelect = ({
  label,
  name,
  register,
  rules,
  errors,
  options,
}) => {
  return (
    <div className="space-y-2">

      <label
        htmlFor={name}
        className="block text-sm font-medium text-yellow-400"
      >
        {label}
      </label>

      <select
        id={name}
        {...register(name, rules)}
        className={`
          w-full
          rounded-xl
          border
          bg-[#1A120C]
          px-5
          py-4
          text-white
          outline-none
          transition-all
          ${
            errors[name]
              ? "border-red-500"
              : "border-yellow-500/20 focus:border-yellow-400"
          }
        `}
      >
        <option value="">Select an option</option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}

      </select>

      {errors[name] && (
        <p className="text-sm text-red-400">
          {errors[name].message}
        </p>
      )}

    </div>
  );
};

export default BookingSelect;