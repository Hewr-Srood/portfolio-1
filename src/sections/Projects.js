import React, { useContext, useState, useEffect } from "react";
import Modal from "./../components/ProjectModal";
import PersonalInfo from "./../personalInfo/PersonalInfo.json";
import SectHeader from "./../components/SectHeader";
import { ThemeContext } from "./../Context/ThemeContext";
import { BoxLoading } from "react-loadingg";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={` min-h-screen sm:mt-0 pt-16  flex flex-col items-center justify-center ${theme
            ? " bg-tertiaryLight text-4thColorLight"
            : "bg-tertiaryDark text-5thColorDark"
            } ${loading ? " hidden" : " block"}`}
        >

          <SectHeader sectionName={"Projects"} className="" />
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
        </motion.div>

      )}
    </>
  );
};

export default Projects;
