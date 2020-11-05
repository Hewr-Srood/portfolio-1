import React, { useContext, useState, useEffect } from "react";
import SectHeader from "../components/SectHeader";

import { RectGraduallyShowLoading } from "react-loadingg";

import { ThemeContext } from "./../Context/ThemeContext";
import { motion } from "framer-motion";

const AboutMe = () => {
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading && <RectGraduallyShowLoading />}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={` top-0 w-full  pt-12 min-h-screen h-fitContent flex items-center  pb-2 flex-col ${
            theme ? "bg-4thColorDark" : "bg-secondaryDark"
          }  justify-evenly`}
        >
          <SectHeader sectionName={"Coming Soon"} />

          {/* <div className=" flex flex-wrap justify-between">
            <div className="mx-auto w-full   md:w-2/5">
              <img src={PersonalInfo.imageSources.aboutImage} alt="circle" />
            </div>
            <div className="flex flex-col mx-auto  w-full    md:w-2/5 justify-center items-center p-5  md:mt-0">
              <p
                className={`${
                  theme ? "text-6thColorLight" : "text-7thColorDark"
                }  p-0 `}
              >
                {PersonalInfo.aboutMe}
              </p>
              <div className=" flex  w-full mt-3 md:justify-start justify-around ">
                <button
                  className={`rounded mt-5 md:mr-5 mr-0 font-bold border-primaryLights border-2  border-primaryLight transition-all duration-150 w-32 sm:w-48 hover:text-7thColorLight text-primaryLight bg-transparent py-2 hover:bg-primaryLight `}
                >
                  <a href="#projects">Projects</a>
                </button>
                <button
                  className={`rounded mt-5  font-bold border-primaryLights border-2  border-primaryLight transition-all duration-150 w-32 sm:w-48 hover:text-primaryLight text-7thColorLight bg-primaryLight py-2 hover:bg-transparent `}
                >
                  <a
                    href={PersonalInfo.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preview CV
                  </a>
                </button>
              </div>
            </div>
          </div> */}
        </motion.div>
      )}
    </>
  );
};

export default AboutMe;
