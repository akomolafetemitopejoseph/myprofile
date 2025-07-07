import React from "react";
import { BiSolidMap } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className=" text-center">
        <h1 className="pt-15 text-4xl font-bold capitalize mb-5">contact</h1>
        <h1 className="text-xl mb-5 text-gray-300">
          Interested in working together? Let's have a conversation.
        </h1>

        <p className="text-xl mb-5 text-gray-300 flex gap-2 justify-center items-center">
          <BiSolidMap /> Lagos, Nigeria
        </p>
      </div>

      <div className="flex justify-center gap-5 mt-10">
        <div class="flex items-center justify-center">
          <div class="group relative">
            <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
            <button class="relative flex items-center gap-4 rounded-lg bg-gray-900 cursor-pointer px-7 py-4 hover:text-gray-700 active:bg-gray-100 transition-all duration-700 font-bold text-white text-xl capitalize">
              <FaEnvelope /> get in touch
            </button>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div class="group relative">
            <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
            <button class="relative flex items-center gap-4 rounded-lg bg-gray-900 cursor-pointer px-7 py-4 hover:text-gray-700 active:bg-gray-100 transition-all duration-700 font-bold text-white text-xl capitalize">
              <IoDocumentText /> view resume
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-10 pb-10 text-3xl text-gray-400">
        <IoLogoGithub />
        <FaLinkedin />
        <FaXTwitter />
      </div>
    </div>
  );
};

export default Contact;
