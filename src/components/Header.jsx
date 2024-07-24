import Logo from "../assets/logo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex h-[30%] w-full flex-row justify-evenly">
      <div className="flex w-full flex-row items-center">
        <img src={Logo} alt="Server Logo" width={240} height={240} />
        <h1 className="text-h1">HPSLand</h1>
      </div>

      <div className="flex w-full flex-col items-center justify-center">
        <h2 className="text-h2">Come to join! play.hpsland.eu</h2>
      </div>

      <Navbar />
    </header>
  );
};

export default Header;
