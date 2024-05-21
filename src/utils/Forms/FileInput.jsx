import { BiCloudUpload } from "react-icons/bi";

const FileInput = ({
  name = "ProductImage",
  multiple = false,
  accept = "*",
}) => {
  return (
    <label
      htmlFor={name}
      className="relative w-full flex items-center justify-center transition-colors duration-300 border border-slate-200 rounded-md text-lg shadow-xl focus:border-slate-400 p-12 cursor-pointer hover:border-orange-400 hover:bg-orange-200 "
    >
      <input
        type="file"
        name={name}
        id={name}
        multiple={multiple}
        accept={accept}
        className="absolute top-0 left-0 flex w-full h-full opacity-0 cursor-pointer peer"
      />
      <div className="flex space-x-3 transition-colors duration-300 border border-slate-400 rounded-full py-3 px-5 items-center peer-hover:bg-orange-400 peer-hover:border-orange-500">
        <BiCloudUpload className="text-3xl" />
        <span className="text-xl uppercase font-freeman">Upload File</span>
      </div>
    </label>
  );
};

export default FileInput;
