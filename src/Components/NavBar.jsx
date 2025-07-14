import React, { useState } from "react";
import { SiJoplin } from "react-icons/si";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
  const [islogin, setLogin] = useState(true);

  const login = () => {
    setLogin(false);
  };

  const crossBar =() => {
    setLogin(!islogin)
  }
  return (
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

        <div class="hidden relative">
          <div class="absolute -inset-1 rounded-lg bg-gradient00 opacity-75 blur"></div>
          <button
            onClick={login}
            class="relative rounded-lg bg-gray-900 cursor-pointer px-3 py-5 hover:text-gray-700 active:bg-gray-100 transition-all duration-700 font-bold text-white text-xl capitalize"
          >
            let's connect
          </button>
        </div>
      </div>

     <div className="lg:hidden text-2xl z-10 ">
        {islogin ? (
          <RxHamburgerMenu onClick={login} className="flex lg:hidden" />
        ) : (
          <RxCross1 onClick={crossBar} className="flex lg:hidden" />
        )}
      </div>

      <div className="">
        <ul className="lg:hidden z-50 w-full text-center absolute  bg-gray-700 top-0 left-0 font-bold capitalize text-2xl text-white">
           
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
    </div>
  );
};

export default NavBar;
