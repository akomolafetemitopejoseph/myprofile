import React from "react";
import clservices from "../assets/cleaningservices.png";
import design1 from "../assets/design.jpg";
import design2 from "../assets/design2.jpg";
import design3 from "../assets/design3.jpg";

const Portfolio = () => {
  return (
    <div>
      <h1>featured projects</h1>
      <div>
        <img className="w-[300px] h-[300px]" src={clservices} alt="project-1" />
      </div>
      <div>
        <img className="w-[300px] h-[300px]" src={design1} alt="project-2" />
      </div>
      <div>
        <img className="w-[300px] h-[300px]" src={design2} alt="project-3" />
      </div>
      <div>
        <img className="w-[300px] h-[300px]" src={design3} alt="project-4" />
      </div>
    </div>
  );
};

export default Portfolio;
