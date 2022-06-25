import React from "react";
import "./HeroSection.css";
import HeroImage from "../../assets/pexels-daniel-edeke-2113709.jpg";
import SupportTab from "../SupportTab/SupportTab";
import HeadingText from "../HeadingText/HeadingText";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={HeroImage} alt="hero-image" className="hero-image" />
      <div className="hero-text">
        One book. <br /> A thousand stories.
      </div>
      <div style={{padding: "50px !important"}}>
        <SupportTab />
      </div>
    </div>
  );
};

export default HeroSection;
