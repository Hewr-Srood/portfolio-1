import React, { useContext, useState } from "react";
import { ThemeContext } from "./../Context/ThemeContext";
import { BiHeartCircle } from "react-icons/bi";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const { theme } = useContext(ThemeContext);
  const [sentMessage, setSentMessage] = useState(false);
  const handleSentMessage = () => {
    setSentMessage(true);
    setTimeout(() => {
      setSentMessage(false);
    }, 1500);
  };
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "Gmail",
        "template_9qumocp",
        e.target,
        "user_Qle82EBJbJ75ae4H35CCz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    handleSentMessage();
    e.target.reset();
  }
  return (
    <div className=" sm:w-full md:w-4/12 flex flex-col justify-around   ">
      <h2
        className={` block text-3xl sm:text-4xl font-extrabold ${
          theme ? "text-4thColorLight" : "text-5thColorDark"
        } `}
      >
        {" "}
        Send meesage
      </h2>
      <form
        onSubmit={sendEmail}
        className=" flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0  justify-evenly"
      >
        <p className="leading-relaxed mb-5 text-gray-600">
          You can send me your feedback or any suggests{" "}
          <BiHeartCircle className="inline text-red-600" size={20} />
        </p>
        <input
          name="name"
          className={`bg-white rounded ${
            theme ? "text-5thColorLight" : "text-5thColorDark"
          } border border-gray-400 focus:outline-none focus:border-primaryLight text-base px-4 py-2 mb-4`}
          placeholder="Name"
          type="text"
          required
        />
        <input
          name="email"
          className="bg-white rounded border border-gray-400 focus:outline-none focus:border-primaryLight text-base px-4 py-2 mb-4"
          placeholder="Email"
          type="email"
          required
        />
        <textarea
          name="message"
          className="bg-white rounded border border-gray-400 focus:outline-none focus:border-primaryLight h-32  text-base px-4 py-2 mb-4 resize-none"
          placeholder="Message"
          required
        />
        <button className="text-white  bg-primaryLight border-0 py-2 px-6  focus:border-primaryLight rounded text-lg">
          Send
        </button>
      </form>

      {sentMessage && (
        <h1 className=" bg-green-400 text-white font-bold py-2 text-center rounded absolute sm:w-3/12 w-full     animate-bounce bottom-0 z-50  right-0  ">
          Sent Successfully Thanks <span className="text-red-400">❤</span>
        </h1>
      )}
    </div>
  );
};

export default ContactForm;
