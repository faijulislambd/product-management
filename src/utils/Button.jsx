import { motion } from "framer-motion";

const Button = ({
  onClick = (e) => {
    e.preventDefault();
  },
  children,
  className,
}) => {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-4 py-2 shadow-md rounded-full transition-colors duration-300 border-2 border-black/25 bg-white/25 backdrop-blur-sm text-black hover:bg-orange-500 focus:bg-orange-500 ${className} uppercase font-freeman`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
