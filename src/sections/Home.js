import React, { useContext, useState, useEffect } from "react";
import PersonalInfo from "./../personalInfo/PersonalInfo.json";
import { ThemeContext } from "./../Context/ThemeContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { WindMillLoading } from "react-loadingg";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading && <WindMillLoading />}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`flex items-center pt-24 justify-around pb-3 h-screen flex-wrap-reverse transition-all duration-150  ${theme ? "bg-tertiaryLight" : "bg-tertiaryDark"
            }
      `}
        >
          <div className="sm:pl-10 p-0 flex flex-col mx-auto  w-full    md:w-2/5 justify-between   h-64  items-baseline   px-5  md:mt-0">
            <div className="flex flex-col items-baseline w-full   justify-between   mt-0">
              <h1
                className={`sm:text-6xl text-3xl ${theme ? "text-4thColorLight" : "text-4thColorDark"
                  }`}
                style={{ fontFamily: "Pacifico, cursive" }}
              >
                {PersonalInfo.name}
              </h1>
              <h1
                className={` text-xl ${theme ? "text-5thColorLight" : "text-5thColorDark"
                  }`}
                style={{ fontFamily: "Pacifico, cursive" }}
              >
                {PersonalInfo.jobTitle}
              </h1>
            </div>
            <p
              className={`${theme ? "text-6thColorLight" : "text-4thColorDark"
                }    sm:text-xl  text-sm`}
            >
              {PersonalInfo.aboutMe}
            </p>
            <div className=" flex  w-full  md:justify-start justify-around ">
              <Link
                to="/projects"
                className={`rounded md:mr-5 mr-0 font-bold border-primaryLights border-2  text-center border-primaryLight transition-all duration-150  hover:text-7thColorLight text-primaryLight bg-transparent py-2  sm:px-16 px-8 hover:bg-primaryLight `}
              >
                Projects
              </Link>
              <button
                className={`rounded  font-bold border-primaryLights border-2  border-primaryLight transition-all duration-150   hover:text-primaryLight text-7thColorLight bg-primaryLight py-2  sm:px-16  px-8 hover:bg-transparent `}
              >
                <a
                  href={PersonalInfo.cv}
                  target="_blank"
                  className="text-sm"
                  rel="noopener noreferrer"
                >
                  Preview CV
                </a>
              </button>
            </div>
          </div>

          <div className="  sm:w-2/5 w-3/5 sm:mr-16 mr-0  transform   ">
            <img
              id="hero-img"
              className="conatiner"
              src={"./../images/programmer.png"}
              alt="my"
            />
          </div>
        </motion.div>
      )}
    </>
  );
}
