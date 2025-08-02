import NavBar from "./Components/NavBar";
import Homepage from "./Pages/Homepage";
import HeroSection from "./MyheroPage/HeroSection";
import { Route, Routes } from "react-router-dom";
import EmailPage from "./Components/EmailPage";
import { BackgroundBeams } from "./components2/background-beams";




const App = () => {
  
  return (
   <div>
    <BackgroundBeams />
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
