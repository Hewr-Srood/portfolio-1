import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./../Context/ThemeContext";

const AboutSecHeader = styled.div`
  &:hover div {
    width: 100%;
  }
  div {
    transition: all ease 0.3s;
  }
`;
const SectHeader = ({ sectionName }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <AboutSecHeader
      AboutSecHeader
      className="cursor-pointer   mb-12 mx-auto flex flex-col items-center "
    >
      <h1
        className={` text-5xl inline-block mr-auto  ${
          theme ? "text-4thColorLight" : "text-5thColorDark"
        }   font-extrabold`}
      >
        {sectionName}
      </h1>
      <div className=" w-10/12 h-1 bg-primaryDark sm:mx-auto md:mx-0" />
    </AboutSecHeader>
  );
};

export default SectHeader;
