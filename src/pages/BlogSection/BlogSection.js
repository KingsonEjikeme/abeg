import React, { useState } from "react";
import BlogItem from "../../components/BlogItem/BlogItem";
import "./BlogSection.css";
import Girl from "./../../assets/kiana-bosman-0pB01U2NDCQ-unsplash.jpg";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  Modal,
  TextField,
} from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import { Close } from "@mui/icons-material";
import TelegramIcon from "@mui/icons-material/Telegram";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeadingText from "../../components/HeadingText/HeadingText";
const BlogSection = () => {
  const [blogDialog, setBlogDialog] = useState(false);
  const [scroll, setScroll] = useState("paper");
  return (
    <>
    <HeadingText text="ABEIGI STORIES"/>
      <div className="blog-section">
        <div className="blog-section-container">
          <BlogItem
            blogImageText={Girl}
            blogTitle="Title"
            blogContent="Content"
            buttonText="Read"
            buttonFunction = {()=>{setBlogDialog(true)}}
          />
          <BlogItem
            blogImageText={Girl}
            blogTitle="Title"
            blogContent="Content"
            buttonText="Read"
          />
          <BlogItem
            blogImageText={Girl}
            blogTitle="Title"
            blogContent="Content"
            buttonText="Read"
          />
        </div>
        <Dialog
          open={blogDialog}
          scroll={scroll}
          onClose={() => {
            setBlogDialog(false);
          }}
          hideBackdrop={true}
        >
          <div className="blog-dialog">
            <DialogTitle className="dialog-title-container">
              <div className="dialog-title">
                <div className="dialog-title-item">Hello</div>
                <div className="dialog-title-item">
                  <Close fontSize="large" onClick={()=>{setBlogDialog(false)}}/>
                </div>
              </div>
            </DialogTitle>
            <DialogContent
              dividers={scroll === "paper"}
              className="dialog-content"
            >
              <div>
                <img src={Girl} alt="" className="single-post-image" />
              </div>
              <div className="single-post-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, temporibus molestiae! Saepe minus temporibus quia
                  cum? Nulla repellendus, maiores eum molestiae vel itaque ab
                  cumque animi blanditiis facilis dicta impedit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, temporibus molestiae! Saepe minus temporibus quia
                  cum? Nulla repellendus, maiores eum molestiae vel itaque ab
                  cumque animi blanditiis facilis dicta impedit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, temporibus molestiae! Saepe minus temporibus quia
                  cum? Nulla repellendus, maiores eum molestiae vel itaque ab
                  cumque animi blanditiis facilis dicta impedit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, temporibus molestiae! Saepe minus temporibus quia
                  cum? Nulla repellendus, maiores eum molestiae vel itaque ab
                  cumque animi blanditiis facilis dicta impedit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, temporibus molestiae! Saepe minus temporibus quia
                  cum? Nulla repellendus, maiores eum molestiae vel itaque ab
                  cumque animi blanditiis facilis dicta impedit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, temporibus molestiae! Saepe minus temporibus quia
                  cum? Nulla repellendus, maiores eum molestiae vel itaque ab
                  cumque animi blanditiis facilis dicta impedit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, temporibus molestiae! Saepe minus temporibus quia
                  cum? Nulla repellendus, maiores eum molestiae vel itaque ab
                  cumque animi blanditiis facilis dicta impedit.
                </p>
              </div>
            </DialogContent>
            <DialogActions className="dialog-actions">
              <div className="dialog-actions-left">
                View Scrollable comments
              </div>
              <div className="dialog-actions-right">
                <TextField
                  id="standard-textarea"
                  label="Leave an honest comment"
                  placeholder="I find this sto..."
                  multiline
                  variant="standard"
                />
                <TelegramIcon className="blog-post-icons" />
                <FavoriteIcon className="blog-post-icons" />
              </div>
            </DialogActions>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default BlogSection;
