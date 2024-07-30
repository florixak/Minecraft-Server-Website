import ScrollToTop from "react-scroll-to-top";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { SlideUp } from "../motions/motions";
import { motion } from "framer-motion";

const BackToTop = () => {
  return (
    <ScrollToTop
      className="bottom-16 right-20 z-[60] animate-bounce bg-background text-light shadow-none"
      component={
        <motion.div
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="show"
          exit="exit"
        >
          <IoArrowUpCircleOutline size={52} />
        </motion.div>
      }
      smooth
      width="48"
      height="48"
    />
  );
};

export default BackToTop;
