import React, { useContext } from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ThemeContext } from "./../Context/ThemeContext";

import FollowMe from "./FollowMe";
import PersonalInfo from "./../personalInfo/PersonalInfo.json";

const ContactInfo = ({ them }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className=" flex flex-col justify-evenly mb-16 sm:mb-0  sm:m-0 sm:p-0 p-5 mr-auto ml-0">
        <h2
          className={` text-3xl sm:text-4xl font-extrabold ${
            theme ? "text-4thColorLight" : "text-5thColorDark"
          } `}
        >
          {" "}
          Contact info
        </h2>
        <div
          className={`flex flex-col   ${
            theme ? "text-6thColorLight" : " text-7thColorDark"
          }  h-48 justify-evenly`}
        >
          <div className=" text-base sm:text-2xl  font-extrabold flex items-center   ">
            <FaMapMarkerAlt size={30} />
            <p className="ml-3">{PersonalInfo.location}</p>
          </div>
          <div className=" text-base sm:text-2xl  font-extrabold flex items-center   ">
            <HiOutlineMail size={30} />
            <p className="ml-3">{PersonalInfo.email}</p>
          </div>
          <div className=" text-base sm:text-2xl  font-extrabold flex items-center     ">
            <FaPhoneAlt size={30} />
            <p className="ml-3">{PersonalInfo.PhoneNo}</p>
          </div>
        </div>
        <FollowMe />
      </div>
    </>
  );
};

export default ContactInfo;
