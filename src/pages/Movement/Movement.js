import React from "react";
import "./Movement.css";
import Jump from "./../../assets/pexels-margaret-weir-620530.jpg";
import HeadingText from "../../components/HeadingText/HeadingText";
const Movement = () => {
  return (
    <div className="movement">
      <img src={Jump} alt="Jump" className="movement-image" />
      <div className="movement-image-text">
        <HeadingText text={"Join the movement"} />
        <div>
          We believe that children should have access to the quality books and
          reading materials as this
        </div>
      </div>
    </div>
  );
};

export default Movement;
