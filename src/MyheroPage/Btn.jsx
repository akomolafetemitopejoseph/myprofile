import React from "react";
import { useNavigate } from "react-router-dom";

const Btn = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div class="flex items-center justify-center mt-7 max-md:mt-3 max-md:p-5">
        <div class="group relative">
          <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>

          <button onClick={() => navigate("/email")} class="relative flex items-center gap-4 rounded-lg bg-gray-900 cursor-pointer px-7 max-md:px-2 py-5 max-md:py-2  hover:text-gray-700 active:bg-gray-100 transition-all duration-700 font-bold text-white text-xl capitalize max-md:text-xl">
            let's work together to bring your ideas to life
          </button>
        </div>
      </div>
    </div>
  );
};

export default Btn;
