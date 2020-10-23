import React, { useContext } from "react";
import { ThemeContext } from "./../Context/ThemeContext";
import { BiHeartCircle } from "react-icons/bi";

const ContactForm = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className=" sm:w-full md:w-4/12 flex flex-col justify-around   ">
      <h2
        className={` block text-3xl sm:text-4xl font-extrabold ${
          theme ? "text-4thColorLight" : "text-5thColorDark"
        } `}
      >
        {" "}
        Send meesage
      </h2>
      <div className=" flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0  justify-evenly">
        <p className="leading-relaxed mb-5 text-gray-600">
          You can send me your feedback or any suggests{" "}
          <BiHeartCircle className="inline text-red-600" size={20} />
        </p>
        <input
          className={`bg-white rounded ${
            theme ? "text-5thColorLight" : "text-5thColorDark"
          } border border-gray-400 focus:outline-none focus:border-primaryLight text-base px-4 py-2 mb-4`}
          placeholder="Name"
          type="text"
        />
        <input
          className="bg-white rounded border border-gray-400 focus:outline-none focus:border-primaryLight text-base px-4 py-2 mb-4"
          placeholder="Email"
          type="email"
        />
        <textarea
          className="bg-white rounded border border-gray-400 focus:outline-none focus:border-primaryLight h-32  text-base px-4 py-2 mb-4 resize-none"
          placeholder="Message"
        ></textarea>
        <button className="text-white  bg-primaryLight border-0 py-2 px-6 focus:outline-none focus:border-primaryLight rounded text-lg">
          Button
        </button>
      </div>
      {/* <div>
        <form className="flex flex-col justify-evenly">
          <label
            htmlFor="name"
            className={`text-xl sm:text-2xl mb-2 font-extrabold ${
              
            }`}
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Type your name "
            id="name"
            className="ml-3 mb-2 py-2 px-5 rounded"
          />
          <label
            htmlFor="email "
            className={`text-xl sm:text-2xl mb-2 font-extrabold ${
              theme ? "text-5thColorLight" : "text-5thColorDark"
            }`}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Type your email "
            id="email"
            className="ml-3 mb-2 py-2 px-5 rounded"
          />
          <label
            htmlFor="message"
            className={`text-xl sm:text-2xl mb-2 font-extrabold ${
              theme ? "text-5thColorLight" : "text-5thColorDark"
            }`}
          >
            Message
          </label>
          <textarea
            name=""
            id="Message"
            cols="30"
            rows="5"
            className="ml-3 mb-5"
          />
          <button className="rounded border-4  font-bold border-primaryLights  border-primaryLight transition-all duration-150  w-40  text-white bg-primaryLight py-3 hover:bg-transparent hover:text-primaryLight">
            Send message
          </button>
        </form>
      </div>*/}
    </div>
  );
};

export default ContactForm;
