import React from "react";
import portfolio_atharva from "../assets/portfolio img.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gray-900">
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4
      md:flex-row text-white"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold">I'm a Full Stack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md text-lg">
            I am a third year undergrad student at Pune Institute of computer. I
            have fascination towards full stack development and I am passionate
            towards front end development .
          </p>
          <div>
            <button className="text-white text-1.5xl w-fit px-6 py-3 my-2 flex items-center rounded-md bg-blue-400">
              Portfolio{" "}
              <span className="hover:rotate-90 transform">
                <MdOutlineKeyboardArrowRight size={22} className="ml-1"/>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={portfolio_atharva} alt="my_image" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
