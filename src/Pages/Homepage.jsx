import React from "react";
import Portfolio from "../Components/Portfolio";
import img1 from "../assets/cleaningservices.png";
import img2 from "../assets/design.jpg";
import img3 from "../assets/design2.jpg";
import img4 from "../assets/design3.jpg";
import Expertise from "../Components/Expertise";

const Homepage = () => {
  return (
    <div>
      <Expertise />
      <div className="bg-gray-800">
        <h1 className="text-center text-3xl font-extrabold text-white pt-10">
          Featured Projects
        </h1>
        <div className="grid grid-cols-2 justify-center gap-10 mt-10 justify-items-center">
          <Portfolio
            img={img1}
            heading="Project Title 1"
            paragraph="A brief description of the project and the technologies used in its development."
            view="view project"
          />
          <Portfolio
            img={img2}
            heading="Project Title 2"
            paragraph="A brief description of the project and the technologies used in its development."
            view="view project"
          />
          <Portfolio
            img={img3}
            heading="Project Title 3"
            paragraph="A brief description of the project and the technologies used in its development."
            view="view project"
          />
          <Portfolio
            img={img4}
            heading="Project Title 4"
            paragraph="A brief description of the project and the technologies used in its development."
            view="view project"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
