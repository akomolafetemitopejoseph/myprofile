import React from "react";
import NavBar from "./Components/NavBar";
import Homepage from "./Pages/Homepage";

import HeroSection from "./MyheroPage/HeroSection";

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Homepage />
    </div>
  );
};

export default App;
