const BookingInput = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  rules,
  errors,
  ...props
}) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-yellow-400"
      >
        {label}
      </label>

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        {...props}
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
          duration-300
          placeholder:text-gray-500
          ${
            errors[name]
              ? "border-red-500"
              : "border-yellow-500/20 focus:border-yellow-400"
          }
        `}
      />

      {errors[name] ? (
  <p className="text-sm text-red-400">
    {errors[name].message}
  </p>
) : (
  name === "time" && (
    <p className="text-sm text-slate-400">
      Your device may display time in 12-hour (AM/PM) or 24-hour format.
    </p>
  )
)}
    </div>
  );
};

export default BookingInput;