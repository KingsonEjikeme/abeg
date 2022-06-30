import { Box, Button, Grid, LinearProgress, Typography } from "@mui/material";
import React from "react";
import HeadingText from "../../components/HeadingText/HeadingText";
import Believe from "../Believe/Believe";
import Girl from './../../assets/kiana-bosman-0pB01U2NDCQ-unsplash.jpg';
import "./Future.css";
const Future = () => {
  return (
    <div className="future" id="donate">
      <HeadingText text={"Feature Project"} />
      <div className="donate-to-cause">
        <Grid container spacing={10}>
          <Grid item md={4}>
            <img src={Girl} alt="feature-project" className="feature-image" />
          </Grid>
          <Grid item md={6}>
            <Grid container>
              <Typography>ABE-IGI BOOKDRIVE 1.0</Typography>
            </Grid>
            <Grid container>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus doloremque placeat minima corrupti nam, porro tempore
                velit id quis facilis ullam maxime quisquam consequuntur dolorem
                tenetur corporis molestias? Repellendus, culpa.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas ab minima magni iste dolore a asperiores unde beatae
                similique natus architecto consequuntur mollitia quidem rerum
                facilis, nam commodi eligendi aperiam?
              </p>
            </Grid>
            <Grid container>
              <Box
                sx={{
                  width: "100%",
                  "& .MuiLinearProgress-root": {
                    backgroundColor: `#FFD5B0`,
                    height: "20px",
                    opacity: "0.7",
                  },
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: `#D49560`,
                  },
                }}
                className="linear-progress-bar"
              >
                <LinearProgress variant="determinate" value={10} />
                <div className="linear-percentage">10%</div>
                <Box className="raise-target">
                <Box className="raise">Raised: 10</Box>
                <Box className="target">Target: 100</Box>
              </Box>
              </Box>
              
            </Grid>
            <Grid container>
              <Button
                sx={{
                  background: "#ED862E",
                  backgroundColor: "#ED862E",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "700",
                  margin: "auto",
                  marginTop: "10px",
                  "&:hover":{
                    backgroundColor: "#ED862E",
                    opacity: "0.8"
                  }
                }}
              >
                DONATE TO CAUSE
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Believe/>
    </div>
  );
};

export default Future;
