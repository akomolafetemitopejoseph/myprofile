import React, { useState } from "react";
import { SiJoplin } from "react-icons/si";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
  const [navBar, setNavBar] = useState("");
  const click = () => {
    setNavBar(!navBar);
  };

 

  return (
    <>
      <div className="w-full fixed top-0 left-0 right-0 shadow bg-[#111827] p-5  z-50">
        <div className=" flex justify-between  items-center">
          <div className="flex md:text-3xl ">
            <SiJoplin className="text-4xl text-gray-500 " />

            <h1 className="text-3xl font-semibold bg-gradient-nt">-temitope</h1>
          </div>
          <div className="">
            <ul className="lg:flex hidden font-bold justify-between gap-10 capitalize text-xl cursor-pointer text-white">
              <li className=" p-5">about</li>
              <Link to="skills" smooth={true} duration={1000}>
                <li className=" p-5">skills</li>
              </Link>
              <Link to="porfolio" smooth={true} duration={1000}>
                <li className=" p-5">portfolio</li>
              </Link>
              <Link to="testimonials" smooth={true} duration={1000}>
                <li className=" p-5">testimonials</li>
              </Link>
              <Link to="contact" smooth={true} duration={1000}>
                <li className=" p-5">contacts</li>
              </Link>
            </ul>
          </div>
          <div class=" hidden:flex  items-center justify-center mt-10"></div>
          <div class="lg:flex hidden group relative">
            <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500  opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
            <button class=" relative items-center gap-4 rounded-lg bg-gray-900 cursor-pointer px-3 py-2 hover:text-gray-700 active:bg-gray-100 transition-all duration-700 font-bold text-white text-xl capitalize">
              let's connect
            </button>
          </div>
          <div className="lg:hidden text-2xl">
            {navBar ? (
              <RxHamburgerMenu onClick={click} />
            ) : (
              <RxCross1 onClick={click} />
            )}
          </div>
        </div>
      </div>
      {navBar &&
      (
        <nav>
          <ul className="lg:hidden absolute right-0 top-20 bg-gray-800 font-bold opacity-95 capitalize w-full text-2xl  text-white text-center">
            <li className=" p-5">about</li>
            <Link to="skills" smooth={true} duration={1000}>
              <li className=" p-5">skills</li>
            </Link>
            <Link to="porfolio" smooth={true} duration={1000}>
              <li className=" p-5">portfolio</li>
            </Link>
            <Link to="testimonials" smooth={true} duration={1000}>
              <li className=" p-5">testimonials</li>
            </Link>
            <Link to="contact" smooth={true} duration={1000}>
              <li className=" p-5">contacts</li>
            </Link>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;
