import React from "react";
import Portfolio from "../Components/Portfolio";
import img1 from "../assets/cleaningservices.png";
import img2 from "../assets/design.jpg";
import img3 from "../assets/design2.jpg";
import img4 from "../assets/design3.jpg";
import Expertise from "../Components/Expertise";
import Contact from "../Components/Contact";
import Ratings from "../Components/Ratings";
import TextimonialProps from "../Components/TextimonialProps";
import { FloatButton } from "antd";
import HeroSection from "../MyheroPage/HeroSection";

const Homepage = () => {
  return (
    <div>
     
      <Expertise />
      <div className="bg-gray-800">
        <h1 className="text-center text-3xl max-md:text-4xl font-extrabold text-white pt-10">
          Featured Projects
        </h1>
        <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-5 m-15 max-md:m-5">
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
        <div className="w-[100%] max-sm:w-fit h-1 bg-gray-600 mt-15 "></div>
      </div>

      <TextimonialProps />
      <Ratings />
      <Contact />
      <FloatButton.BackTop className="text-gray-900" />
    </div>
  );
};

export default Homepage;
