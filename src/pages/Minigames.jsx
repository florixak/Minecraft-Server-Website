import Section from "../components/Section";
import { minigames } from "../data/dummy-data";

const Minigames = () => {
  return (
    <Section>
      <h1 className="text-h1">MINIGAMES</h1>
      <div className="flex flex-col gap-12 font-bebas-neue text-black">
        {minigames.map(
          ({ id, name, players, duration, description, image }) => (
            <div
              key={id}
              className="flex h-[20srem] flex-col gap-6 rounded-xl bg-light p-5 shadow-xl shadow-black even:text-right tablet:flex-row tablet:odd:mr-20 tablet:odd:flex-row-reverse tablet:even:ml-20 desktop:w-full"
            >
              <div className="flex w-full flex-col justify-evenly font-open-sans">
                <div>
                  <h1 className="text-minigame-title font-bebas-neue">
                    {name}
                  </h1>
                  <p>
                    <span className="font-bold">Mode:</span> {players}
                  </p>
                  <p>
                    <span className="font-bold">Duration about:</span>{" "}
                    {duration}
                  </p>
                </div>

                <p>{description}</p>
              </div>
              <div className="bg-dark-blue h-1 w-full rounded-xl tablet:h-full tablet:w-2" />
              <img
                src={image}
                alt={`${name} image`}
                className="w-[480px] rounded-xl object-contain shadow-md shadow-black"
              />
            </div>
          ),
        )}
      </div>
    </Section>
  );
};

export default Minigames;
