const Input = ({
  value,
  label,
  labelColor = "text-black",
  type = "text",
  name = "",
  width = "w-full",
  shadow = "shadow-neuGr",
}) => {
  return (
    <div className="relative pt-7">
      <input
        type={type}
        name={name}
        value={value && value}
        className={`peer py-2 px-4 border border-slate-200 rounded-md text-lg ${width} ${shadow} focus:outline-none focus:border-slate-400`}
      />
      <label
        className={`absolute top-9 left-4 pointer-events-none text-lg transition-all duration-300 text-slate-400 peer-focus:rounded-sm peer-focus:top-0 peer-focus:left-0 peer-focus:text-sm peer-focus:pointer-events-auto peer-focus:${labelColor}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
