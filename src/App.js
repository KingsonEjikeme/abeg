import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import NavContact from "./components/NavContact/NavContact";
import Believe from "./pages/Believe/Believe";
import Blog from "./pages/Blog/Blog";
import Footer from "./pages/Footer/Footer";
import Future from "./pages/Future/Future";
import Movement from "./pages/Movement/Movement";
import { Fade, Grow } from "@mui/material";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Transition from "./transitions/Transition";
import BlogSection from "./pages/BlogSection/BlogSection";
import HeadingText from "./components/HeadingText/HeadingText";
import Home from "./pages/Home/Home";

function App() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }, 0);
  }, [pathname, hash, key]);

  return (
      <Fade in={true} timeout={500}>
        <div className="App">
          <NavContact />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="blog" element={<BlogSection />}/>
          </Routes>

          <Footer />
         
        </div>
      </Fade>
  );
}

export default App;
