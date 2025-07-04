import React from "react";
import { SiJoplin } from "react-icons/si";

const NavBar = () => {
  return (
    <div className=" bg-blue-700 h-screen pt-10">
      <div className=" flex justify-around items-center">
        <div className="flex">
          <SiJoplin className="text-4xl text-green-500" />
          <h1 className="text-3xl font-semibold">-temitope</h1>
        </div>

        <div>
          <ul className="flex font-bold text-gray-900 justify-between gap-10 capitalize text-xl cursor-pointer text-white">
            <li className="hover:text-gray-400 transition-all duration-700 p-2">
              about
            </li>
            <li className="hover:text-gray-400 transition-all duration-700 p-2">
              portfolio
            </li>
            <li className="hover:text-gray-400 transition-all duration-700 p-2">
              services
            </li>
            <li className="hover:text-gray-400 transition-all duration-700 p-2">
              testimonials
            </li>
          </ul>
        </div>
        <div>
          <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            let's connect
          </button>
        </div>
      </div>

      <div className="items-center mt-10 text-center">
        <h1 className="leading-10 text-[2rem] font-bold text-white">
          Hello, I'm Akomolafe Temitope Joseph <br /> Professional Frontend
          Developer
        </h1>

        <p className="mt-5 font-bold text-l ">
          I specialize in building clean, responsive, and high-performing
          websites. With expertise in React,<br /> Tailwind CSS, and JavaScript, I
          create seamless digital experiences that are both visually appealing
          and user-friendly. <br />My focus is on translating ideas into functional,
          accessible, and reliable web solutions.
        </p>

        <div className="space-x-5 mt-10">
          <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
            Let's work together to bring your ideas to life.

          </button>

        </div>
      </div>
    </div>
  );
};

export default NavBar;
