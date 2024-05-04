const Badge = ({
  children,
  shadow = "shadow-neuGrInner",
  bg = "bg-white",
  className,
}) => {
  return (
    <div
      className={`${shadow} ${bg} px-1.5 py-1 rounded-sm ${
        className && className
      }`}
    >
      {children}
    </div>
  );
};

export default Badge;
