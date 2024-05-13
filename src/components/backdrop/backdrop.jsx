import { motion } from "framer-motion";
import "./backdrop.css";
const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h5>YOUR FAVORITES</h5>
      {children}
    </motion.div>
  );
};
export default Backdrop;
