import React from "react";
import { SiJoplin } from "react-icons/si";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="fixed  top-0 left-0 right-0 shadow bg-[#111827] p-5 z-50">
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
            <Link to="testimonials" smooth={true} duration={1000}>
              <li className="hover:text-gray-400 transition-all duration-700 p-2">
                testimonials
              </li>
            </Link>
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
    </div>
  );
};

export default NavBar;
