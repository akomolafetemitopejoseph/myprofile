import React from "react";
import { GoArrowRight } from "react-icons/go";

const Portfolio = ({ img, heading, paragraph, view }) => {
  return (
    <div>
      
      <div id="porfolio">
        <div className="max-md:w-fit max-md:p-5">
          <img className="w-full h-[250px] m-auto " src={img} alt="" />
          <div className="w-full space-y-5 bg-gray-700  p-5">
            <h1 className="text-white capitalize text-2xl max-sm:text-3xl font-bold">
              {heading}
            </h1>
            <p className="text-gray-300 text-xl max-sm:text-2xl">{paragraph}</p>
            <p className="flex items-center gap-2 mt-5 text-blue-500 hover:text-blue-200 font-bold text-xl max-sm:text-2xl capitalize cursor-pointer transition-all duration-700">
              {view}
              <GoArrowRight className="text-2xl" />
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Portfolio;
