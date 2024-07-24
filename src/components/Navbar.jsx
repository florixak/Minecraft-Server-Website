const NavLink = [
  { name: "Home", link: "/" },
  { name: "Minigames", link: "/minigames" },
  { name: "Store", link: "/store" },
  { name: "About", link: "/about" },
  { name: "Staff", link: "/staff" },
];

const Navbar = () => {
  return (
    <nav>
      <ul className="flex w-full flex-row gap-8">
        {NavLink.map((link, index) => {
          return <li key={index}>{link.name}</li>;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
