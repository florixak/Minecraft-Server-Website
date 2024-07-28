import { useState } from "react";
import Section from "../components/Section";
import { minigames } from "../data/dummy-data";

const Minigames = () => {
  const [showDescription, setShowDescription] = useState(1);

  function handleDescription(id) {
    setShowDescription(id);
    console.log(showDescription);
  }

  return (
    <Section>
      <h1 className="text-h1">MINIGAMES</h1>
      <div className="flex flex-col gap-24 text-black">
        {minigames.map(
          ({ id, name, players, duration, description, image }) => (
            <div
              key={id}
              className="relative flex h-[20srem] flex-col p-5 even:text-right tablet:flex-row tablet:odd:mr-20 tablet:odd:flex-row-reverse tablet:even:ml-20 desktop:w-full"
              onClick={() => handleDescription(id)}
            >
              <div
                className={`absolute -bottom-16 flex w-full flex-col justify-evenly`}
              >
                {showDescription !== id && (
                  <div className="w-full rounded-lg bg-light p-5">
                    <h1 className="text-minigame-title">{name}</h1>
                    <p>
                      <span className="font-bold">Mode:</span> {players}
                    </p>
                    <p>
                      <span className="font-bold">Duration about:</span>{" "}
                      {duration}
                    </p>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-0 flex w-full flex-col justify-evenly">
                {showDescription === id && (
                  <p className="absolute z-10 bg-light">{description}</p>
                )}
              </div>
              <img
                src={image}
                alt={`${name} image`}
                className="w-[480px] rounded-xl bg-light object-contain p-2"
              />
            </div>
          ),
        )}
      </div>
    </Section>
  );
};

export default Minigames;
