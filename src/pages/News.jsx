import { news } from "../data/dummy-data";
import Section from "../components/Section";
import ImageSlider from "../components/ImageSlider";

const News = () => {
  return (
    <Section>
      <h1 className="font-bebas-neue text-h1">NEWS</h1>
      <div className="slide-container w-[400px] rounded-xl bg-light text-center text-black tablet:w-full">
        <ImageSlider list={news} />
      </div>
    </Section>
  );
};

export default News;
