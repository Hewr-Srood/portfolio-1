import React from "react";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Project from "./sections/Projects";
import ThemeProvider from "./Context/ThemeContext";
import Navbar from "./components/Menu/Navbar";
import ContactMe from "./sections/ContactMe";
import "./App.css";
import AboutMe from "./sections/AboutMe";
function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
        <Project />
        <ContactMe />
      </div>
    </ThemeProvider>
  );
}

export default App;
