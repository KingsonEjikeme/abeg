import React from "react";
import "./HeroSection.css";
import HeroImage from "../../assets/pexels-daniel-edeke-2113709.jpg";
import SupportTab from "../SupportTab/SupportTab";
import TypewriterComponent from "typewriter-effect";
import HeadingText from "../HeadingText/HeadingText";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={HeroImage} alt="hero-image" className="hero-image" />
      <div className="hero-text">
        
       
        <TypewriterComponent skipAddStyles={true}
        loop={true}
          delay={10}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(700)
              .typeString("One book.<br>")
              .pauseFor(400)
              .typeString("A thousand stories.")
              .start();
          }}
          className="typewriter"
        />
      </div>
      <div style={{ padding: "50px !important" }}>
        <SupportTab />
      </div>
    </div>
  );
};

export default HeroSection;
