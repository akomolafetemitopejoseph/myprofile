import React from "react";
import myimage from "../assets/mypics.jpg";
import { SiJoplin } from "react-icons/si";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className=" bg-[#111827] h-screen pt-10">
      <div className=" flex justify-around items-center">
        <div className="flex">
          <SiJoplin className="text-4xl text-gray-500 " />
          <h1 className="text-3xl font-semibold bg-gradient-to-tr from-gray-400 via-gray-700 to-green-400 bg-clip-text text-transparent">
            -temitope
          </h1>
        </div>

        <div>
          <ul className="flex font-bold justify-between gap-10 capitalize text-xl cursor-pointer text-white">
            <li className="hover:text-gray-400 transition-all duration-700 p-2">
              about
            </li>
            <Link to="skills" smooth={true} duration={1000}>
            <li className="hover:text-gray-400 transition-all duration-700 p-2">
              skills
            </li>
            </Link>
            <Link to="porfolio" smooth={true} duration={1000}>
              <li className="hover:text-gray-400 transition-all duration-700 p-2">
                portfolio
              </li>
            </Link>

            <li className="hover:text-gray-400 transition-all duration-700 p-2">
              testimonials
            </li>
            <Link to="contact" smooth={true} duration={1000}>
            <li className="hover:text-gray-400 transition-all duration-700 p-2">
              contacts
            </li>
            </Link>
          </ul>
        </div>

        <div class="relative">
          <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur"></div>
          <button class="relative rounded-lg bg-gray-900 cursor-pointer px-3 py-2 hover:text-gray-700 active:bg-gray-100 transition-all duration-700 font-bold text-white text-xl capitalize">
            let's connect
          </button>
        </div>
      </div>

      <div className="items-center mt-10 text-center">
        <div>
          <img
            className="w-[150px] h-[150px] rounded-[50%] border-4 border-gray-600 mx-auto"
            src={myimage}
            alt="imagee"
          />
        </div>
        <h1 className="leading-10 text-[1.7rem] font-bold text-white mt-5">
          Akomolafe Temitope <br /> Joseph.
        </h1>
        <h1 className="leading-10 text-[1.2rem] font-semibold text-white">
          Fendend Developer
        </h1>

        <p className="mt-5 font-bold text-l text-white">
          I specialize in building clean, responsive, and high-performing
          websites. With expertise in React,
          <br /> Tailwind CSS, and JavaScript, I create seamless digital
          experiences that are both visually appealing and user-friendly. <br />
          My focus is on translating ideas into functional, accessible, and
          reliable web solutions.
        </p>

        <div class="flex items-center justify-center mt-10">
          <div class="group relative">
            <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
            <button class="relative flex items-center gap-4 rounded-lg bg-gray-900 cursor-pointer px-7 py-4 hover:text-gray-700 active:bg-gray-100 transition-all duration-700 font-bold text-white text-xl capitalize">
              let's work together to bring your ideas to life
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
