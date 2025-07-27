import React from "react";
import NavBar from "./Components/NavBar";
import Homepage from "./Pages/Homepage";
import HeroSection from "./MyheroPage/HeroSection";
import { Route, Routes } from "react-router-dom";
import EmailPage from "./Components/EmailPage";

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Routes>
        <Route path="/email" element={<EmailPage />} />
      </Routes>
      <Routes>
        <Route path="/connect" element={<EmailPage />} />
      </Routes>
      <Homepage />
    </div>
  );
};

export default App;
