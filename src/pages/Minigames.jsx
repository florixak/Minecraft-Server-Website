import Section from "../components/Section";
import { minigames } from "../data/dummy-data";

const Minigames = () => {
  return (
    <Section>
      <div className="flex flex-col gap-12 font-bebas-neue text-black">
        {minigames.map((minigame) => (
          <div
            key={minigame.id}
            className="flex flex-col gap-6 rounded-xl bg-light p-5 tablet:flex-row tablet:odd:flex-row-reverse tablet:even:text-right desktop:w-full"
          >
            <div className="font-open-sans">
              <h1 className="font-bebas-neue text-h2">{minigame.name}</h1>
              <p>
                <span className="font-bold">Mode:</span> {minigame.players}
              </p>
              <p>
                <span className="font-bold">Duration about:</span>{" "}
                {minigame.duration}
              </p>
              <p>{minigame.description}</p>
            </div>
            <img
              src={minigame.image}
              alt={`${minigame.name} image`}
              className="w-[480px] rounded-xl object-contain"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Minigames;
