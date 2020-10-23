import React, { useContext } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import PersonalInfo from "./../../personalInfo/PersonalInfo.json";
import { ThemeContext } from "./../../Context/ThemeContext";
import DarkModeToggle from "react-dark-mode-toggle";

const Nav = styled.nav`
  .logo {
    width: 25px;

    padding: 15px 0;
  }
`;

const Navbar = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  window.addEventListener("scroll", () => {
    let navClass = theme ? "light-nav" : "dark-nav";
    const navEl = document.getElementById("navbar");
    if (window.pageYOffset > 50 && !navEl.classList.contains(navClass)) {
      navEl.classList.add(navClass);
    }
    if (window.pageYOffset < 50 && navEl.classList.contains(navClass)) {
      navEl.classList.remove(navClass);
    }
  });

  return (
    <Nav
      id="navbar"
      className={`fixed  ${
        theme
          ? "bg-secondaryLight  border-b-0 border-red-600"
          : "bg-secondaryDark"
      }  z-50 h-16 w-full py-0 px-5 flex justify-between items-center`}
    >
      <div className="flex justify-between items-center">
        <div className="logo ">
          <a href="#home">
            <img src={PersonalInfo.navLogo} alt="" />
          </a>
        </div>
      </div>
      <DarkModeToggle
        className="mr-16"
        onChange={handleTheme}
        checked={!theme}
        size={80}
      />

      <Burger them={theme} />
    </Nav>
  );
};

export default Navbar;
