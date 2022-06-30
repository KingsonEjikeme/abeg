const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Blog = require("./Blog.js");
mongoose.connect("mongodb://root:root@localhost:27017/?authMechanism=DEFAULT", ()=>{console.log("DB connected");});

run()
async function run(){
    try{
        const blog = new Blog({
            title: "My Title",
            content: "My Lorem ipsum"
        })
        await blog.save()
        console.log(blog);
    }catch(e){
        console.log(e.message);
    }
    
}

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
