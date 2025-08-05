import React from "react";
// import Portfolio from "../Components/Portfolio";
// import img1 from "../assets/cleaningservices.png";
// import img2 from "../assets/design2.PNG";
import Expertise from "../Components/Expertise";
import Contact from "../Components/Contact";
import Ratings from "../Components/Ratings";
// import TextimonialProps from "../Components/TextimonialProps";
import { FloatButton } from "antd";
import { AnimatedTestimonialsDemo } from "../component3/Testimonals2";


const Homepage = () => {
  return (
    <div>
      
      <Expertise />
      {/* <div className="bg-gray-900 ">
        <h1 className="text-center text-3xl max-md:text-4xl font-extrabold text-white pt-10">
          Featured Projects
        </h1>
        <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-5 m-15 max-md:m-5">
          <Portfolio
            img={img1}
            heading="Project Title 1"
            paragraph=" A responsive and user-friendly cleaning services website built using React and Tailwind CSS. The project showcases core cleaning services with dedicated sections for About, Services, Testimonials, and Contact. It includes a modern, mobile-first design, animated components for enhanced user interaction, and clear call-to-action buttons for bookings. The project demonstrates strong frontend development skills in layout, component structuring, and styling using utility-first CSS."
            view="view project"
          />

          <Portfolio
            img={img2}
            heading="Developed a simple calculator -"
            paragraph="This project showcases a basic calculator
            capable of handling standard arithmetic
            operations like addition, subtraction,
            multiplication, and division.
            It features a clean user interface built with
            HTML and styled using CSS, while JavaScript
            handles the logic and interactivity"
            view="view project"
          />
          </div>
        <div className="w-[100%] max-sm:w-fit h-1 bg-gray-600 mt-15 "></div>
      </div> */}

      {/* <TextimonialProps /> */}
      <AnimatedTestimonialsDemo />
      <Ratings />
      <Contact />
      <FloatButton.BackTop className="text-gray-900" />
    </div>
  );
};

export default Homepage;
