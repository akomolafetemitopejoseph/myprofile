import React from "react";
import CountUp from "react-countup";

const Ratings = () => {
  return (
    <div className="bg-gray-900">
      
      <div className="flex justify-center p-15">

        <div className="flex p-5 items-center gap-5 w-[240px]">
          <h1 className="text-7xl text-white " > <CountUp end={2} duration={2} delay={1}/></h1>
          <p className="text-gray-400 text-l">Years of experience</p>
          <div className="w-1 h-30 bg-gray-600"></div>
        </div>

        <div className="flex p-5 items-center gap-5 w-[240px]">
          <h1 className="text-7xl text-white "><CountUp end={20} duration={20} delay={1}/></h1>
          <p className="text-gray-400 text-l">Successful projects</p>
          <div className="w-1 h-30 bg-gray-600"></div>
        </div>

        <div className="flex p-5 items-center gap-5 w-[240px]">
          <h1 className="text-7xl text-white "><CountUp end={5} duration={5} delay={1}/></h1>
          <p className="text-gray-400 text-l">Happy clients</p>
          <div className="w-1 h-30 bg-gray-600"></div>
        </div>

        <div className="flex p-5 items-center gap-5 w-[240px]">
          <h1 className="text-7xl text-white "><CountUp end={2} duration={2} delay={1}/></h1>
          <p className="text-gray-400 text-l">Individual awards</p>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
