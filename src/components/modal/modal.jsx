import { color, motion } from "framer-motion";
import Scrollable2 from "../favoritelist/favoritelist";
import Backdrop from "../backdrop/backdrop";
import "../modal/modal.css";

function Modal({ handleClose, favorites }) {
  const dropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: { y: "100vh", opacity: 0 },
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {favorites.length > 0 ? (
          <Scrollable2 favorites={favorites} />
        ) : (
          <p style={{ color: "black" }}>No movies in favorites</p>
        )}
      </motion.div>
    </Backdrop>
  );
}

export default Modal;
