import Section from "../components/Section";
import { minigames } from "../data/dummy-data";

const Minigames = () => {
  return (
    <Section>
      <h1 className="text-h1">MINIGAMES</h1>
      <div className="flex flex-col gap-24 text-black">
        {minigames.map(
          ({ id, name, players, duration, description, image }) => (
            <div
              key={id}
              className={`${id === 1 && "new"} relative flex h-[20srem] flex-col p-5 even:text-right tablet:flex-row tablet:odd:mr-20 tablet:odd:flex-row-reverse tablet:even:ml-20 desktop:w-full`}
            >
              <div
                className={`absolute -bottom-16 flex w-full flex-col justify-evenly`}
              >
                <div className="focus:animate-none w-full bg-light p-5 tablet:animate-floating">
                  <h1 className="text-minigame-title">{name}</h1>
                  <p>
                    <span className="font-bold">Mode:</span> {players}
                  </p>
                  <p>
                    <span className="font-bold">Duration about:</span>{" "}
                    {duration}
                  </p>
                  <p>{description}</p>
                </div>
              </div>
              <img
                src={image}
                alt={`${name} image`}
                className="w-full bg-light object-contain p-2"
              />
            </div>
          ),
        )}
      </div>
    </Section>
  );
};

export default Minigames;
