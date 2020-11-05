import React from "react";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Project from "./sections/Projects";
import ThemeProvider from "./Context/ThemeContext";
import Navbar from "./components/Menu/Navbar";
import ContactMe from "./sections/ContactMe";
import "./App.css";
import AboutMe from "./sections/AboutMe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/amazing">
              <AboutMe />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/projects">
              <Project />
            </Route>
            <Route path="/contact">
              <ContactMe />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
