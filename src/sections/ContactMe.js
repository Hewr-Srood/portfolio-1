import React, { useContext } from "react";
import SectHeader from "../components/SectHeader";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import { ThemeContext } from "./../Context/ThemeContext";

const ContactMe = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="relative" id="contact">
      <div
        className={` top-0 w-full  sm:pb-0 pb-5   pt-12 min-h-screen h-fitContent flex items-center   flex-col p-5 absolute   ${
          theme ? "bg-tertiaryLight" : "bg-tertiaryDark"
        }  justify-evenly`}
      >
        <SectHeader sectionName={"Contact me"} />

        <div className="flex justify-around flex-wrap w-full">
          <ContactInfo />

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
