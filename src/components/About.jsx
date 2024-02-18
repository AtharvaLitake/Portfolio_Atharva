import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-full bg-gray-950 text-white py-12">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto md:h-full py-12 md:py-24">
        <div className="mt-5">
          <h2 className="text-4xl font-bold inline border-b-4 border-white ">About</h2>
        </div>
        <p className="text-sm ml-2 md:text-xl md:ml-0 mt-10">
          Currently pursuing my undergrad at Pune Institute of computer
          technology in Computer engineering branch. I am a third year student
          having an aggregate cgpa of 9.69 , currently being the topper of the
          department. Recently, I have been exploring various domains and diving
          deep into each domain to see where I find my interests in . I have
          fascination towards full stack development and I am passionate towards
          front end development . Currently , I am exploring langchain and
          creating many end to end project using langchain and llms.
        </p>
        <br />
        <p className="text-sm ml-2 md:text-xl md:ml-0">
          I have participated in many hackathons and won many of them too. I
          have been working towards the ui/ux part of the websites and have
          successfully completed project in the same . Recently , i am
          undergoing an internship at Bajo foods where i am playing a vital role
          in suggesting ui/ux changes in the website for companies business
          empowerment and providing a helping hand in website development as
          well as maintenance. I also worked on a variety of calculators like
          Ketocalculator , A1C - E2G converter , BMR calculator and many more
          which increased the web traffic of the companies website.
        </p>
      </div>
    </div>
  );
};

export default About;
