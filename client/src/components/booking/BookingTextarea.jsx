const BookingTextarea = ({
  label,
  name,
  placeholder,
  register,
  errors,
}) => {
  return (
    <div className="space-y-2">

      <label
        htmlFor={name}
        className="block text-sm font-medium text-yellow-400"
      >
        {label}
      </label>

      <textarea
        id={name}
        rows={5}
        placeholder={placeholder}
        {...register(name)}
        className="
          w-full
          rounded-xl
          border
          border-yellow-500/20
          bg-[#1A120C]
          px-5
          py-4
          text-white
          outline-none
          transition-all
          focus:border-yellow-400
          placeholder:text-gray-500
        "
      />

      {errors[name] && (
        <p className="text-sm text-red-400">
          {errors[name].message}
        </p>
      )}

    </div>
  );
};

export default BookingTextarea;