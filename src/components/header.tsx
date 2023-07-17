import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header w-full  flex text-stone-300 justify-center items-center border-b-2 text-center pb-5">
      <h1 className="headerText w-full  p-5 text-3xl text-white tracking-tighter font-sans-serif text-left ">
        THE PLANETS
      </h1>
      <nav className="navigation w-full flex">
        <ul className="navList w-full flex justify-between font-semibold tracking-wider pr-5">
          <Link
            to="/mercury"
            className="navItem1 hover:hover:text-white navLink1"
          >
            MERCURY
          </Link>
          <Link to="/Venus" className="navItem2 hover:hover:text-white">
            VENUS
          </Link>
          <Link to="Earth" className="navItem3 hover:hover:text-white">
            EARTH
          </Link>
          <Link to="/Mars" className="navItem4 hover:hover:text-white">
            MARS
          </Link>
          <Link to="Jupiter" className="navItem5 hover:hover:text-white">
            JUPITER
          </Link>
          <Link to="/Saturn" className="navItem6 hover:hover:text-white">
            SATURN
          </Link>
          <Link to="/Uranus" className="navItem7 hover:hover:text-white">
            URANUS
          </Link>
          <Link to="/Neptune" className="navItem8 hover:hover:text-white">
            NEPTUNE
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
