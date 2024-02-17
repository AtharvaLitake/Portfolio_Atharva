import React from "react";
import html_logo from "../assets/html_logo.png";
import css_logo from "../assets/css_logo.png";
import js_logo from "../assets/js_logo.png";
import bootstrap_logo from "../assets/bootstrap_logo.png";
import node_logo from "../assets/node_logo.png";
import tailwind_logo from "../assets/tailwind_logo.png";
import mongo_logo from "../assets/mongodb_logo.png";
import react_logo from "../assets/react_logo.png";
import cpp_logo from "../assets/cpp_logo.png";
import py_logo from "../assets/python_logo.png";
import langchain_logo from "../assets/langchain_logo.png";
import sql_logo from '../assets/sql_logo.png'
const Experience = () => {
  const techstack = [
    {
      id: 1,
      src: html_logo,
      desc: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css_logo,
      desc: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js_logo,
      desc: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: bootstrap_logo,
      desc: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 5,
      src: react_logo,
      desc: "React",
      style: "shadow-blue-500",
    },
    {
        id: 6,
        src: mongo_logo,
        desc: "MongoDB",
        style: "shadow-green-500",
      },
    {
      id: 7,
      src: node_logo,
      desc: "Nodejs",
      style: "shadow-green-500",
    },

    {
      id: 8,
      src: sql_logo,
      desc: "SQL",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: cpp_logo,
      desc: "CPP",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: py_logo,
      desc: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 11,
      src: langchain_logo,
      desc: "Langchain",
      style: "shadow-green-500",
    },
  ];
  return (
    <div name="techstack" className="bg-gray-950 w-full h-full py-12">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-white p-2 inline">
            TechStack
          </p>
          <p className="py-6">This is the technologies I have worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-7 sm:px-0">
          {techstack.map(({ id, src,desc,style }) => (
            <div key={id} className={`shadow-md py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className=" w-32 mx-auto" />
              <p className="mt-4">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
