import React from "react";

const Expertise = () => {
  return (
    <div className="bg-[#111827] h-screen pt-10 max-md:pt-2 max-md:p-5 text-white">
      <div id="skills">
        <div className="max-md:mt-5 max-sm:m-2">
          <h1
            className="text-center pb-5 text-4xl m
          max-md:text-2xl font-bold mt-10 max-md:mt-2 max-sm:text-3xl"
          >
            Technical Skills
          </h1>
          <div className="w-100 max-md:w-50 m-auto h-1 bg-gray-700"></div>
        </div>

        <div className=" grid grid-cols-2 max-md:grid-cols-1 gap-5 max-md:gap-1 m-15 max-md:m-5 max-md:mt-2">
          <div className="pb-5 max-md:mt-4 max-sm:mt-7">
            <h1 className="flex justify-between text-xl space-x-50 max-md:space-30 mb-2">
              React <span>70%</span>
            </h1>
            <div className=" h-3 bg-gray-800 rounded-2xl">
              <div className="w-[75%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <div className="pb-5  max-md:mt-4 max-sm:mt-7">
            <h1 className="flex justify-between text-xl space-x-50 mb-2">
              Tailwind <span>78%</span>
            </h1>
            <div className="h-3 bg-gray-800 rounded-2xl">
              <div className="w-[78%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <div className="pb-5  max-md:mt-4 max-sm:mt-7">
            <h1 className="flex justify-between text-xl space-x-50 mb-2">
              JavaScript <span>50%</span>
            </h1>
            <div className="h-3 bg-gray-800 rounded-2xl">
              <div className="w-[50%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <div className="pb-5  max-md:mt-4 max-sm:mt-7">
            <h1 className="flex justify-between text-xl space-x-50 mb-2">
              Modern CSS <span>78%</span>
            </h1>
            <div className=" h-3 bg-gray-800 rounded-2xl">
              <div className="w-[78%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <div className="pb-5  max-md:mt-4 max-sm:mt-7">
            <h1 className="flex justify-between text-xl space-x-50 mb-2">
              UI/UX Design <span>70%</span>
            </h1>
            <div className=" h-3 bg-gray-800 rounded-2xl">
              <div className="w-[70%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <div className="pb-5  max-md:mt-4 max-sm:mt-7">
            <h1 className="flex justify-between text-xl space-x-50 mb-2">
              Responsive Design <span>70%</span>
            </h1>
            <div className=" h-3 bg-gray-800 rounded-2xl">
              <div className="w-[75%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <div className="pb-5  max-md:mt-4 max-sm:mt-7">
            <h1 className="flex justify-between text-xl space-x-50 mb-2">
              Web Animation <span>70%</span>
            </h1>
            <div className=" h-3 bg-gray-800 rounded-2xl">
              <div className="w-[70%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <div className="pb-5  max-mb:mt-4 max-sm:mt-7">
            <h1 className="flex justify-between text-xl space-x-50 mb-2">
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
