import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div>
      <div
        className="flex justify-between items-center w-full 
      h-20 text-white bg-black px-4 fixed"
      >
        <div>
          <h1 className="text-5xl font-signature ml-2">Atharva</h1>
        </div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 
            hover:scale-105 hover:text-blue-400 duration-150"
            >
              {link}
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
        </div>

        {nav && (
          <ul
            className="flex flex-col justify-center items-center
                  absolute top-0 left-0 w-full h-screen bg-black text-gray-500"
          >
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 capitalize py-6 cursor-pointer text-4xl"
              >
                {link}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
