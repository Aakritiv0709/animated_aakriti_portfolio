import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Parallax from "./Components/Parallax/Parallax";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      <Parallax type="whoami" />
      <About />
      <Parallax type="experience" />
      <Services />
      <Projects />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
