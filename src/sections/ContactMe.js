import React, { useContext, useEffect, useState } from "react";
import SectHeader from "../components/SectHeader";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import { ThemeContext } from "./../Context/ThemeContext";
import { BlockLoading } from "react-loadingg";
import { motion } from "framer-motion";

const ContactMe = () => {
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading && <BlockLoading />}
      {!loading && (
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>
      )}
    </>
  );
};

export default ContactMe;
