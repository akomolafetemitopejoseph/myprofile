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
      <div className="items-center mt-15 max-md:mt-2 pt-15 max-md:pt-2 text-center">
        <div>
          <img
            className="w-[200px] max-md:w-[150px] max-sm:w-[200px] h-[200px]  max-md:h-[150px] max-sm:h-[200px] rounded-[50%] border-5 border-gray-400 mx-auto"
            src={myimage}
            alt="imagee"
          />
        </div>
        <h1 className="leading-7  text-2xl  max-md:text-[1.4rem] max-sm:text-[1.5rem] font-bold text-white mt-5">
          Akomolafe Temitope <br /> Joseph.
        </h1>
        <div>
          <div className="w-50 m-auto mt-3 h-1 bg-gradient-to-r from-gray-900 via-[#1d1f29dd] to-gray-800"></div>
          {/* <h1 className="leading-10 max-md:leading-8 text-[1.2rem] max-md:text-[1.4rem] max-sm:text[2rem]  font-semibold text-white max-md:mt-3">
            Fendend Developer
          </h1> */}
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
              className="leading-tight max-md:leading-8 text-[1.2rem] max-md:text-[20px] max-sm:text[1rem]  font-semibold text-white max-md:mt-3"
              repeat={Infinity}
            />
          </div>
          <div className="w-50 m-auto mt-3 h-1 bg-gradient-to-r from-gray-900 via-[#1d1f29dd] to-gray-800"></div>
        </div>

        <p
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="mt-2  max-md:mt-4 font-bold text-l max-sm:text-xl max-md:text-l max-md:p-2 text-white"
        >
          I specialize in building clean, responsive, and high-performing
          websites. <br /> With expertise in React, Tailwind CSS, and
          JavaScript, <br />I create seamless digital experiences that are both
          visually appealing and user-friendly. <br />
          My focus is on translating ideas into functional, accessible, and
          reliable web solutions.
        </p>
      </div>

      <Btn />
    </div>
  );
};

export default HeroSection;
