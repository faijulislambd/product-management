const Input = ({
  value,
  label,
  type = "text",
  name = "",
  width = "w-full",
}) => {
  return (
    <div className="relative pt-2">
      <input
        type={type}
        name={name}
        value={value && value}
        className={`peer py-2 px-4 border border-slate-200 rounded-sm text-lg ${width} focus:outline-none focus:border-orange-400`}
      />
      <label className="absolute top-4 left-4 text-lg transition-all duration-300 peer-focus:rounded-sm peer-focus:-top-[3px] peer-focus:left-3 peer-focus:text-sm peer-focus:bg-white peer-focus:px-1.5 peer-focus:border peer-focus:border-orange-400">
        {label}
      </label>
    </div>
  );
};

export default Input;
