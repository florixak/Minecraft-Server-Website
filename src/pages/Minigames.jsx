import Section from "../components/Section";
import { minigames } from "../data/dummy-data";
import { motion } from "framer-motion";
import { SlideToLeft, SlideToRight } from "../motions/motions";

const Minigames = () => {
  return (
    <Section>
      <h1 className="text-h1">OUR MINIGAMES</h1>
      <div className="flex flex-col gap-24 text-black">
        {minigames.map(
          ({ id, name, players, duration, description, image }) => (
            <motion.div
              key={id}
              variants={id % 2 === 0 ? SlideToRight(0.3) : SlideToLeft(0.3)}
              initial="hidden"
              whileInView="show"
              exit="exit"
              className={`${id === 1 && "new"} relative flex h-[20srem] flex-col p-5 even:text-right tablet:flex-row tablet:odd:mr-20 tablet:odd:flex-row-reverse tablet:even:ml-20 desktop:w-full`}
            >
              <div
                className={`absolute -bottom-16 flex w-full flex-col justify-evenly`}
              >
                <div className="z-20 w-full rounded-lg bg-light p-5 shadow-lg shadow-black focus:animate-none tablet:animate-floating">
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
                className="z-10 w-full rounded-lg object-contain shadow-lg shadow-black"
              />
            </motion.div>
          ),
        )}
      </div>
    </Section>
  );
};

export default Minigames;
