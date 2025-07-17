import React from "react";
import CountUp from "react-countup";

const Ratings = () => {
  return (
    <div className="bg-gray-900">
      
      <div className="flex justify-center max-md:grid p-15 max-md:p-5">

        <div className="flex max-md:grid p-5 items-center max-md:text-center gap-5 w-[240px] max-md:w-[100%]">
          <h1 className="text-7xl text-white " > <CountUp end={2} duration={2} delay={1}/></h1>
          <p className="text-gray-400 text-l">Years of experience</p>
          <div className="w-1 max-sm:h-1 max-sm:w-[100%] max-sm:text-center h-30 bg-gray-600"></div>
        </div>

        <div className="flex max-md:grid p-5 items-center max-md:text-center gap-5 w-[240px] max-md:w-[100%]">
          <h1 className="text-7xl text-white "><CountUp end={20} duration={20} delay={1}/></h1>
          <p className="text-gray-400 text-l">Successful projects</p>
          <div className="w-1 max-md:h-1 max-md:w-[100%] max-md:text-center h-30 bg-gray-600"></div>
        </div>

        <div className="flex  max-md:grid p-5 items-center max-md:text-center gap-5 w-[240px] max-md:w-[100%]">
          <h1 className="text-7xl text-white "><CountUp end={5} duration={5} delay={1}/></h1>
          <p className="text-gray-400 text-l">Happy clients</p>
          <div className="w-1 max-sm:h-1 max-md:w-[100%] max-md:text-center h-30 bg-gray-600"></div>
        </div>

        <div className="flex max-md:grid p-5 items-center gap-5 w-[240px] max-md:w-[100%] max-md:text-center">
          <h1 className="text-7xl text-white "><CountUp end={2} duration={2} delay={1}/></h1>
          <p className="text-gray-400 text-l">Individual awards</p>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
