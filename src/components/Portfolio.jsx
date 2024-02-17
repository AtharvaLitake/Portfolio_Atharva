import React from "react";
import plantx from "../assets/plantx.png";
import sponsornet from "../assets/sponsornet.png";
import techfiesta from "../assets/techfiesta.png";
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: plantx,
      demo: "https://plantx.netlify.app",
      code: "https://github.com/AtharvaLitake/PlantX",
    },
    {
      id: 2,
      src: sponsornet,
      demo: "https://sponsornet.netlify.app",
      code: "https://github.com/AtharvaLitake/SponsorNet-FrontEnd",
    },
    {
      id: 3,
      src: techfiesta,
      demo: "https://techfiesta.pict.edu",
      code: "https://github.com/AtharvaLitake/inc_hackathon",
    },
  ];
  return (
    <div name="project" className="bg-gray-950 w-full text-white h-auto md:h-full py-8 md:py-20 ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white">
            Projects
          </p>
          <p className="py-6">Here are some of the projects that i made</p>
        </div>
        <div
          
          className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0"
        >
          {projects.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-sm shadow-gray-400 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 md:h-48"
              />
              <div className="flex item-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-blue-400">
                  <a href={demo}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-blue-400">
                <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
