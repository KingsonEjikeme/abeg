import { Button, Grid } from "@mui/material";
import React from "react";
import "./Blog.css";
import Blog1 from './../../assets/pexels-daniel-edeke-1328404.jpg'
import HeadingText from "../../components/HeadingText/HeadingText";

const Blog = () => {
  return (
    <div className="blog">
     
      <HeadingText className="section-title" text={'Abe-igi Stories'}/>
      
      <Grid container justifyContent={'space-around'} className="blog-container" column-spacing={2}>
        <Grid item className="blog-item">
          <img src={Blog1} alt="blog-1" className="blog-item-image"/>
          <div className="blog-item-information">
            <Grid container className="blog-item-title">Getting To The Light At The Dark Tunnel</Grid>
            <Grid container className="blog-date-comment">
                <Grid item className="blog-date">22-06-2021</Grid>
                <Grid item className="blog-comment">0 Comments</Grid>
            </Grid>
            <Grid container className="blog-item-read">Read</Grid>
          </div>
        </Grid>
        <Grid item className="blog-item">
          <img src={Blog1} alt="blog-1" className="blog-item-image"/>
          <div className="blog-item-information">
            <Grid container className="blog-item-title">Getting To The Light At The Dark Tunnel</Grid>
            <Grid container className="blog-date-comment">
                <Grid item className="blog-date">22-06-2021</Grid>
                <Grid item className="blog-comment">0 Comments</Grid>
            </Grid>
            <Grid container className="blog-item-read">Read</Grid>
          </div>
        </Grid>
        <Grid item className="blog-item">
          <img src={Blog1} alt="blog-1" className="blog-item-image"/>
          <div className="blog-item-information">
            <Grid container className="blog-item-title">Getting To The Light At The Dark Tunnel</Grid>
            <Grid container className="blog-date-comment">
                <Grid item className="blog-date">22-06-2021</Grid>
                <Grid item className="blog-comment">0 Comments</Grid>
            </Grid>
            <Grid container className="blog-item-read">Read</Grid>
          </div>
        </Grid>
        
      </Grid>

      <Grid container className="blog-button-container">
            <Button className="blog-button" variant="contained">
                All Stories
            </Button>
      </Grid>
      
    </div>
  );
};

export default Blog;
