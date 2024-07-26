import HPSAstronaut from "../assets/HPSAstronaut.png";
// import HPSEarth from "../assets/HPSEarth.png";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoArrowDownOutline, IoMenu } from "react-icons/io5";
import { useState } from "react";

const NavLinks = [
  { name: "Home", link: "/" },
  { name: "Minigames", link: "/minigames" },
  { name: "Store", link: "/store" },
  { name: "Rules", link: "/rules" },
];

const MoreNavLinks = [
  { name: "Staff", link: "/staff" },
  { name: "FAQ", link: "/faq" },
  { name: "Recruitment", link: "/recruitment" },
];

const Navbar = () => {
  const [showMore, setShowMore] = useState(false);

  function handleShowMore() {
    setShowMore((prev) => !prev);
  }

  return (
    <nav className="fixed flex h-auto w-full flex-row justify-evenly border-b-8 bg-light shadow-2xl shadow-black">
      {/* Logo section */}
      <div>
        <NavLink to={NavLinks[0].link}>
          <img
            src={HPSAstronaut}
            alt="HPS Astronaut Logo"
            width={128}
            height={128}
            className="animate-wiggle"
          />
        </NavLink>
      </div>

      <div className="hidden flex-col justify-center gap-10 text-center tablet:flex">
        <ul className="flex flex-row items-center justify-center gap-16 text-h2">
          {NavLinks.map((item, index) => (
            <NavLink key={index} to={item.link}>
              {item.name}
            </NavLink>
          ))}
          <li className="relative flex items-center hover:cursor-pointer">
            <IoArrowDownOutline
              className="animate-bounce"
              onClick={handleShowMore}
            />
            {showMore && (
              <ul className="absolute top-[30px] flex w-auto flex-col items-start justify-center border-2 border-darkBlue bg-light px-5">
                {MoreNavLinks.map((item, index) => {
                  return (
                    <NavLink key={index} to={item.link}>
                      {item.name}
                    </NavLink>
                  );
                })}
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* User login */}
      <div className="hidden items-center tablet:flex">
        <button className="flex items-center">
          <span className="text-description">Login</span>
          <FaUser size={38} />
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="flex items-center tablet:hidden">
        <IoMenu size={64} />
      </div>
    </nav>
  );
};

export default Navbar;
