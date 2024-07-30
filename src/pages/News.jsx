import { news } from "../data/dummy-data";
import Section from "../components/Section";
import ImageSlider from "../components/ImageSlider";

const News = () => {
  return (
    <Section>
      <h1 className="text-h1">WHAT IS NEW?</h1>
      <ImageSlider list={news} />
    </Section>
  );
};

export default News;
