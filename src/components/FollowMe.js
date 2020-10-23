import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import PersonalInfo from "./../personalInfo/PersonalInfo.json";

const FollowMe = () => {
  return (
    <div className="mb-5">
      <h3 className=" text-lg sm:text-xl font-extrabold mt-5  text-6thColorLight">
        Follow me
      </h3>
      <div className="flex mt-3 sm:justify-between justify-evenly">
        <a target="_blank" rel="noopener noreferrer" href={PersonalInfo.github}>
          <FaGithub
            className=" text-5thColorLight hover:text-gray-900 transition-all    duration-150 transform  hover:rotate-12"
            size={30}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={PersonalInfo.linkedin}
        >
          <FaLinkedin
            className=" text-5thColorLight hover:text-blue-400 transition-all duration-150 transform  hover:-rotate-12"
            size={30}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={PersonalInfo.facebook}
        >
          <FaFacebook
            className=" text-5thColorLight hover:text-blue-600 transition-all duration-150 transform  hover:rotate-12"
            size={30}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={PersonalInfo.instagram}
        >
          <FaInstagram
            className=" text-5thColorLight hover:text-red-500 transition-all duration-150 transform  hover:-rotate-12"
            size={30}
          />
        </a>
      </div>
    </div>
  );
};

export default FollowMe;
