import { useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const ImageSlider = ({ list }) => {
  const [current, setCurrent] = useState(0);
  const { title, image, description } = list[current];

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

  return (
    <div className="relative flex w-full flex-row items-center justify-center rounded-xl bg-light p-10 text-black shadow-xl shadow-black desktop:max-h-[35rem]">
      <PageButton type="previous" />
      <div className="static flex flex-col items-center justify-center gap-5 p-10">
        <div>
          <h1 className="text-h2 font-bold">{title.split(":")[1]}</h1>
          <h2 className="text-h2 font-semibold">{title.split(":")[0]}</h2>
          <p className="h-[100px] w-[600px]">{description}</p>
        </div>
        <div className="h-1 w-full bg-black" />
        <img
          src={image}
          alt="Image"
          className="static max-h-[350px] max-w-[600px] rounded-xl object-contain"
        />
      </div>
      <PageButton type="next" />
    </div>
  );
};

export default ImageSlider;
