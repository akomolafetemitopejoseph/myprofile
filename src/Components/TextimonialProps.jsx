import React from "react";
import Testimonails from "./Testimonails";

const TextimonialProps = () => {
  return (
    <div>
      <h1 className="bg-gray-900 text-center text-4xl max-sm:text-2xl p-10 max-sm:p-5 font-bold text-white">See why they love my work</h1>
      <div className="bg-gray-900 grid max-sm:grid-cols-1 max-sm:p-5 grid-cols-2 p-15 gap-5 max-sm:gap-3">
        <Testimonails
          text="Working with Temitope was a game-changer for our business. He delivered a clean, responsive website that not only looked amazing but also performed flawlessly on all devices. Highly recommended!"
          name="Sarah O"
          role="Small Business Owner"
        />

        <Testimonails
          text="Temitope brought our vision to life better than we imagined. His attention to detail and creative UI/UX design made our brand stand out online. We'll definitely work with him again!"
          name="Michael A"
          role="Marketing Director"
        />

        <Testimonails
          text="Professional, fast, and reliable. Temitope created a custom web solution for us that was not only beautiful but also easy to manage. We’ve seen an increase in user engagement since launch."
          name="Fatima D"
          role="Non-Profit Organizer"
        />

        <Testimonails
          text="From concept to launch, Temitope handled everything with excellence. His frontend skills, especially with React and Tailwind CSS, made our app feel modern and user-friendly. A true frontend expert!"
          name="David K"
          role="Tech Startup Founder"
        />
      </div>
    </div>
  );
};

export default TextimonialProps;
