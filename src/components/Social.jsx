import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30}></FaLinkedin>
        </>
      ),
      href: "https://www.linkedin.com/in/atharva-litake-97647922a/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30}></FaGithub>
        </>
      ),
      href: "https://github.com/AtharvaLitake",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail  size={30}></HiOutlineMail>
        </>
      ),
      href: "mailto:litakeatharva24@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[30%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-md duration-30 bg-white" + " " + style}>
            <a
              href={href}
              className="flex justify-between items-center w-full text-black"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              <>
                {child}
              </>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
