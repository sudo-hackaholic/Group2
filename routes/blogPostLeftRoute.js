import express from "express";

const blogPostLeftRoute = express.Router();

blogPostLeftRoute.get("/", (req, res) => {
  res.render("blog-post-left");
});

export default blogPostLeftRoute;
