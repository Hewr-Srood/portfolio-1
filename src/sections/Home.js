import React, { useContext } from "react";
import PersonalInfo from "./../personalInfo/PersonalInfo.json";
import { ThemeContext } from "./../Context/ThemeContext";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      id="home"
      className={`flex items-center justify-around h-screen flex-wrap transition-all duration-150  ${
        theme ? "bg-tertiaryLight" : "bg-tertiaryDark"
      }
      `}
    >
      <div className="flex flex-col w-full   sm:w-2/5 justify-between items-center p-5  md:mt-0">
        <h1
          className={`sm:text-6xl text-5xl ${
            theme ? "text-4thColorLight" : "text-4thColorDark"
          }`}
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          {PersonalInfo.name}
        </h1>
        <h1
          className={`text-2xl ${
            theme ? "text-5thColorLight" : "text-5thColorDark"
          }`}
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          {PersonalInfo.jobTitle}
        </h1>
        <button
          className={`rounded mt-5  font-bold border-primaryLights border-2  border-primaryLight transition-all duration-150 w-56 hover:text-7thColorLight text-primaryLight bg-transparent py-2 hover:bg-primaryLight `}
        >
          Hire me
        </button>
      </div>

      <div className=" sm:w-3/5 w-full">
        <img src={"./../images/programmer.png"} alt="my" />
      </div>
    </div>
  );
}
