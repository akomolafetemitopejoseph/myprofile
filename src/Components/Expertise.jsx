import React from "react";

const Expertise = () => {
  return (
    <div className="bg-[#111827] h-screen pt-10 max-md:p-5 text-white">
      <div id="skills">
        <div>
          <h1 className="text-center text-4xl  max-md:text-2xl font-bold mt-10 max-md:mt-15">
            Technical Skills
          </h1>
        </div>

        <div className=" grid grid-cols-2 max-md:grid-cols-1 gap-5 max-md:gap-1 m-15 max-md:m-5 max-md:mt-2">
          <div className="pb-5 max-md:pb-5 max-md:mt-10">
            <h1 className="flex justify-between text-sm space-x-50 max-md:space-30 mb-2">
              React <span>70%</span>
            </h1>
            <div className=" h-3 bg-gray-800 rounded-2xl">
              <div className="w-[75%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <div className="pb-5  max-md:pb-5 max-md:mt-5">
            <h1 className="flex justify-between text-sm space-x-50 mb-2">
              Tailwind <span>78%</span>
            </h1>
            <div className="h-3 bg-gray-800 rounded-2xl">
              <div className="w-[78%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <div className="pb-5  max-md:pb-5 max-md:mt-5">
            <h1 className="flex justify-between text-sm space-x-50 mb-2">
              JavaScript <span>50%</span>
            </h1>
            <div className="h-3 bg-gray-800 rounded-2xl">
              <div className="w-[50%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <div className="pb-5  max-md:pb-5 max-md:mt-5">
            <h1 className="flex justify-between text-sm space-x-50 mb-2">
              Modern CSS <span>78%</span>
            </h1>
            <div className=" h-3 bg-gray-800 rounded-2xl">
              <div className="w-[78%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <div className="pb-5  max-md:pb-5 max-md:mt-5">
            <h1 className="flex justify-between text-sm space-x-50 mb-2">
              UI/UX Design <span>70%</span>
            </h1>
            <div className=" h-3 bg-gray-800 rounded-2xl">
              <div className="w-[70%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <div className="pb-5  max-md:pb-5 max-md:mt-5">
            <h1 className="flex justify-between text-sm space-x-50 mb-2">
              Responsive Design <span>70%</span>
            </h1>
            <div className=" h-3 bg-gray-800 rounded-2xl">
              <div className="w-[75%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <div className="pb-5  max-md:pb-5 max-md:mt-5">
            <h1 className="flex justify-between text-sm space-x-50 mb-2">
              Web Animation <span>60%</span>
            </h1>
            <div className=" h-3 bg-gray-800 rounded-2xl">
              <div className="w-[60%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <div className="pb-5  max-md:pb-5 max-md:mt-5">
            <h1 className="flex justify-between text-sm space-x-50 mb-2">
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
