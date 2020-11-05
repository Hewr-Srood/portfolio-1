import React, { useContext, useState, useEffect } from "react";
import Modal from "./../components/ProjectModal";
import PersonalInfo from "./../personalInfo/PersonalInfo.json";
import SectHeader from "./../components/SectHeader";
import { ThemeContext } from "./../Context/ThemeContext";
import { BoxLoading } from "react-loadingg";

const projects = PersonalInfo.projects;

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading && <BoxLoading />}
      {!loading && (
        <div
          className={` top-0 w-full  pt-12 min-h-screen h-fitContent flex items-center  pb-2 flex-col ${
            theme ? "bg-4thColorDark" : "bg-secondaryDark"
          }  justify-evenly`}
        >
          {" "}
          <SectHeader sectionName={"Projects"} />
          <div className="min-h-screen flex container justify-around items-start flex-wrap">
            {projects.map((project, i) => (
              <Modal
                key={`${project.pName}-${i}`}
                pName={project.pName}
                pDesciption={project.pDesciption}
                techs={project.techs}
                github={project.pGithubUrl}
                demo={project.pDemoUrl}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
