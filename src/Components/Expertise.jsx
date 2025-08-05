import React from "react";

const Expertise = () => {
  return (
    <div className="bg-gray-900  h-screen pt-5 lg:pt-10 text-white">
      <div
        id="skills"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="mt-2 lg:mt-15 ">
          <h1
            className="text-center pb-2 text-xl m
          md:text-2xl lg:text-3xl font-bold mt-3 lg:pt-10"
          >
            Technical Skills
          </h1>
          
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-2 m-5 lg:m-5">

          <div className="pb-3 lg:p-2 mt-4">
            
            <h1 className="flex justify-between text-l  space-30 mb-2">
              React <span>70%</span>
            </h1>
            <div className=" h-3 bg-gray-800 rounded-2xl">
              <div className="w-[75%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>

          <div className="pb-3 lg:p-2 mt-4">
            <h1 className="flex justify-between text-l mb-2">
              Tailwind <span>78%</span>
            </h1>
            <div className="h-3 bg-gray-800 rounded-2xl">
              <div className="w-[78%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>

          <div className="pb-3 lg:p-2 mt-4">
            <h1 className="flex justify-between text-l mb-2">
              JavaScript <span>50%</span>
            </h1>
            <div className="h-3 bg-gray-800 rounded-2xl">
              <div className="w-[50%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>

          <div className="pb-3 lg:p-2 mt-4">
            <h1 className="flex justify-between text-l mb-2">
              Modern CSS <span>78%</span>
            </h1>
            <div className=" h-3 bg-gray-800 rounded-2xl">
              <div className="w-[78%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>

          <div className="pb-3 mt-4">
            <h1 className="flex justify-between text-l mb-2">
              UI/UX Design <span>70%</span>
            </h1>
            <div className=" h-3 bg-gray-800 rounded-2xl">
              <div className="w-[70%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>

          <div className="pb-3  lg:mt-4">
            <h1 className="flex justify-between text-l mb-2">
              Responsive Design <span>70%</span>
            </h1>
            <div className=" h-3 bg-gray-800 rounded-2xl">
              <div className="w-[75%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>

          <div className="pb-3  lg:mt-4">
            <h1 className="flex justify-between text-l mb-2">
              Web Animation <span>70%</span>
            </h1>
            <div className=" h-3 bg-gray-800 rounded-2xl">
              <div className="w-[70%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>

          <div className="pb-3 lg:mt-4">
            <h1 className="flex justify-between text-l  mb-2">
              Git <span>80%</span>
            </h1>
            <div className=" h-3 bg-gray-800 rounded-2xl">
              <div className="w-[80%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Expertise;
