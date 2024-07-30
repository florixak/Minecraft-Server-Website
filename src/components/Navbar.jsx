import HPSAstronaut from "../assets/images/HPSAstronaut.png";
// import HPSEarth from "../assets/images/HPSEarth.png";
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
  { name: "Changelog", link: "/changelog" },
];

const MobileNavLinks = [...NavLinks, ...MoreNavLinks];

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [showMore, setShowMore] = useState(false);

  function handleShowMore() {
    setShowMore((prev) => !prev);
  }

  function handleMobileNav() {
    setMobileNav((prev) => !prev);
  }

  return (
    <nav className="fixed z-50 flex h-auto w-full flex-row justify-evenly border-b-8 bg-light text-black shadow-2xl shadow-black">
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

      <div className="flex flex-col justify-center gap-10 text-center">
        <ul className="hidden flex-row items-center justify-center gap-16 text-h2 tablet:flex">
          {NavLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                    ? "relative before:absolute before:left-1/2 before:top-[40px] before:h-2 before:w-2 before:-translate-x-1/2 before:transform before:animate-pulse before:rounded-full before:bg-black"
                    : ""
              }
            >
              {item.name}
            </NavLink>
          ))}
          <li className="relative flex items-center hover:cursor-pointer">
            <IoArrowDownOutline
              className="animate-bounce"
              onClick={handleShowMore}
            />
            {showMore && (
              <ul className="absolute right-3 top-[30px] flex w-auto flex-col items-start justify-center border-2 border-black bg-light px-5 desktop:-right-40">
                {MoreNavLinks.map((item, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={item.link}
                      className="hover-off:animate-move-right-reverse w-full text-left hover:animate-move-right-hover"
                    >
                      {item.name}
                      {index !== MoreNavLinks.length - 1 && (
                        <div className="h-[1px] w-full bg-black"></div>
                      )}
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
          <NavLink to="/login">
            <FaUser size={38} />
          </NavLink>
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="z-50 flex items-center tablet:hidden">
        <IoMenu size={64} onClick={handleMobileNav} />
      </div>

      {/* Mobile Nav */}
      {mobileNav && (
        <div className="absolute z-40 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-light text-h2 tablet:hidden">
          {MobileNavLinks.map((item, index) => {
            return (
              <NavLink key={index} to={item.link} onClick={handleMobileNav}>
                {item.name}
              </NavLink>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
