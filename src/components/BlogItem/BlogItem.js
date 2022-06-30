import { Grid } from "@mui/material";
import React from "react";
import "./BlogItem.css";
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';


const BlogItem = ({ blogImageText, title, content, buttonText, buttonFunction }) => {
  return (
    <div className="blog-single-item">
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <img src={blogImageText} alt="blog-image" className="blog-image" />
        </Grid>
        <Grid item className="blog-item-content" xs={6}>
          <div>
            <Grid container className="blog-title">
              Title{title}
            </Grid>
            <Grid container className="blog-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                dolores blanditiis omnis recusandae vero harum repudiandae
                officiis architecto cum veniam repellat quisquam porro vitae
                tempora ab, aliquam suscipit hic sunt!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                repellat illo repudiandae sunt odit itaque esse odio doloribus
                adipisci nam? Cumque ducimus ipsum beatae doloribus aliquid
                quaerat quas culpa nobis.
              </p>
            </Grid>
            <Grid container className="blog-button" onClick={buttonFunction}>
              {buttonText}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default BlogItem;
