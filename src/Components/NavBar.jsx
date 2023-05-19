import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Button from "../utils/Button";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "Signup",
    },
  ];

  return (
    <div className="bg-gray-300 p-8">
      <div className="flex justify-between border-2 items-center bg-white m-auto h-20 w-full rounded-md text-black">
        <div>
          <h1 className="text-5xl font-signature ml-2">playlist</h1>
        </div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="m-auto px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200"
            >
              {link === "home" ? (
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200"
                >
                  {link}
                </Link>
              ) : (
                <Button title={link} onClick={() => setNav(false)} />
              )}
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-white md:hidden lg:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-500 text-white">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-3xl"
              >
                {link === "home" ? (
                  <Link
                    to={link}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    onClick={() => setNav(false)}
                    className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
                  >
                    {link}
                  </Link>
                ) : (
                  <Button title={link} onClick={() => setNav(false)} />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
