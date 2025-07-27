import React from "react";
import { BiSolidMap } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div id="contact" className=" text-center">
        <h1 className="pt-15 max-md:pt-5 text-4xl max-mb:text-3xl font-bold capitalize mb-5">
          contact
        </h1>
        <h1 className="text-l  max-sm:text-[18px] mb-5 text-gray-300">
          Interested in working together? <br /> Let's have a conversation.
        </h1>

        <p className="text-xl mb-5 text-gray-300 flex gap-2 justify-center items-center">
          <BiSolidMap /> Lagos, Nigeria
        </p>
      </div>

      <div className="flex max-sm:grid justify-center gap-5 mt-10">
        <div class="flex items-center justify-center max-md:mb-5">
          <div class="group relative">
            <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
            <a href="https://akomolafetemitope6@gmail.com">
              <button class="relative flex items-center gap-4 rounded-lg bg-gray-900 cursor-pointer px-7 py-4 hover:text-gray-700 active:bg-gray-100 transition-all duration-700 font-bold text-white text-xl capitalize">
                <FaEnvelope /> get in touch
              </button>
            </a>
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
        <a href="https://github.com/akomolafetemitopejoseph">
          <IoLogoGithub className="cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/akomolafe-temitope-95b88527b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <FaLinkedin className="cursor-pointer" />
        </a>
        <a href="https://x.com/AkomolafeTemi19">
          <FaXTwitter className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
