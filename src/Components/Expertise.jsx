import React from "react";

const Expertise = () => {
  return (
    <div className="bg-[#111827] h-screen pt-10 text-white">
      <div>
        <div>
          <h1 className="text-center text-4xl font-bold mt-10">
            Technical Skills
          </h1>
        </div>

        <div className="w-[80%] grid grid-cols-2 justify-self-center mt-10 gap-10 m-15 ">
          <div>
            <h1 className="flex justify-between text-sm space-x-50 mb-2">
              React <span className="mr-15">70%</span>
            </h1>
            <div className="w-[90%] h-3 bg-gray-800 rounded-2xl">
              <div className="w-[75%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <div>
            <h1 className="flex justify-between text-sm space-x-50 mb-2">
              Tailwind <span className="mr-15">78%</span>
            </h1>
            <div className="w-[90%] h-3 bg-gray-800 rounded-2xl">
              <div className="w-[78%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <div>
            <h1 className="flex justify-between text-sm space-x-50 mb-2">
              JavaScript <span className="mr-15">50%</span>
            </h1>
            <div className="w-[90%] h-3 bg-gray-800 rounded-2xl">
              <div className="w-[50%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <div>
            <h1 className="flex justify-between text-sm space-x-50 mb-2">
              Modern CSS <span className="mr-15">78%</span>
            </h1>
            <div className="w-[90%] h-3 bg-gray-800 rounded-2xl">
              <div className="w-[78%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <div>
            <h1 className="flex justify-between text-sm space-x-50 mb-2">
              UI/UX Design <span className="mr-15">70%</span>
            </h1>
            <div className="w-[90%] h-3 bg-gray-800 rounded-2xl">
              <div className="w-[70%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <div>
            <h1 className="flex justify-between text-sm space-x-50 mb-2">
              Responsive Design <span className="mr-15">70%</span>
            </h1>
            <div className="w-[90%] h-3 bg-gray-800 rounded-2xl">
              <div className="w-[75%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <div>
            <h1 className="flex justify-between text-sm space-x-50 mb-2">
              Web Animation <span className="mr-15">60%</span>
            </h1>
            <div className="w-[90%] h-3 bg-gray-800 rounded-2xl">
              <div className="w-[60%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <div>
            <h1 className="flex justify-between text-sm space-x-50 mb-2">
              Git <span className="mr-15">80%</span>
            </h1>
            <div className="w-[90%] h-3 bg-gray-800 rounded-2xl">
              <div className="w-[80%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Expertise;
