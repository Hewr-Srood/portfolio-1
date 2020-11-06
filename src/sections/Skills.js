import React, { useContext, useState, useEffect } from "react";
import PersonalInfo from "./../personalInfo/PersonalInfo.json";
import SectHeader from "./../components/SectHeader";
import { ThemeContext } from "./../Context/ThemeContext";
import { motion } from "framer-motion";
import { SemipolarLoading } from "react-loadingg";

const Skills = () => {
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading && <SemipolarLoading />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className={` min-h-screen flex flex-col items-center justify-center ${
          theme
            ? " bg-tertiaryLight text-4thColorLight"
            : "bg-tertiaryDark text-5thColorDark"
        } ${loading ? " hidden" : " block"}`}
      >
        <div className="flex ">
          <SectHeader sectionName={"Skills"} />
        </div>
        <div className="grid grid-cols-2 gap-1 w-full">
          {PersonalInfo.skills.map((element, index) => {
            return (
              <>
                <div
                  key={`${element.name}-${index}`}
                  className="flex flex-col w-4/5  mb-5 justify-self-center "
                >
                  <div className="flex items-center mb-4">
                    <motion.img
                      drag="x"
                      dragConstraints={{ left: -5, right: 50 }}
                      initial={{ rotate: 0 }}
                      className="transition-all  ease-linear   duration-150 transform  "
                      whileHover={{ rotate: [15, -15, 0] }}
                      src={`${
                        window.innerWidth < 480 ? element.smLogo : element.logo
                      }`}
                      alt={element.name + " logo"}
                    />
                    <h1
                      className=" font-bold sm:text-base text-xs"
                      style={{ fontFamily: "Pacifico, cursive" }}
                    >
                      {element.name}
                    </h1>
                  </div>
                  <div
                    className={`flex py-1 items-center w-full  rounded ${
                      theme ? " bg-4thColorLight" : " bg-7thColorDark"
                    }`}
                  >
                    <>
                      <div
                        style={{ width: `${element.knowledge}%` }}
                        className="flex mx-1 sm:py-1 py-0 h-full justify-center items-center bg-primaryDark rounded  "
                        key={index}
                      >
                        <motion.div
                          transition={{ duration: 0.8, delay: 1.5 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className={`font-bold    text-xs ${
                            theme ? " text-4thColorLight" : " text-4thColorDark"
                          }`}
                          style={{
                            fontSize: `${
                              window.innerWidth <= 320 ? "0.6rem" : "0.75rem"
                            }`,
                            fontFamily: "Pacifico, cursive",
                          }}
                        >
                          {element.knowledge} %
                        </motion.div>
                      </div>
                    </>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
