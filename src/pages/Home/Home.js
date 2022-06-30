import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Transition from "../../transitions/Transition";
import Blog from "../Blog/Blog";
import Future from "../Future/Future";
import Movement from "../Movement/Movement";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Transition>
        <HeroSection />
      </Transition>
      <Future />
      <Movement />
      <Blog />
    </div>
  );
};

export default Home;
