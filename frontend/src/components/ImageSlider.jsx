import { useEffect, useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";

const ImageSlider = ({ list }) => {
  const [current, setCurrent] = useState(0);
  const { title, image, description } = list[current];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % list.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [current, list.length]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % list.length);
  };

  const handlePrevious = () => {
    setCurrent((prev) => (prev - 1 + list.length) % list.length);
  };

  const PageButton = ({ type }) => {
    return (
      <button
        type="button"
        onClick={type === "next" ? handleNext : handlePrevious}
      >
        {type === "next" ? (
          <IoArrowForward size={32} className="animate-bounce-right" />
        ) : (
          <IoArrowBack size={32} className="animate-bounce-left" />
        )}
      </button>
    );
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -80 },
  };

  const textBubbleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <div className="flex w-[30%] flex-row items-center justify-center font-titillium-web text-light laptop:w-full">
      <PageButton type="previous" />
      <div className="relative flex flex-col items-center justify-center gap-5 p-10">
        <motion.div
          key={current}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5, delay: 0.3 }}
          className="static z-10 h-[600px] w-[1000px] object-cover"
        >
          <motion.img src={image} alt="Image" className="h-full w-full" />
        </motion.div>
        <motion.div
          key={`text-${current}`}
          variants={textBubbleVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3, delay: 0.3 }}
          className="absolute -bottom-16 z-20 max-h-[12rem] w-full animate-floating bg-light p-5 text-black shadow-lg shadow-light hover:animate-none"
        >
          <h1 className="text-h2 font-semibold">{title.split(":")[0]}</h1>
          <h2 className="text-h2 font-bold">{title.split(":")[1]}</h2>
          <p className="h-[100px] w-[600px]">{description}</p>
        </motion.div>
      </div>
      <PageButton type="next" />
    </div>
  );
};

export default ImageSlider;
