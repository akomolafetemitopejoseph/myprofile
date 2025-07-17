import React from "react";
import myimage from "../assets/mypics.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div id="about" className="bg-[#111827] h-screen max-md:mt-20 max-sm:p-5">
      <div className="items-center mt-15 pt-15 max-sm:pt-5 text-center">
        <div>
          <img
            className="w-[200px] max-md:w-[150px] h-[200px] max-md:h-[150px] rounded-[50%] border-4 border-gray-600 mx-auto"
            src={myimage}
            alt="imagee"
          />
        </div>
        <h1 className="leading-10  text-[1.7rem]  max-md:text-[1.4rem] font-bold text-white mt-5">
          Akomolafe Temitope <br /> Joseph.
        </h1>
        <h1 className="leading-10 max-md:leading-8 text-[1.2rem] max-md:text-[1.4rem]  font-semibold text-white max-md:mt-3">
          Fendend Developer
        </h1>

        <p className="mt-5  max-md:mt-4 font-bold text-l max-md:text-xl max-md:p-2 text-white">
          I specialize in building clean, responsive, and high-performing
          websites. With expertise in React,
          <br /> Tailwind CSS, and JavaScript, I create seamless digital
          experiences that are both visually appealing and user-friendly. <br />
          My focus is on translating ideas into functional, accessible, and
          reliable web solutions.
        </p>

        <div class="flex items-center justify-center mt-10 max-md:mt-10 max-sm:p-5">
          <div class="group relative">
            <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>

            <button class="relative flex items-center gap-4 rounded-lg bg-gray-900 cursor-pointer px-7 max-md:px-2 py-4 max-md:py-5  hover:text-gray-700 active:bg-gray-100 transition-all duration-700 font-bold text-white text-xl capitalize max-md:text-sm">
              let's work together to bring your ideas to life
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
