import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { IoMdClose } from "react-icons/io";
const Modal = ({ children, close, title = "Modal Title" }) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.1,
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "300px",
      opacity: 0,
    },
  };

  return (
    <Backdrop onClick={close}>
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-full max-w-screen-md mx-auto bg-white rounded-md"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="p-4 relative border-b border-slate-300">
          <h3 className="text-center font-freeman text-2xl">{title}</h3>
          <button
            type="button"
            onClick={close}
            className="p-1 rounded-sm transition-colors duration-300 bg-rose-400/75 hover:bg-rose-400 absolute top-1/2 -translate-y-1/2 right-4"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="p-4">{children}</div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
