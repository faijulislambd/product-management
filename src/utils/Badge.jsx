const Badge = ({ children, bg = "bg-slate-200", className }) => {
  return (
    <div
      className={`transition-colors duration-500 shadow ${bg} px-1.5 py-1 rounded-sm ${
        className && className
      }`}
    >
      {children}
    </div>
  );
};

export default Badge;
