import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="bg-gray-950 w-full h-full py-16">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-white p-2 inline">
            Contact Me
          </p>
          <p className="py-6">Submit the Form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/6dBD4Xa7" method="POST" className="flex flex-col w-full md:w-1/2" autoComplete="off">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 my-2 bg-transparent text-white border-2
                rounded-md focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="p-2 my-2 bg-transparent text-white border-2 
                rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              id=""
              rows="10"
              placeholder="Enter Your message"
              className="p-2 my-2 bg-transparent text-white border-2
                rounded-md focus:outline-none"
            ></textarea>
            <button className="text-white bg-blue-400 px-6 py-3 my-8 mx-auto rounded-md flex item-center hover:bg-blue-700 duration-300">Let's Connect</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
