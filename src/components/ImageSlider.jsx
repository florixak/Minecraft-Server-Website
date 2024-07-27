import { useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const ImageSlider = ({ list }) => {
  const [current, setCurrent] = useState(0);
  const item = list[current];

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
          <IoArrowForward size={32} />
        ) : (
          <IoArrowBack size={32} />
        )}
      </button>
    );
  };

  return (
    <div className="flex w-full flex-row items-center justify-center p-10">
      <PageButton type="previous" />
      <div className="flex flex-col items-center justify-center gap-5 p-10">
        <div>
          <h1 className="text-h2">{item.title}</h1>
          <p className="w-[600px]">{item.description}</p>
        </div>
        <img src={item.image} alt="Image" className="rounded-xl object-cover" />
      </div>
      <PageButton type="next" />
    </div>
  );
};

export default ImageSlider;
