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
    <div className="flex w-full flex-row items-center justify-center font-titillium-web text-light">
      <PageButton type="previous" />
      <div className="relative flex flex-col items-center justify-center gap-5 p-10">
        <div className="hover:animate-none absolute -bottom-16 max-h-[12rem] w-full animate-floating bg-light p-5 text-black">
          <h1 className="text-h2 font-semibold">{title.split(":")[0]}</h1>
          <h2 className="text-h2 font-bold">{title.split(":")[1]}</h2>
          <p className="h-[100px] w-[600px]">{description}</p>
        </div>
        <img
          src={image}
          alt="Image"
          className="static h-auto w-[800px] bg-light object-cover p-2"
        />
      </div>
      <PageButton type="next" />
    </div>
  );
};

export default ImageSlider;
