import React, { useContext } from "react";
import SectHeader from "../components/SectHeader";
import PersonalInfo from "./../personalInfo/PersonalInfo.json";

import { ThemeContext } from "./../Context/ThemeContext";

const AboutMe = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      id="aboutme"
      className={` top-0 w-full  pt-12 min-h-screen h-fitContent flex items-center  pb-2 flex-col ${
        theme ? "bg-4thColorDark" : "bg-secondaryDark"
      }  justify-evenly`}
    >
      <SectHeader sectionName={"About Me"} />
      <div className=" flex flex-wrap justify-between">
        <div>
          <img src={PersonalInfo.imageSources.aboutImage} alt="circle" />
        </div>
        <div className="flex flex-col mx-auto  sm:w-7/12 w-full justify-center items-center p-5  md:mt-0">
          <p
            className={`${
              theme ? "text-6thColorLight" : "text-7thColorDark"
            }  p-0 `}
          >
            {PersonalInfo.aboutMe}
          </p>
          <div className=" flex  sm:justify-start w-full mt-3 justify-around ">
            <button
              className={`rounded mt-5 md:mr-5 mr-0 font-bold border-primaryLights border-2  border-primaryLight transition-all duration-150 w-32 sm:w-48 hover:text-7thColorLight text-primaryLight bg-transparent py-2 hover:bg-primaryLight `}
            >
              <a href="#projects">Projects</a>
            </button>
            <button
              className={`rounded mt-5  font-bold border-primaryLights border-2  border-primaryLight transition-all duration-150 w-32 sm:w-48 hover:text-primaryLight text-7thColorLight bg-primaryLight py-2 hover:bg-transparent `}
            >
              <a href={PersonalInfo.cv}>Download CV</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
