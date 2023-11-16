import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    setCurrentHash(window.location.hash);
  }, []);

  const links = (
    <>
      <li>
        <HashLink
          smooth
          to="/#home"
          className={`hover:border-b-2 ${
            currentHash === "#home" ? " text-primary-c" : "border-transparent"
          }`}
        >
          Home
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to="/#services"
          className={`hover:border-b-2 ${
            currentHash === "#services"
              ? " text-primary-c"
              : "border-transparent"
          }`}
        >
          Services
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to="/#about"
          className={`hover:border-b-2 ${
            currentHash === "#about" ? "text-primary-c" : "border-transparent"
          }`}
        >
          About Us
        </HashLink>
      </li>
    </>
  );
  return (
    <div
      className={
        scrolling
          ? "flex items-center py-7 lg:py-10 z-30 bg-secendary-c fixed top-0  w-full mx-auto"
          : " fixed top-0 w-full mx-auto flex items-center z-20 transition duration-300 ease-in-out"
      }
    >
      <div className="lg:mx-auto md:w-[80%]">
        <div
          className={"flex items-center lg:py-4 fixed top-0 md:w-[80%] mx-auto"}
        >
          <div className="navbar-start flex items-center">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <HiMenu
                  className={
                    scrolling ? "text-xl text-black" : "text-xl text-white"
                  }
                ></HiMenu>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
                <li>
                  <Link className=" bg-[#69BB48] text-white">Contact us</Link>
                </li>
              </ul>
            </div>
            <HashLink
              smooth
              to="/#home"
              className="md:text-3xl text-lime-500 font-bold inline-block"
            >
              Cleaners
            </HashLink>
          </div>
          <div
            className={`navbar-center hidden lg:flex ${
              scrolling ? `text-black` : ` text-white`
            }`}
          >
            <ul className="menu-horizontal space-x-5 text-lg">{links}</ul>
          </div>
          <div className="navbar-end hidden lg:flex">
            <Link className="px-4 py-2 rounded-lg bg-primary-c text-white">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
