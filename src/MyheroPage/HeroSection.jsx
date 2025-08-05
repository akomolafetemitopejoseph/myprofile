import React, { useEffect } from "react";
// import myimage from "../assets/mypics.jpg";
import myimage from "../assets/myimage.jpg";
import Btn from "./btn";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, {});
  return (
    <div id="about" className="bg-gray-900  mt-20 h-screen max-md:mt-20 max-md:p-5">
      <div className="items-center mt-15 m-5 max-md:mt-2 pt-15 max-md:pt-2 text-center">
        <div>
          <img
            className="w-[200px] lg:w-[300px]  h-[200px]  lg:h-[300px] max-sm:h-[200px] rounded-[50%] border-5 border-gray-400 mx-auto"
            src={myimage}
            alt="imagee"
          />
        </div>
        <h1 className="leading-7  text-xl lg:text-l  font-bold text-white mt-5">
          Akomolafe Temitope <br /> Joseph.
        </h1>
        <div>
          <div className="w-50 m-auto mt-3 h-1 bg-gradient-to-r from-gray-900 via-[#1d1f29dd] to-gray-800"></div>
          
          <div>
            <TypeAnimation
              sequence={[
                "I am a frontend developer.",
                1000,
                "I specialize in building clean, responsive,  and high-performing websites.",
                1000,
              ]}
              wrapper="span"
              speed={30}
              className="leading-tight lg:leading-3 text-l lg:text-xl font-semibold text-white mt-3"
              repeat={Infinity}
            />
          </div>
          <div className="w-50 m-auto mt-3 h-1 bg-gradient-to-r from-gray-900 via-[#1d1f29dd] to-gray-800"></div>
        </div>

        <p
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="mt-2 lg:mt-2 font-bold text-center text-sm lg:text-xl lg:p-2 text-white"
        >
          I specialize in building clean, responsive, and high-performing
          websites.  With expertise in React, Tailwind CSS, and
          JavaScript, 
          I create seamless digital experiences that are both
          visually appealing and user-friendly. 
          My focus is on translating ideas into functional, accessible, and
          reliable web solutions.
        </p>
      </div>

      <Btn />
    </div>
  );
};

export default HeroSection;
