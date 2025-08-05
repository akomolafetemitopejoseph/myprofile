import React from "react";
import CountUp from "react-countup";

const Ratings = () => {
  return (
    <div className="bg-gray-900 ">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="grid justify-center md:flex lg:flex  pt-5 lg:pt-10 lg:p-10"
      >
        <div className="grid lg:flex lg
        items-center text-center gap-5 p-5">
          <h1 className="text-4xl lg:text-7xl text-white ">
          
            <CountUp end={2} duration={2} delay={1} />
          </h1>
          <p className="text-gray-400 text-xl">Years of experience</p>
          <div className="w-[100%] lg:w-1  h-1 lg:h-30 bg-gray-600"></div>
        </div>

        <div className="grid  lg:flex lg:items-center text-center gap-5 p-5">
          <h1 className="text-4xl lg:text-7 text-white ">
            <CountUp end={20} duration={20} delay={1} />
          </h1>
          <p className="text-gray-400 text-xl">Successful projects</p>
          <div className="w-[100%] lg:w-1 text-center h-1 lg:h-30 bg-gray-600"></div>
        </div>

        <div className="grid lg:flex lg:items-center text-center gap-5 p-5">
          <h1 className="text-4xl lg:text-7 text-white ">
            <CountUp end={5} duration={5} delay={1} />
          </h1>
          <p className="text-gray-400 text-xl">Happy clients</p>
          <div className="w-[100%] lg:w-1 text-center h-1 lg:h-30 bg-gray-600"></div>
        </div>

        <div className="grid lg:flex lg:items-center text-center gap-5 p-5 ">
          <h1 className="text-4xl lg:text-7xl text-white ">
            <CountUp end={2} duration={2} delay={1} />
          </h1>
          <p className="text-gray-400 text-xl mb-3">Individual awards</p>
      
        </div>
      </div>
    </div>
  );
};

export default Ratings;
