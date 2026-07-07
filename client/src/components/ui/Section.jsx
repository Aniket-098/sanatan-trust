const Section = ({
  id,
  children,
  className = "",
  containerClassName = "",
}) => {
  return (
    <section
      id={id}
      className={`py-28 ${className}`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;