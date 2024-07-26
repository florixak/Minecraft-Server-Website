import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { news } from "../data/dummy-data";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const properties = {
  prevArrow: (
    <button className="animate-bounce-left">
      <IoArrowBack size={32} />
    </button>
  ),
  nextArrow: (
    <button className="animate-bounce-right">
      <IoArrowForward size={32} />
    </button>
  ),
  indicators: (
    <div className="flex justify-center gap-10">
      <div className="h-4 w-4 rounded-full bg-blue"></div>
      <div className="h-4 w-4 rounded-full bg-blue"></div>
      <div className="h-4 w-4 rounded-full bg-blue"></div>
    </div>
  ),
};

const News = () => {
  return (
    <section className="font-open-sans m-auto mt-[12rem] flex w-[800px] flex-col items-center gap-14 text-light">
      <h1 className="font-bebas-neue text-h1">NEWS</h1>
      <div className="slide-container w-full text-center">
        <Fade {...properties}>
          {news.map(({ id, title, image }) => (
            <div key={id} className="mx-10">
              <h1 className="text-h2">{title}</h1>
              <img src={image} alt="Image" className="object-cover" />
            </div>
          ))}
        </Fade>
      </div>
    </section>
  );
};

export default News;
