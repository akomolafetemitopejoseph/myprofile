import React from "react";
import myimage from "../assets/mypics.jpg";
import Btn from "./btn";

const HeroSection = () => {
  return (
    <div
      id="about"
      className="bg-[#111827] mt-20 h-screen max-md:mt-20 max-md:p-5"
    >
      <div className="items-center mt-15 max-md:mt-2 pt-15 max-md:pt-2 text-center">
        <div>
          <img
            className="w-[200px] max-md:w-[150px] max-sm:w-[200px] h-[200px]  max-md:h-[150px] max-sm:h-[200px] rounded-[50%] border-5 border-gray-400 mx-auto"
            src={myimage}
            alt="imagee"
          />
        </div>
        <h1 className="leading-10  text-[1.7rem]  max-md:text-[1.4rem] max-sm:text-[2rem] font-bold text-white mt-5">
          Akomolafe Temitope <br /> Joseph.
        </h1>
        <div>
          <div className="w-50 m-auto mt-3 h-1 bg-gray-700"></div>
          <h1 className="leading-10 max-md:leading-8 text-[1.2rem] max-md:text-[1.4rem] max-sm:text[2rem]  font-semibold text-white max-md:mt-3">
            Fendend Developer
          </h1>
           <div className="w-50 m-auto mt-3 h-1 bg-gray-700"></div>
        </div>

        <p className="mt-5  max-md:mt-4 font-bold text-l max-sm:text-xl max-md:text-l max-md:p-2 text-white">
          I specialize in building clean, responsive, and high-performing
          websites. With expertise in React,
          <br /> Tailwind CSS, and JavaScript, I create seamless digital
          experiences that are both visually appealing and user-friendly. <br />
          My focus is on translating ideas into functional, accessible, and
          reliable web solutions.
        </p>
      </div>

      <Btn />
    </div>
  );
};

export default HeroSection;
