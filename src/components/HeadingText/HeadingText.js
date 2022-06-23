import { Typography } from "@mui/material";
import React from "react";
import "./HeadingText.css";
const HeadingText = ({text}) => {
  return (
    <div className="heading-text">
      <Typography variant="h3" className="heading-text-content">
        {text}
      </Typography>
      <div className="heading-underline"></div>
    </div>
  );
};

export default HeadingText;
