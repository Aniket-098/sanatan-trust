const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base = `
    inline-flex
    items-center
    justify-center
    rounded-2xl
    px-8
    py-4
    font-semibold
    transition-all
    duration-300
    active:scale-95
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-gradient-to-r
      from-orange-500
      to-orange-700
      text-white
      shadow-lg
      shadow-orange-700/30
      hover:-translate-y-1
      hover:scale-105
      hover:shadow-orange-500/50
    `,

    outline: `
      border
      border-yellow-500
      text-yellow-500
      hover:bg-yellow-500
      hover:text-[#120A06]
      hover:-translate-y-1
      hover:shadow-lg
      hover:shadow-yellow-500/30
    `,
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;