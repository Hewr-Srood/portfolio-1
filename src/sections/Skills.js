import React, { useContext, useState } from "react";
import PersonalInfo from "./../personalInfo/PersonalInfo.json";
import SectHeader from "./../components/SectHeader";
import { ThemeContext } from "./../Context/ThemeContext";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const { theme } = useContext(ThemeContext);
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 1528) {
      console.log(window.pageYOffset);
      console.log(animate);
      setAnimate(true);
    }
  });

  return (
    <div
      id="skills"
      className={` min-h-screen flex flex-col items-center justify-center ${
        theme
          ? " bg-tertiaryLight text-4thColorLight"
          : "bg-tertiaryDark text-5thColorDark"
      }`}
    >
      <div className="flex ">
        <SectHeader sectionName={"Skills"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-1/2 w-4/5 justify-items-stretch ">
        {PersonalInfo.skills.map((element, index) => {
          return (
            <>
              <div
                key={`${element.name}-${index}`}
                className="flex flex-col w-4/5 mt-5 mb-5 justify-self-center "
              >
                <div className="flex items-end mb-4">
                  <motion.img
                    initial={{ rotate: 0 }}
                    className="transition-all  ease-linear   duration-150 transform  "
                    whileHover={{ rotate: [15, -15, 0] }}
                    src={element.logo}
                    alt={element.name + " logo"}
                  />
                </div>
                <div className="flex h-8 items-center w-full bg-4thColorLight rounded">
                  {animate && (
                    <>
                      <motion.div
                        style={{ transition: ` all ease .8s` }}
                        initial={{ width: "0px" }}
                        animate={{ width: `${element.knowledge}%` }}
                        className="flex ml-1 justify-center items-center bg-primaryDark rounded transition-all duration-150"
                        key={index}
                      >
                        <h1 className="font-bold text-white">{element.name}</h1>
                      </motion.div>
                      <p
                        className=" font-bold text-center text-white"
                        style={{ width: `${100 - element.knowledge}%` }}
                      >
                        <CountUp start={0} end={element.knowledge} />%
                      </p>
                    </>
                  )}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
